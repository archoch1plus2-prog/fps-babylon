import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { TransformNode } from "@babylonjs/core/pure";
import "@babylonjs/loaders/glTF";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { AnimationGroup } from "@babylonjs/core/pure";


export async function initGun(scene, camera) {
    const result = await SceneLoader.ImportMeshAsync('', '/gun/', 'ak47.glb', scene);

    const idleAnimation = result.animationGroups.find(ag => ag.name.toLowerCase().includes("idle"));
    const fireAnimation = result.animationGroups.find(ag => ag.name.toLowerCase().includes("fire"));
    const reloadAnimation = result.animationGroups.find(ag => ag.name.toLowerCase().includes("reload_empty"));

    const gunRoot = new TransformNode("gunRoot", scene);

    gunRoot.scaling.x = -1;

    gunRoot.parent = camera;

    result.meshes.forEach((mesh) => {
        mesh.parent = gunRoot;
        mesh.isPickable = false;
        mesh.checkCollisions = false;
    });
    
    gunRoot.position.set(-0.1, 0, 0);
    gunRoot.rotation.y = -0.1;
    gunRoot.scaling = new Vector3(0.25, 0.25, 0.25);

    idleAnimation.start(true);

    return { gunRoot, idleAnimation, fireAnimation, reloadAnimation };
};