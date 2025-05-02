import { useEffect, useRef, useState } from "react";

const MouseTrial = () => {
	const lampRef = useRef<HTMLDivElement>(null);
	const lightRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (lampRef.current && lightRef.current) {
			lampRef.current.style.transform = `translate(${position.x}px, ${position.y}px) translate(-50%, -100%)`;
			lightRef.current.style.background = `
        radial-gradient(
          circle at ${position.x}px ${position.y}px,
          rgba(255, 255, 150, 0.3) 0px,
          rgba(0, 0, 0, 0.85) 150px
        )
      `;
		}
	}, [position]);

	return (
		<>
			{/* Light effect */}
			<div
				ref={lightRef}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
					zIndex: 5,
					transition: "background 0.05s",
				}}
			/>

			{/* Inline Lamp SVG */}
			<div
				ref={lampRef}
				style={{
					position: "fixed",
					width: "40px",
					height: "60px",
					pointerEvents: "none",
					zIndex: 10,
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 64 64"
					width="100%"
					height="100%"
				>
					<path d="M32 2 L24 18 H40 L32 2 Z" fill="#FFC107" />
					<circle cx="32" cy="40" r="10" fill="#FFD54F" />
				</svg>
			</div>
		</>
	);
};

export default MouseTrial;
