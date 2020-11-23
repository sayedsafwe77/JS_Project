var images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim 2s  forwards ease-out`;
         
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
    i=0; 
})
images.forEach(image => {
    observer.observe(image);
})