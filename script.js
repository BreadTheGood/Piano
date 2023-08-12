const WHITE_KEYS = ['<', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  ',', '.', '-', 'q', 'w', 'e', 'r', 't',
  'y', 'u', 'i', 'o', 'p']
const BLACK_KEYS = ['a', 's', 'd', 'g', 'h', 'k', 'l', 'ñ',
  '2', '3', '5', '6', '7', '9', '0']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keypress', e => {

  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
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

