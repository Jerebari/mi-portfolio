"use client";

import { useEffect, useRef } from "react";

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let mouse = { x: -1000, y: -1000 };
    const gap = 16;
    const baseRadius = 0.5;
    const maxRadius = 2;
    const influenceRadius = 180;
    const baseAlpha = 0.4;
    const maxAlpha = 0.4;

    const ripples = [];
    const rippleSpeed = 200;
    const rippleDuration = 600;
    const rippleWidth = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / gap) + 1;
      const rows = Math.ceil(canvas.height / gap) + 1;
      const offsetX = (canvas.width % gap) / 2;
      const offsetY = (canvas.height % gap) / 2;

      // Clean expired ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const elapsed = now - ripples[r].time;
        const maxLife = rippleDuration + (rippleWidth / rippleSpeed) * 1000;
        if (elapsed > maxLife) ripples.splice(r, 1);
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * gap;
          const y = offsetY + j * gap;

          // Mouse hover effect
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / influenceRadius);
          const eased = t * t;

          let extraAlpha = 0;
          let extraRadius = 0;

          // Ripple effects
          for (let r = 0; r < ripples.length; r++) {
            const ripple = ripples[r];
            const elapsed = now - ripple.time;
            const currentRadius = (elapsed / 1000) * rippleSpeed;
            const rdx = ripple.x - x;
            const rdy = ripple.y - y;
            const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
            const distFromRing = Math.abs(rDist - currentRadius);

            if (distFromRing < rippleWidth) {
              const ringT = 1 - distFromRing / rippleWidth;
              const fade = Math.max(0, 1 - elapsed / rippleDuration);
              const strength = ringT * fade;
              extraAlpha = Math.max(extraAlpha, strength * 0.5);
              extraRadius = Math.max(extraRadius, strength * 1.5);
            }
          }

          const radius =
            baseRadius +
            (maxRadius - baseRadius) * eased +
            extraRadius;
          const alpha = Math.min(
            1,
            baseAlpha + (maxAlpha - baseAlpha) * eased + extraAlpha
          );

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e) => {
      ripples.push({ x: e.clientX, y: e.clientY, time: performance.now() });
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
