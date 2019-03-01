var slides = [
  {/*index - 0*/
    title:"BUY AN APPLE AND BE HAPPY",
    src: "images/apple-device.jpeg"
  },
  {/*index - 1*/
    title:"FREE VACATION ON THE LONDON BRIDGE",
    src: "images/bridge.jpeg"
  },
  {/*index - 2*/
    title:"BUY A WOMAN TODAY!",
    src: "images/girl-river.jpeg"
  }
]; //Array of objects
function showSlide(effect,number) {
  // SEARCHING FOR DIV
  let div_slide = document.querySelector('#carousel .slide');
  console.log(div_slide);
  for(var row = 0; row<6; row++){
    for(var col = 0; col<8; col++){
      let x = -100*col;
      let y = -100*row;
      let d = Math.random()/2;
      // let effect = 'flip';
      let src = slides[number].src;
      let html = `<div style="background-image: url(${src}); background-position: ${x}px ${y}px; animation-delay: ${d}s;" class="box ${effect} animated"></div>`;
      div_slide.innerHTML += html;
    }
  }
}
showSlide('fadeInDown',2);
