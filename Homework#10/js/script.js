let audio = document.querySelector(`.audio`)

document.addEventListener('keypress', (e) => {
  stopAudio (audio)
  audio = document.querySelector(`audio#${e.code}`);
  playAudio(audio);
})


document.addEventListener('click',  (e) =>{
  stopAudio (audio)
  audio = document.querySelector(`audio#${e.target.id}`);
  playAudio(audio);
})

function stopAudio (audio) {
  audio.pause();
  audio.currentTime = 0;
}

function playAudio (audio) {
  if (audio === null) return;
  audio.play();
}
