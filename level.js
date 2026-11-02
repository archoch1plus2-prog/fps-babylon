import "@babylonjs/core/Loading/loadingScreen";

import { initEngine } from "./functions/engine.js";
import { initScene } from "./functions/scene.js";
import { initLoops } from "./functions/loops.js";
import { initStats } from "./functions/frames.js";
import { initLock } from "./functions/lock.js";
import { initFull } from "./functions/fullscreen.js";
import { initTilt } from "./functions/tilt.js";
import { initBody } from "./functions/player.js";

import { initPhysics } from "./physics/physics.js";


import { initHemi } from "./assets/ambient.js";
import { initMaze } from "./assets/map.js";
import { initGun } from "./assets/gun.js";

import { initReload } from "./bullet/shoot.js";

export async function initLevel() {
    const { engine, canvas } = initEngine();
    const { scene, camera } = initScene(engine, canvas);
    const { resizer } = initLoops(engine);
    const { stats } = initStats();
    const { lock } = initLock(canvas);
    const { container, fullscreen } = initFull();
    const { check } = initTilt(engine, camera);

    await initPhysics(scene);

    const { characterController } = initBody(scene, camera);

    const { hemiLight } = initHemi(scene); 
    const { mapAggregate } = await initMaze(scene);
    const { gunRoot, idleAnimation, fireAnimation, reloadAnimation } = await initGun(scene, camera);

    initReload(gunRoot, idleAnimation, fireAnimation, reloadAnimation);

    window.addEventListener('click', () => lock(canvas));
    window.addEventListener('keydown', fullscreen);
    window.addEventListener('resize', resizer)

//-----------------------------------------------------------

    scene.onBeforeRenderObservable.add(() => {
        stats.begin();

        check(engine, camera);
    });

    scene.onAfterRenderObservable.add(() => {
        stats.end();
    });

    engine.runRenderLoop(() => {
        scene.render();
    });

//-----------------------------------------------------------

    const text = document.querySelector('#loading-text');
    text.style.display = 'none';

    const cursor = document.querySelector('.cursor');
    cursor.style.zIndex = '9999';
};