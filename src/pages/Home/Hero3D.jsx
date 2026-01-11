import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, OrbitControls, Text, Icosahedron } from '@react-three/drei';

const ServiceIcon = ({ position, rotation, symbol, color }) => (
    <Text
        position={position}
        rotation={rotation}
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
    >
        {symbol}
    </Text>
);

const FloatingShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        // Gentle auto-rotation even when not interacting
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            meshRef.current.position.y = Math.sin(t / 2) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={meshRef}>
                <Icosahedron args={[1.8, 0]}>
                    <meshPhysicalMaterial
                        color="#0F172A"
                        roughness={0.3}
                        metalness={0.8}
                        clearcoat={1}
                        opacity={0.9}
                        transparent
                        wireframe={false}
                    />
                </Icosahedron>

                {/* Wireframe overlay for "tech" look */}
                <Icosahedron args={[1.82, 0]}>
                    <meshBasicMaterial color="#0D9488" wireframe transparent opacity={0.3} />
                </Icosahedron>

                {/* Service Logos placed on faces (approximate positions for Icosahedron) */}
                <ServiceIcon position={[0, 0, 1.85]} rotation={[0, 0, 0]} symbol="⚡" color="#EAB308" /> {/* Electric */}
                <ServiceIcon position={[1.5, 1, 0]} rotation={[0, 1.5, 0]} symbol="💧" color="#3B82F6" /> {/* Water */}
                <ServiceIcon position={[-1.5, 1, 0]} rotation={[0, -1.5, 0]} symbol="❄️" color="#0D9488" /> {/* HVAC */}
                <ServiceIcon position={[0, -1.5, 1]} rotation={[0.5, 0, 0]} symbol="🔧" color="#F97316" /> {/* Tools */}
                <ServiceIcon position={[0, 1.5, -1]} rotation={[-0.5, 3.14, 0]} symbol="🛡️" color="#ffffff" /> {/* Trust */}
            </group>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <Canvas style={{ height: '100%', width: '100%' }}>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={1.5} />
            <pointLight position={[-10, -5, -5]} intensity={1} color="#0D9488" />

            <FloatingShape />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
                rotateSpeed={0.5}
            />
            <Environment preset="city" />
        </Canvas>
    );
};

export default Hero3D;
