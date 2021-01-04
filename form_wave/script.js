const labels = document.querySelectorAll('.form-control label')
// getting a node list of all the labels 
labels.forEach(label => {
  label.innerHTML = label.innerText 
  // here we get the inner text (each letter )
  // split into an array 
  // now we want to mainipualte and turn into an array of something else 
  // which have a span around them 
  // for each letter and index which starts at zero and increments for every item in the array
  // so now we have an array of letters with a span around 
  // but we want a string so we use .join to bring it all
  // back together 

    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
  })