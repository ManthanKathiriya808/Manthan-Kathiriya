"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 192; // frame_000 to frame_191

interface ScrollyCanvasProps {
  onLoaded: () => void;
}

export default function ScrollyCanvas({ onLoaded }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track ONLY the scroll progress of this specific 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
      let loadedCount = 0;

      // Drop from 10 to 1 to fire FCP/LCP instantly after the FIRST frame is ready
      const INITIAL_FRAMES_TO_LOAD = 1;

      // Function to load a single image
      const loadImage = (index: number): Promise<HTMLImageElement> => {
        return new Promise((resolve) => {
          const img = new Image();
          const indexStr = index.toString().padStart(3, "0");
          img.src = `/sequence/frame_${indexStr}_delay-0.041s.webp`;

          // Use fetch priority for the very first frame to boost LCP
          if (index === 0) {
            img.fetchPriority = "high";
          } else {
            img.fetchPriority = "low";
          }

          img.onload = () => {
            loadedCount++;
            resolve(img);
          };
          img.onerror = () => {
            loadedCount++;
            resolve(img); // Still resolve to not break the array mapping
          };
        });
      };

      // 1. Load initial frames synchronously to unblock rendering (LCP optimization)
      const initialPromises = [];
      for (let i = 0; i < INITIAL_FRAMES_TO_LOAD; i++) {
        initialPromises.push(loadImage(i));
      }

      const initialResults = await Promise.all(initialPromises);
      initialResults.forEach((img, i) => {
        loadedImages[i] = img;
      });

      // Show the canvas immediately since we have the first frame
      setImages([...loadedImages]);
      setImagesLoaded(true);
      onLoaded();

      // 2. Load the remaining frames in the background asynchronously,
      // without blocking the main thread (fixes TBT and network payload blocking)
      const loadRemaining = async () => {
        // Load in smaller batches
        const BATCH_SIZE = 5;

        for (let i = INITIAL_FRAMES_TO_LOAD; i < FRAME_COUNT; i += BATCH_SIZE) {
          const batchPromises = [];
          for (let j = 0; j < BATCH_SIZE && i + j < FRAME_COUNT; j++) {
            batchPromises.push(loadImage(i + j));
          }
          const batchResults = await Promise.all(batchPromises);

          batchResults.forEach((img, j) => {
            loadedImages[i + j] = img;
          });

          // Update state smoothly as chunks arrive
          setImages([...loadedImages]);

          // Yield to browser main thread to avoid layout thrashing and high TBT
          await new Promise(r => setTimeout(r, 10));
        }
      };

      // Defer loading the rest of the frames until the page is fully interactive
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => loadRemaining(), { timeout: 2000 });
      } else {
        setTimeout(loadRemaining, 1000);
      }
    };

    preloadImages();
  }, [onLoaded]);

  // Map scroll progress (0 to 1) to frame index (0 to 191)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: no alpha
    if (!ctx) return;

    const render = (latestFrame: number) => {
      const currentFrame = Math.floor(latestFrame);
      const img = images[currentFrame];

      if (img && img.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
        }

        const scaleFactor = 1.15;
        drawWidth *= scaleFactor;
        drawHeight *= scaleFactor;

        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(frameIndex.get());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Subscribe to frameIndex changes for "buttery smooth" updates without perpetual RAF
    const unsubscribe = frameIndex.on("change", (latest) => {
      render(latest);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [imagesLoaded, frameIndex, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Blurred placeholder — shown while canvas frames are loading */}
        {!imagesLoaded && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('/sequence/frame_000_delay-0.041s.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px)',
              transform: 'scale(1.1)', // prevent blur edges
              opacity: 0.6,
            }}
          />
        )}
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover relative z-10"
        />
        {/* Only mount overlay text once images are loaded so they attach properly */}
        {imagesLoaded && <Overlay scrollYProgress={scrollYProgress} />}
      </div>
    </div>
  );
}
