document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchPlayer');
  if (!searchInput) return;
  searchInput.addEventListener('input', function() {
    const keyword = this.value.toLowerCase();
    const cards = document.querySelectorAll('.player-card');
    cards.forEach(card => {
      const nama = card.querySelector('h3').textContent.toLowerCase();
      if (nama.includes(keyword)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
