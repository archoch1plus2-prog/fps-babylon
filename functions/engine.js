import { Engine } from '@babylonjs/core/Engines/engine';

export function initEngine() {
    const canvas = document.querySelector('#game-canvas');

    const engine = new Engine(canvas, true, {
            adaptToDeviceRatio: true
        });

    return { engine, canvas };
};