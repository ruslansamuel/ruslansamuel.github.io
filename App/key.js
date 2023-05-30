const box = document.querySelector('.box');
document.addEventListener('keydown', e => {
    let keyName = e.keyCode === 32 ? 'Space' : e.key;
    box.querySelector('.key-code span').innerText = e.keyCode;
    box.querySelector('.key-name span').innerText = keyName.toUpperCase();
    box.classList.add('active');
});