function magnet(){
const work_img= document.querySelectorAll(".image-container img")

work_img.forEach((image) => {

  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();   
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    image.style.transform = `
      translate(${offsetX * 0.1}px, ${offsetY * 0.1}px)
      scale(1.05)
    `;
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "translate(0, 0) scale(1)";
  });
});

}

magnet()

    
