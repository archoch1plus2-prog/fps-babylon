import { AnimationGroup } from "@babylonjs/core/Animations/animationGroup";
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Ray } from "@babylonjs/core/Culling/ray.core";
import "@babylonjs/core/Culling/ray";

export function initReload(gunRoot, fireAnimation, idleAnimation, reloadAnimation, scene, crouchStatus) {
    const cursorElements = document.querySelectorAll('.cursor');

    const onKeyDown = () => { 
        gunRoot.position.set(0.3, -0.4, 0.7);

        fireAnimation.stop();
        idleAnimation.stop();

        reloadAnimation.start(false);

        reloadAnimation?.onAnimationGroupEndObservable.add(() => {
            idleAnimation.start(true);
        });

        cursorElements.forEach(element => {
            element.style.setProperty('opacity', '1', 'important');
        });
    };

    window.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === 'r') {
            onKeyDown();
        };
    });
};

export function initShoot(fireAnimation, idleAnimation, reloadAnimation, scene, camera) {
    const onClick = () => {
        if (!reloadAnimation.isPlaying) {
            fireAnimation.start(false);

            camera.rotation.x -= 0.025;

            fireAnimation?.onAnimationGroupEndObservable.add(() => {
                idleAnimation.start(true);
            });

            
        };
    };

    window.addEventListener('pointerdown', onClick);
    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'x' || event.key.toLowerCase() === 'v') {
            onClick();
        };
    });
};
