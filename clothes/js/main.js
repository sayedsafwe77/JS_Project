// // Detect request animation frame
// var scroll = window.requestAnimationFrame ||
//              // IE Fallback
//              function(callback){ window.setTimeout(callback, 1000/60)};
// var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

// function loop() {

//     Array.prototype.forEach.call(elementsToShow, function(element){
//       if (isElementInViewport(element)) {
//         element.classList.add('is-visible');
//       } else {
//         element.classList.remove('is-visible');
//       }
//     });

//     scroll(loop);
// }

// // Call the loop for the first time
// loop();

// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0
//       && rect.bottom >= 0)
//     ||
//     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//     ||
//     (rect.top >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//   );
// }

const images = document.querySelectorAll('.anim');


observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

images.forEach(image => {
  observer.observe(image)
})

const texts = document.querySelectorAll('.anim-text');
observer1 = new IntersectionObserver1((entries) => {

  entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
          entry.target.style.animation = `anim2 1s ${entry.target.dataset.delay} forwards ease-out`;
      }
      else {
          entry.target.style.animation = 'none';
      }
  })

})
texts.forEach(text => {
  observer1.observe(text)
})
