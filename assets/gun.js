import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { TransformNode } from "@babylonjs/core/pure";
import "@babylonjs/loaders/glTF";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { AnimationGroup } from "@babylonjs/core/pure";


export async function initGun(scene, camera) {
    const result = await SceneLoader.ImportMeshAsync('', '/gun/', 'SMG-With-Arms-1.glb', scene);

    const gunRoot = new TransformNode("Root", scene);

    gunRoot.parent = camera;

    const importedRoots = result.transformNodes.filter((node) => !node.parent);
    importedRoots.forEach((node) => {
        node.parent = gunRoot;
    });

    result.meshes.forEach((mesh) => {
        if (!mesh.parent) {
            mesh.parent = gunRoot;
        }
        mesh.isPickable = false;
        mesh.checkCollisions = false;
    });

    gunRoot.position.set(0.2, -0.4, 0.7);
    gunRoot.rotation.y = 1.57;
    gunRoot.scaling = new Vector3(0.3, 0.3, 0.3);

    const fireAnimation = scene.getAnimationGroupByName("Fire");
    const idleAnimation = scene.getAnimationGroupByName("Idle");
    const reloadAnimation = scene.getAnimationGroupByName("Reload");

    idleAnimation.start(true);
    fireAnimation.stop(true);
    reloadAnimation.stop();

    return { gunRoot, fireAnimation, idleAnimation, reloadAnimation };
};