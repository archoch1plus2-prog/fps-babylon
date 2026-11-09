import { Scene } from '@babylonjs/core/scene';
import { UniversalCamera } from '@babylonjs/core/Cameras/universalCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from "@babylonjs/core/pure";

import "@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput";

export function initScene(engine, canvas) {
        const scene = new Scene(engine);

        const camera = new UniversalCamera("camera", new Vector3(0, 1.5, 0), scene);

        camera.attachControl(canvas, true);

        camera.keysUp = [87, 38];
        camera.keysDown = [83, 40];
        camera.keysLeft = [65, 37];
        camera.keysRight = [68, 39];

        camera.speed = 0.25;

        camera.fov = 0.7;

        camera.minZ = 0.1; 
        camera.maxZ = 10000.0;

        canvas.tabIndex = 1;
        canvas.focus();

        //const cameraAnchor = new TransformNode("cameraAnchor", scene);
        //camera.parent = cameraAnchor;



        return { scene, camera };
};