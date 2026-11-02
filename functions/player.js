import { PhysicsCharacterController } from "@babylonjs/core/Physics/v2/characterController";

export function initBody(scene, camera) {
    const characterController = new PhysicsCharacterController(
        camera.position, 
        { 
            capsuleHeight: 1.8, 
            capsuleRadius: 0.6 
        }, 
        scene
    );

    return { characterController };
};