import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { TechModel } from "../../../constants";

const TechIcon = ({ model }: { model: TechModel }) => {
	const scene = useGLTF(model.modelPath);

	useEffect(() => {
		if (model.name === "Interactive Developer") {
			scene.scene.traverse((child) => {
				if ((child as THREE.Mesh).isMesh && child.name === "Object_5") {
					const mesh = child as THREE.Mesh;
					mesh.material = new THREE.MeshStandardMaterial({
						color: "white",
					});
				}
			});
		}
	}, [scene, model]);

	return (
		<Canvas>
			<ambientLight intensity={0.3} />
			<directionalLight position={[5, 5, 5]} intensity={1} />
			<spotLight
				position={[10, 15, 10]}
				angle={0.3}
				penumbra={1}
				intensity={2}
			/>
			<Environment preset="city" />

			<Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
				<group scale={model.scale} rotation={model.rotation}>
					<primitive object={scene.scene} />
				</group>
			</Float>

			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default TechIcon;
