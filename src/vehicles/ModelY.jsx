
import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Darkhorse(props) {
  const { nodes, materials } = useGLTF('models/DarkHorse.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
          <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
          </group>
          <group position={[-83.884, 37.78, 163.232]} rotation={[-Math.PI / 2, 0, 2.845]} scale={204.779}>
            <mesh geometry={nodes.wheel001_chrome_0.geometry} material={materials.chrome} />
            <mesh geometry={nodes.wheel001_disc_0.geometry} material={materials.disc} />
            <mesh geometry={nodes.wheel001_rim_0.geometry} material={materials.material_12} />
            <mesh geometry={nodes.wheel001_tire_0.geometry} material={materials.tire} />
          </group>
          <group position={[83.884, 37.78, -126.603]} rotation={[-Math.PI / 2, 0, 0]} scale={204.779}>
            <mesh geometry={nodes.wheel002_chrome_0.geometry} material={materials.chrome} />
            <mesh geometry={nodes.wheel002_disc_0.geometry} material={materials.disc} />
            <mesh geometry={nodes.wheel002_rim_0.geometry} material={materials.material_12} />
            <mesh geometry={nodes.wheel002_tire_0.geometry} material={materials.tire} />
          </group>
          <group position={[83.884, 37.78, 163.232]} rotation={[-Math.PI / 2, 0, -0.297]} scale={204.779}>
            <mesh geometry={nodes.wheel003_chrome_0.geometry} material={materials.chrome} />
            <mesh geometry={nodes.wheel003_disc_0.geometry} material={materials.disc} />
            <mesh geometry={nodes.wheel003_rim_0.geometry} material={materials.material_12} />
            <mesh geometry={nodes.wheel003_tire_0.geometry} material={materials.tire} />
          </group>
          <group position={[-83.884, 37.78, -126.603]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={204.779}>
            <mesh geometry={nodes.wheel004_chrome_0.geometry} material={materials.chrome} />
            <mesh geometry={nodes.wheel004_disc_0.geometry} material={materials.disc} />
            <mesh geometry={nodes.wheel004_rim_0.geometry} material={materials.material_12} />
            <mesh geometry={nodes.wheel004_tire_0.geometry} material={materials.tire} />
          </group>
          <mesh geometry={nodes.caliper001_cali_0.geometry} material={materials.cali} position={[-83.884, 37.78, 163.232]} rotation={[0.365, -0.278, 0.104]} scale={-204.779} />
          <mesh geometry={nodes.caliper002_cali_0.geometry} material={materials.cali} position={[83.884, 37.78, -126.603]} rotation={[-2.792, 0, 0]} scale={204.779} />
          <mesh geometry={nodes.caliper003_cali_0.geometry} material={materials.cali} position={[83.884, 37.78, 163.232]} rotation={[-2.777, 0.278, -0.104]} scale={204.779} />
          <mesh geometry={nodes.caliper004_cali_0.geometry} material={materials.cali} position={[-83.884, 37.78, -126.603]} rotation={[0.35, 0, 0]} scale={-204.779} />
          <mesh geometry={nodes.mesh001_glack_0.geometry} material={materials.glack} scale={100} />
          <mesh geometry={nodes.mesh002_glass_0.geometry} material={materials.glass} scale={100} />
          <mesh geometry={nodes.mesh003_chrome_0.geometry} material={materials.chrome} scale={100} />
          <mesh geometry={nodes.mesh005_mlack_0.geometry} material={materials.mlack} scale={100} />
          <mesh geometry={nodes.mesh006_red001_0.geometry} material={materials['red.001']} scale={100} />
          <mesh geometry={nodes.mesh007_glass_0.geometry} material={materials.glass} scale={100} />
          <mesh geometry={nodes.mesh008_mlack_0.geometry} material={materials.mlack} scale={100} />
          <mesh geometry={nodes.mesh009_bumpa_0.geometry} material={materials.bumpa} scale={100} />
          <mesh geometry={nodes.mesh010_glass_l_0.geometry} material={materials.glass_l} scale={100} />
          <mesh geometry={nodes.mesh011_emit_0.geometry} material={materials.emit} scale={100} />
          <mesh geometry={nodes.mesh012_red_0.geometry} material={materials.material} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ModelY.glb')
