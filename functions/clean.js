export function cleanElements() {
    const gameElements = document.querySelectorAll('.game');

    gameElements.forEach(element => {
        element.style.setProperty('opacity', '1', 'important');
    });

    const dashElements = document.querySelectorAll('.dashboard');

    dashElements.forEach(element => {
        element.style.setProperty('opacity', '0', 'important');
    });
/*
    const cursorElements = document.querySelectorAll('.cursor');

    cursorElements.forEach(element => {
        element.style.setProperty('position', 'absolute', 'important'); 
        
        element.style.setProperty('top', '50%', 'important'); 
        element.style.setProperty('left', '50%', 'important'); 
        element.style.setProperty('transform', 'translate(-50%, -50%)', 'important'); 
        element.style.setProperty('display', 'inline-block', 'important'); 

    });
*/
};