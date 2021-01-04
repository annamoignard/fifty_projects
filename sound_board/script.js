const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
//  buttons are going to be generated
// creates array for our sounds and gives id

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
//  create a button and now each item in array has a button associated with id from aray 
  btn.innerText = sound 
  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })
//  so above we are looping through array and on click we are using the play method 
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0; 
  })
}

//  the above function is to stop the sounds when another sound is clicked and played
//  it is important to learn where to call each function 
//  we call the stop function before we run the play function 