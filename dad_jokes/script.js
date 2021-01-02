//  we will be using the fetch tool to get a dad jokes API 
// make an HTTP request to a particlar URL we will get data back - default it HTML but we want app/json 
// we want to send a header of accept = app/json 
// many different ways to make requests - eg CURL is for termianl apps 
// fetch provides assistance for the javascript interface for accessing api 
//  can get simple json files with fetch 
//  whenevr we call fetch it returns a PROMISE
// so we have two .thens 
//  we get the response, and then the second .then which gives us the actual data 
//  to pass a post or put request, we could change the method that we are after 
//  async/await is cleaner then using .then 


// first step! we need to bring in the jokes from the DOM 
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
//  also bringing in the button to the DOM 
//  next, when we create a function. when we open the page, the generateJoke function will be called
//  automatically 
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json();
  jokeEl.innerHTML = data.joke;

}

// function generateJoke() {
//   const config = {
//     headers : {
//     'Accept': 'application/json'  
//     }
//     }
// //  this is cleaner to create config variable and save all the accept in there
//   fetch('https://icanhazdadjoke.com', config)
//   .then((res) => res.json())
//   .then((data) => {
//     jokeEl.innerHTML = data.joke 
//   })

//   }

