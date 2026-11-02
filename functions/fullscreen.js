export function initFull(event) {
    const container = document.querySelector('#container');

    const fullscreen = (event) => {
        if (event.key.toLowerCase() === 'f') {
            container.requestFullscreen()
        };
    };

    return { container, fullscreen }
};