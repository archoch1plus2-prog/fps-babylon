import { Vector3 } from "@babylonjs/core/Maths/math.vector";

export function initCrouch(gunRoot, idleAnimation) {
    let crouchStatus = { state: false };

    const cursorElements = document.querySelectorAll('.cursor');

    const onKey = (gunRoot) => {
        if (!crouchStatus.state) {
            crouchStatus.state = true;

            gunRoot.position.set(0.0000000001, -0.694, 0.7);
            gunRoot.rotation.y = 1.57;
            gunRoot.scaling = new Vector3(0.5, 0.5, 0.5);

            cursorElements.forEach(element => {
                element.style.setProperty('opacity', '0', 'important');
            });

        } else if (crouchStatus.state) {
            crouchStatus.state = false;

            gunRoot.position.set(0.3, -0.4, 0.7);
            gunRoot.rotation.y = 1.57;
            gunRoot.scaling = new Vector3(0.3, 0.3, 0.3);

            idleAnimation.start(true);

            cursorElements.forEach(element => {
                element.style.setProperty('opacity', '1', 'important');
            });
        };
    };

    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'c') {
            onKey(gunRoot);
        };
    });

    return { crouchStatus };
};