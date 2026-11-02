export function initLoops(engine) {
    const resizer = () => {
        engine.resize();
    };

    return { resizer };
};