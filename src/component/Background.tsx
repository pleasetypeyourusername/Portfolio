import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current || document.createElement("canvas");

        const ctx = canvas.getContext("2d");

        let mouse = {
            x: -1000,
            y: -1000,
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        };

        window.addEventListener("mousemove", handleMouseMove);

        if (ctx) {
            const spacing = 50;

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (let x = 0; x < canvas.width; x += spacing) {
                    for (let y = 0; y < canvas.height; y += spacing) {

                        const dx = mouse.x - x;
                        const dy = mouse.y - y;

                        const distance = Math.sqrt(dx * dx + dy * dy);

                        const radius = distance < 150
                            ? 2.5
                            : 0;

                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = '#FFFFFF'
                        ctx.fillStyle = '#FFFFFF'
                        ctx.fill();
                    }
                }

                requestAnimationFrame(animate);
            };

            animate();
        }

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
  }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed w-screen h-screen inset-0 z-0 pointer-events-none opacity-40"
        />
    );
}