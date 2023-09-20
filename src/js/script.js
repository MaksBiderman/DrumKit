const playingSound = (e) => {
  const audio  = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop the fucntion 
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing')
}
window.addEventListener('keydown', playingSound);

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return; // skip it 
  console.log(e.propertyName);
  e.target.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));