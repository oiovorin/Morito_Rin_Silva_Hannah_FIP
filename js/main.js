function flipTo(index) {
    const slides = document.querySelectorAll(".flavor-slide img");
    const dots = document.querySelectorAll(".dot");
  
    slides.forEach((img, i) => {
      img.classList.remove("flipped");
  
      void img.offsetWidth;
  
      if (i === index) {
        img.classList.add("flipped");
      }
    });
  
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
  