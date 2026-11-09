export function initFov(camera) {
    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === '-') {
            if (camera.fov <= 0.69) {
                camera.fov = camera.fov + 0.025;
            };

        } else if (event.key.toLowerCase() === '=') {
            if (camera.fov >= 0.05) {
                camera.fov = camera.fov - 0.025;
            };

        } else if (event.key.toLowerCase() === '0') {
            camera.fov = 0.7;

        };
    });
};