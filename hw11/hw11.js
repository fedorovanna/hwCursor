window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[id="${e.code}"]`);
    const audio = document.querySelector(`audio[id="${e.code}"]`);
    audio.currentTime = 0
    audio.play()
})
