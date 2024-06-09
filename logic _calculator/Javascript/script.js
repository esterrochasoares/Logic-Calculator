document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('[data-propositions], [data-clear], [data-delete]');
    const clickSound = document.getElementById('click-sound');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickSound.currentTime = 0;  
            clickSound.play();
        });
    });
});
