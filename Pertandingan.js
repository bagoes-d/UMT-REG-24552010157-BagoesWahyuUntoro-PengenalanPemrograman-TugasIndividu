// Data pertandingan
const matches = {
  "newcastle-barcelona": {
    date: "19 September 2025",
    home: "Newcastle",
    away: "FC Barcelona",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/newcastle.png",
    awayLogo: "image/Logo/barcaaa.png"
  },
  "barcelona-psg": {
    date: "02 Oktober 2025",
    home: "FC Barcelona",
    away: "PSG",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/barcaaa.png",
    awayLogo: "image/Logo/psg.png"
  },
  "barcelona-olympiakos": {
    date: "21 Oktober 2025",
    home: "FC Barcelona",
    away: "Olympiakos",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/barcaaa.png",
    awayLogo: "image/Logo/olympiakos.png"
  },
  "brugge-barcelona": {
    date: "06 November 2025",
    home: "Club Brugge",
    away: "FC Barcelona",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/Club.png",
    awayLogo: "image/Logo/barcaaa.png"
  },
  "chelsea-barcelona": {
    date: "26 November 2025",
    home: "Chelsea",
    away: "FC Barcelona",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/chelsea.png",
    awayLogo: "image/Logo/barcaaa.png"
  },
  "barcelona-frankfurt": {
    date: "10 December 2025",
    home: "FC Barcelona",
    away: "Eintracht Frankfurt",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/barcaaa.png",
    awayLogo: "image/Logo/Eintracht.png"
  },
  "slavia-barcelona": {
    date: "22 Januari 2026",
    home: "Slavia Praha",
    away: "FC Barcelona",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/Slavia.png",
    awayLogo: "image/Logo/barcaaa.png"
  },
  "barcelona-copenhagen": {
    date: "29 Januari 2026",
    home: "FC Barcelona",
    away: "FC Copenhagen",
    homeScore: 0,
    awayScore: 0,
    homeLogo: "image/Logo/barcaaa.png",
    awayLogo: "image/Logo/copenhagen.png"
  },
};

// Ambil parameter dari URL
const params = new URLSearchParams(window.location.search);
const matchId = params.get("match");

// Cari data pertandingan
const match = matches[matchId];

// Render hasil
if (match) {
  document.getElementById("result-container").innerHTML = `
  <div class="card">
    <h2>${match.date}</h2>
    <div class="scoreboard">
      <div class="team">
        <img src="${match.homeLogo}" alt="${match.home}">
        <h3>${match.home}</h3>
      </div>
      <div class="score">${match.homeScore} - ${match.awayScore}</div>
      <div class="team">
        <img src="${match.awayLogo}" alt="${match.away}">
        <h3>${match.away}</h3>
      </div>
    </div>
  </div>
`;
} else {
  document.getElementById("result-container").innerHTML = "<p>Data pertandingan tidak ditemukan.</p>";
}
