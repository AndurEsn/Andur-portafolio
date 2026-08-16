import { useEffect, useRef } from 'react';
import { Theme } from '../../types';

interface LandingParticleFieldProps {
  theme: Theme;
}

interface Particle {
  x: number;
  y: number;
  renderX: number;
  renderY: number;
  renderScale: number;
}

export default function LandingParticleField({ theme }: LandingParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isInteractive = hasFinePointer && !reduceMotion;
    const particles: Particle[] = [];
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#4C63F6';
      const influenceRadius = Math.min(150, Math.max(105, width * 0.16));

      particles.forEach((particle) => {
        const deltaX = particle.x - pointer.x;
        const deltaY = particle.y - pointer.y;
        const distance = Math.hypot(deltaX, deltaY) || 1;
        const proximity = pointer.active ? Math.max(0, 1 - distance / influenceRadius) : 0;
        const displacement = proximity * 9;
        const targetX = particle.x + (deltaX / distance) * displacement;
        const targetY = particle.y + (deltaY / distance) * displacement;
        const targetScale = 1 + proximity * 1.3;

        particle.renderX += (targetX - particle.renderX) * 0.16;
        particle.renderY += (targetY - particle.renderY) * 0.16;
        particle.renderScale += (targetScale - particle.renderScale) * 0.16;

        context.beginPath();
        context.globalAlpha = 0.14 + proximity * 0.5;
        context.fillStyle = primaryColor;
        context.arc(particle.renderX, particle.renderY, 1.15 * particle.renderScale, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
    };

    const animate = () => {
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles.length = 0;
      const spacing = width < 640 ? 24 : 28;
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          particles.push({ x, y, renderX: x, renderY: y, renderScale: 1 });
        }
      }

      pointer.x = width / 2;
      pointer.y = height / 2;
      draw();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const rect = canvas.getBoundingClientRect();
      const isInside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      pointer.active = isInside;
      if (isInside) {
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
      }
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    if (isInteractive) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('blur', handlePointerLeave);
      document.documentElement.addEventListener('mouseleave', handlePointerLeave);
      animationFrame = window.requestAnimationFrame(animate);
    }

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handlePointerLeave);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-dvh w-screen" aria-hidden="true" />;
}
