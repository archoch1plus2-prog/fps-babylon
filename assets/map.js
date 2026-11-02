import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { PhysicsAggregate } from "@babylonjs/core/Physics/v2/physicsAggregate";
import { PhysicsShapeType } from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin";
import "@babylonjs/loaders/glTF";

export async function initMaze(scene) {
    if (!scene.isPhysicsEnabled()) {
        console.error("Physics engine is not enabled on the scene!");
        return {};
    }

    const result = await SceneLoader.AppendAsync('/', 'FPS-MAP-1.glb', scene);

    const importedMeshes = scene.meshes.filter(m => m.getClassName() === "Mesh" && m.getTotalVertices() > 0);

    const staticMapMesh = Mesh.MergeMeshes(
        importedMeshes, 
        true, 
        true,
        null, 
        false, 
        true  
    );

    if (!staticMapMesh) return;

    const mapAggregate = new PhysicsAggregate(
        staticMapMesh, 
        PhysicsShapeType.MESH, 
        { 
            mass: 0,
            friction: 0.4, 
            restitution: 0.1 
        }, 
        scene
    );

    return { mapAggregate };
}