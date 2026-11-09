import { initLevel } from "./level.js";

const startBtn = document.getElementById('play-button');


startBtn.addEventListener('click', async () => {
    await initLevel();
});
