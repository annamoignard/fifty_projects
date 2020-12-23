const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()
// the above means that checkBoxes will run

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
// we need to figure out where we want the boxes to 
// start coming in. so we need to figure out a number
// based off the window height
// we want the scroll in to be less than the 
// inner height. so we divide by 5 and multiply by 4
// remember that 'boxes' is a node list (an array) that we brought in from the HTML so we can loop through it
  boxes.forEach(box => {
    // the GetBoundingClientRect it is baically the size and position of a rectangle
    // and it's position in relation to the browser
    const boxTop = box.getBoundingClientRect().top
    // now we need an if statment to add or remove class name
    if(boxTop < triggerBottom) {
      box.classList.add('show')
      // so until the box top is less than trigger bottom, we will
      // display on the screen 
    } else {
      box.classList.remove('show')
    }
  })
}