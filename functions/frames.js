import Stats from 'stats.js';

export function initStats() {
    const container = document.querySelector('#container');

    const stats = new Stats();

    stats.showPanel(0);
    
    container.appendChild(stats.dom);

    return { stats };
};