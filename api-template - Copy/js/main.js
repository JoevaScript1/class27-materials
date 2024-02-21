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
/* document.addEventListener("DOMContentLoaded", function() {
  var image = document.querySelector("img");
  var iframe = document.querySelector("iframe");

  // Function to hide the image and show the iframe
  function showIframe() {
      image.style.display = "none";
      iframe.style.display = "block";
  }

  // Function to hide the iframe and show the image
  function showImage() {
      iframe.style.display = "none";
      image.style.display = "block";
  }

  // Example condition: if iframe source exists, show iframe; otherwise, show image
  if (iframe.src) {
      showIframe();
  } else {
      showImage();
  }

  // Example event listener for button click to toggle between image and iframe
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
      // Example toggle logic: if image is currently displayed, show iframe; otherwise, show image
      if (image.style.display === "block") {
          showIframe();
      } else {
          showImage();
      }
  });
}); */