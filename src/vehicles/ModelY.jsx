import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from "valtio"
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';

export function ModelY(props) {
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)
  const { nodes, materials } = useGLTF('/models/ModelY.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
          <mesh geometry={nodes.Body.geometry} material={materials.BaseMtl} material-color={snap1.base.BaseMtl} visible={overlay === 1}/>
            <mesh geometry={nodes.Body001.geometry} material={materials.Slaughter} material-color={snap1.base.BaseMtl} visible={overlay === 2}/>
            <mesh geometry={nodes.Body002.geometry} material={materials.BatLady} material-color={snap1.base.BaseMtl} visible={overlay === 3}/>
            <mesh geometry={nodes.Body003.geometry} material={materials.BrakeLine} material-color={snap1.base.BaseMtl} visible={overlay === 4}/>
            <mesh geometry={nodes.Body004.geometry} material={materials.Danger} material-color={snap1.base.BaseMtl} visible={overlay === 5}/>
            <mesh geometry={nodes.Body005.geometry} material={materials.Embers} material-color={snap1.base.BaseMtl} visible={overlay === 6}/>
            <mesh geometry={nodes.Body006.geometry} material={materials.SpiderID} material-color={snap1.base.BaseMtl} visible={overlay === 7}/>
            <mesh geometry={nodes.Body007.geometry} material={materials.Fluid} material-color={snap1.base.BaseMtl} visible={overlay === 8}/>
            <mesh geometry={nodes.Body008.geometry} material={materials.HotRods} material-color={snap1.base.BaseMtl} visible={overlay === 9}/>
            <mesh geometry={nodes.Body009.geometry} material={materials.Mayan} material-color={snap1.base.BaseMtl} visible={overlay === 10}/>
            <mesh geometry={nodes.Body010.geometry} material={materials.SeaBreeze} material-color={snap1.base.BaseMtl} visible={overlay === 11}/>
            <mesh geometry={nodes.Body011.geometry} material={materials.ShapeShifter} material-color={snap1.base.BaseMtl} visible={overlay === 12}/>
            <mesh geometry={nodes.Body012.geometry} material={materials.Silk} material-color={snap1.base.BaseMtl} visible={overlay === 13}/>
            <mesh geometry={nodes.Body013.geometry} material={materials.SnakeSkin} material-color={snap1.base.BaseMtl} visible={overlay === 14}/>
            <mesh geometry={nodes.Body014.geometry} material={materials.Flare} material-color={snap1.base.BaseMtl} visible={overlay === 15}/>
            <mesh geometry={nodes.Body015.geometry} material={materials.Dominator} material-color={snap1.base.BaseMtl} visible={overlay === 16}/>
            <mesh geometry={nodes.Body016.geometry} material={materials.TopGun} material-color={snap1.base.BaseMtl} visible={overlay === 17} />
            <mesh geometry={nodes.Body017.geometry} material={materials.Explosion} material-color={snap1.base.BaseMtl} visible={overlay === 18} />
            <mesh geometry={nodes.Body018.geometry} material={materials.WildWest} material-color={snap1.base.BaseMtl} visible={overlay === 19} />
            <mesh geometry={nodes.Body019.geometry} material={materials.Zombie} material-color={snap1.base.BaseMtl} visible={overlay === 20} />
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

useGLTF.preload('/models/ModelY.glb')
