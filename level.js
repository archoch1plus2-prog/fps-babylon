import "@babylonjs/core/Loading/loadingScreen";

import { cleanElements } from "./functions/clean.js";

import { initEngine } from "./functions/engine.js";
import { initScene } from "./functions/scene.js";
import { initLoops } from "./functions/loops.js";
import { initStats } from "./functions/frames.js";
import { initLock } from "./functions/lock.js";
import { initFull } from "./functions/fullscreen.js";
import { initTilt } from "./functions/tilt.js";
import { initBody } from "./functions/player.js";
import { initFov } from "./functions/fov.js";
import { initCrouch } from "./functions/crouch.js";

import { initPhysics } from "./physics/physics.js";


import { initHemi } from "./assets/ambient.js";
import { initMaze } from "./assets/map.js";
import { initGun } from "./assets/gun.js";

import { initReload, initShoot } from "./bullet/shoot.js";

export async function initLevel() {
    cleanElements();

    const { engine, canvas } = initEngine();
    const { scene, camera } = initScene(engine, canvas);
    const { resizer } = initLoops(engine);
    const { lock } = initLock(canvas);
    const { container, fullscreen } = initFull();
    const { check } = initTilt(engine, camera);

    await initPhysics(scene);

    const { characterController } = initBody(scene, camera);

    const { hemiLight } = initHemi(scene); 
    const { mapAggregate } = await initMaze(scene);
    const { gunRoot, fireAnimation, idleAnimation, reloadAnimation } = await initGun(scene, camera);
    let { crouchStatus } = initCrouch(gunRoot, idleAnimation);

    initReload(gunRoot, fireAnimation, idleAnimation, reloadAnimation, scene, crouchStatus);
    initShoot(fireAnimation, idleAnimation, reloadAnimation, scene, camera);
    initFov(camera);

    window.addEventListener('click', () => lock(canvas));
    window.addEventListener('keydown', fullscreen);
    window.addEventListener('resize', resizer)

    const overlays = document.querySelectorAll('.overlay');

    overlays.forEach((element) => {
        element.style.zIndex = '9999';
    });

//-----------------------------------------------------------

    scene.onBeforeRenderObservable.add(() => {
        stats.begin();

        check(engine, camera);

        camera.cameraDirection.y = 0;

        crouchStatus.state = crouchStatus.state;
        if (crouchStatus.state) {
            idleAnimation.stop();
        };
    });

    scene.onAfterRenderObservable.add(() => {
        stats.end();
    });

    engine.runRenderLoop(() => {
        scene.render();
    });    

    const { stats } = initStats();
//This is here cause it makes the first few frames at 38-40 fps load before stats initializes, so it looks better on specs
//From 38-40 fps on load to 53-54 fps on load
//Lying??
//NO

//-----------------------------------------------------------
};