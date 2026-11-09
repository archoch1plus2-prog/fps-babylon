import HavokPhysics from "@babylonjs/havok";
import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin"; 
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import "@babylonjs/core/Physics/physicsEngineComponent";

export async function initPhysics(scene) {
    const instance = await HavokPhysics();
    const plugin = new HavokPlugin(true, instance);

    scene.enablePhysics(new Vector3(0, -15, 0), plugin);
};