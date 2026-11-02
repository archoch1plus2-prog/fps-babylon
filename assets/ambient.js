import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";

export function initHemi(scene) {
    const hemiLight = new HemisphericLight('hemiLight',  new Vector3(0, 1, 0), scene);

    return hemiLight;
};