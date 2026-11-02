import { AnimationGroup } from "@babylonjs/core/Animations/animationGroup";
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Ray } from "@babylonjs/core/Culling/ray.core";
import "@babylonjs/core/Culling/ray";

export function initReload(gunRoot, idleAnimation, fireAnimation, reloadAnimation) {
    const keysPressed = {};

    const onKeyDown = (e) => { 
        keysPressed[e.code] = true; 

        if (e.code === 'KeyR' && reloadAnimation) {
            reloadAnimation.start(false); 
        };
    };

    const onKeyUp = (e) => { 
        keysPressed[e.code] = false; 
    };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
};

