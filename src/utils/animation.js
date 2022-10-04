

export default function reveal() {
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
}
