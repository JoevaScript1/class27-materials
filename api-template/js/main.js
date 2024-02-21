//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=BExUsXOVCaC3llj602WvnEqyNKxWbgnyJmaHkyq3&date=${choice}`

  var image = document.querySelector("img");
  var iframe = document.querySelector("iframe");
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if ( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl
          iframe.style.display = "none";
          image.style.display = "block"
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          iframe.style.display = "block";
          image.style.display = "none";
        }

        //document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
