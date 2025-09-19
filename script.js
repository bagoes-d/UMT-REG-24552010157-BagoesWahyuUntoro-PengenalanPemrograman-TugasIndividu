document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


const searchInput = document.getElementById("searchPlayer");
const playerCards = document.querySelectorAll(".player-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();

    playerCards.forEach(card => {
      const playerName = card.querySelector("h3").textContent.toLowerCase();
      if (playerName.includes(searchValue)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
}
