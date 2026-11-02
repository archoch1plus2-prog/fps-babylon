export function initLock(canvas) {
    const lock = (canvas) => {
        if (canvas) {
            canvas.focus();

            canvas.requestPointerLock();
        };
    };

    return { lock };
};