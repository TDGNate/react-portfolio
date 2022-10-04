// Animations Fade in and out 

// export default function reveal() {
//   let revealCards = document.querySelectorAll(".reveal");

//   for (let i = 0; i < revealCards.length; i++) {
//     let windowHeight = window.innerHeight;
//     let elementTop = revealCards[i].getBoundingClientRect().top;
//     let elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       revealCards[i].classList.add("active");
//     } else {
//       revealCards[i].classList.remove("active");
//     }
//   }
// }

module.exports = {

  // Reveal From the bottom 
  RevealY: () => {
    let revealCards = document.querySelectorAll(".reveal");

    for (let i = 0; i < revealCards.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealCards[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealCards[i].classList.add("active");
      } else {
        revealCards[i].classList.remove("active");
      }
    }
  },

  // Reveal From the left 
  RevealLeft: () => {
    let revealLeftCards = document.querySelectorAll(".revealLeft");

    for (let i = 0; i < revealLeftCards.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealLeftCards[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealLeftCards[i].classList.add("activeLeft");
      } else {
        revealLeftCards[i].classList.remove("activeLeft");
      }
    }
  }

}
