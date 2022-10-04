// Parallax Function 

export default function parallax(e) {
  document.querySelectorAll(".star").forEach((star) => {
    const starValue = star.getAttribute("data-value");

    // get x and y values 
    let x = (e.clientX * starValue) / 400;
    let y = (e.clientY * starValue) / 400;

    star.style.transform = `translateX(${x}px) translateY(${y}px)`

  })
}