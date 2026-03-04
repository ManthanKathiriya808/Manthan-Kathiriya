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

      const results = await Promise.all(
        Array.from({ length: FRAME_COUNT }, (_, i) => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            const indexStr = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${indexStr}_delay-0.041s.webp`;
            img.onload = () => {
              loadedCount++;
              resolve(img);
            };
            img.onerror = () => {
              loadedCount++;
              resolve(img);
            };
          });
        })
      );

      setImages(results);
      setImagesLoaded(true);
      onLoaded();
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
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        {/* Only mount overlay text once images are loaded so they attach properly */}
        {imagesLoaded && <Overlay scrollYProgress={scrollYProgress} />}
      </div>
    </div>
  );
}
