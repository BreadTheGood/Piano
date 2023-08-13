const WHITE_KEYS = ['<', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  ',', '.', '-', 'q', 'w', 'e', 'r', 't',
  'y', 'u', 'i', 'o', 'p']
const BLACK_KEYS = ['a', 's', 'd', 'g', 'h', 'k', 'l', 'ñ',
  '2', '3', '5', '6', '7', '9', '0']
const whiteNotes=['F4','G4','A4','B4', 
                  'C5','D5','E5','F5','G5','A5','B5', 
                  'C5','D5','E5','F5','G6','A6','B6', 
                  'C7','D7','E7']
const blackNotes=['Gb4', 'Ab4', 'Bb4',
                  'Db5', 'Eb5', 'Gb5', 'Ab5', 'Bb5',
                  'Db6', 'Eb6', 'Gb6', 'Ab6', 'Bb6',
                  'Db7', 'Eb7']


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
var pressed="";
var tempo="";
var notePress="";

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})
function startup() {
  const el = document.getElementById("piano");
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
  log("Initialized.");
}

document.addEventListener("DOMContentLoaded", startup);


document.addEventListener('keypress', e => {
  if (e.repeat) return 
 
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)
  console.log(key) 

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])

  
  if (whiteKeyIndex > -1) notePress= notePress + " / " +whiteNotes[whiteKeyIndex];
  if (blackKeyIndex > -1) notePress= notePress + " / " +blackNotes[blackKeyIndex];
  console.log(notePress)
  
  if (whiteKeyIndex > -1) pressed = pressed + " / " + WHITE_KEYS[whiteKeyIndex]
  if (blackKeyIndex > -1) pressed = pressed + " / " + BLACK_KEYS[blackKeyIndex]
  console.log(whiteKeyIndex)
  console.log(pressed)

  if(pressed!="") document.getElementById("textNote").innerText=notePress;
  tempo=pressed;
  pressed="";
  pressed=tempo;
  if(pressed!="") document.getElementById("textKey").innerText=pressed;

  
})


function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  
  
  
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
   
  })
  document.addEventListener('keyup', e => {

    key.classList.remove('active')

  })
  document.addEventListener('touchend', e => {

    key.classList.remove('active')

  })
 
  
}

