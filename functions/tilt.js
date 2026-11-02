export function initTilt(engine, camera) {

    camera.rotationQuaternion = null;

    const keysPressed = {};

    const onKeyDown = (e) => { 
        keysPressed[e.keyCode] = true; 
    };

    const onKeyUp = (e) => { 
        keysPressed[e.keyCode] = false; 
    };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);

    const check = (engine, camera) => {
        const rollSpeed = 0.05;
        
            const pressingQ = keysPressed[81] === true;
            const pressingE = keysPressed[69] === true;
            const pressingC = keysPressed[67] === true;

            if (pressingC) {
                camera.rotation.z = 0;
            } else if (pressingQ) {
                camera.rotation.z -= rollSpeed;
            } else if (pressingE) {
                camera.rotation.z += rollSpeed;
            }; 
    };

    return { check };
};