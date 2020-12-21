const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  // a for each loop that is looping through the panel class in our index so that when it is active, (clicked) we add the active, so it expands
  // however we dont want all of them to be active all the time, so we also need to call the function that removes the class when the function is called
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  //this function will stop all the panels from having the active css feautures when it is called. 
  panels.forEach(panel => {
    panel.classList.remove('active')

  })

}