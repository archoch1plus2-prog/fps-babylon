import { AnimationGroup } from "@babylonjs/core/Animations/animationGroup";
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Ray } from "@babylonjs/core/Culling/ray.core";
import "@babylonjs/core/Culling/ray";

export function initReload(gunRoot, fireAnimation, idleAnimation, reloadAnimation, scene ) {
    const keysPressed = {};

    const onKeyDown = (e) => { 
        keysPressed[e.code] = true; 

        if (e.code === 'KeyR') {
            fireAnimation.stop();
            idleAnimation.stop();

            reloadAnimation.start(false);

            reloadAnimation?.onAnimationGroupEndObservable.add(() => {
                idleAnimation.start(true);
            });
        };
    };

    const onKeyUp = (e) => { 
        keysPressed[e.code] = false; 
    };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
};

export function initShoot(fireAnimation, idleAnimation, reloadAnimation, scene) {
    const onClick = () => {
        fireAnimation.start(false);

        fireAnimation?.onAnimationGroupEndObservable.add(() => {
            idleAnimation.start(true);
        });
    };

    window.addEventListener('click', onClick);
};
