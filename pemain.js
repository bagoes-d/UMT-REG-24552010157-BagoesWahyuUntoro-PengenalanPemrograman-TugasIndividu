// Data semua pemain
const pemain = {
  'terstegen': {
    nama: 'Marc-André ter Stegen',
    posisi: 'Goalkeeper',
    negara: 'Jerman',
    lahir: '30 Apr 1992',
    nomor: '1',
    gambar: 'image/pemain/ter stegen.jpg',
    desc: 'Kiper utama, refleks cepat, pemimpin lini belakang.'
  },
  'joan': {
    nama: 'Joan Garcia',
    posisi: 'Goalkeeper',
    negara: 'Spanyol',
    lahir: '4 Mei 2001',
    nomor: '13',
    gambar: 'image/pemain/joan garcia.jpg',
    desc: 'Kiper muda, potensial, refleks bagus.'
  },
  'wojciech': {
    nama: 'Wojciech Szczesny',
    posisi: 'Striker',
    negara: 'Polandia',
    lahir: '18 Apr 1990',
    nomor: '23',
    gambar: 'image/pemain/Wojciech Szczesny.jpg',
    desc: 'Kiper berpengalaman, sering tampil di Serie A.'
  },
  'cubarsi': {
    nama: 'Pau Cubarsi',
    posisi: 'Centre Back',
    negara: 'Spanyol',
    lahir: '22 Jan 2007',
    nomor: '33',
    gambar: 'image/pemain/cubarsi.jpg',
    desc: 'Bek muda, kuat dalam duel udara.'
  },
  'araujo': {
    nama: 'Ronald Araujo',
    posisi: 'Centre Back',
    negara: 'Uruguay',
    lahir: '7 Mar 1999',
    nomor: '4',
    gambar: 'image/pemain/araujo.jpg',
    desc: 'Bek tangguh, cepat, andalan pertahanan.'
  },
  'garcia': {
    nama: 'Eric Garcia',
    posisi: 'Centre Back',
    negara: 'Spanyol',
    lahir: '9 Jan 2001',
    nomor: '24',
    gambar: 'image/pemain/garcia.jpg',
    desc: 'Bek cerdas, jebolan akademi La Masia.'
  },
  'christensen': {
    nama: 'Andreas Christensen',
    posisi: 'Centre Back',
    negara: 'Denmark',
    lahir: '10 Apr 1996',
    nomor: '15',
    gambar: 'image/pemain/christensen.jpg',
    desc: 'Bek elegan, kuat dalam duel satu lawan satu.'
  },
  'balde': {
    nama: 'Alejandro Balde',
    posisi: 'Left Back',
    negara: 'Spanyol',
    lahir: '18 Okt 2003',
    nomor: '3',
    gambar: 'image/pemain/balde.jpg',
    desc: 'Bek kiri muda, cepat, rajin overlap.'
  },
  'gerrad': {
    nama: 'Gerard Martin',
    posisi: 'Left Back',
    negara: 'Spanyol',
    lahir: '10 Feb 2002',
    nomor: '21',
    gambar: 'image/pemain/gerrad.jpg',
    desc: 'Bek kiri, stamina tinggi, disiplin.'
  },
  'kounde': {
    nama: 'Jules Kounde',
    posisi: 'Right Back',
    negara: 'Prancis',
    lahir: '12 Nov 1998',
    nomor: '23',
    gambar: 'image/pemain/kounde.jpg',
    desc: 'Bek serba bisa, kuat dan cepat.'
  },
  'cassado': {
    nama: 'Marc Casado',
    posisi: 'Defensive Midfielder',
    negara: 'Spanyol',
    lahir: '14 Sep 2003',
    nomor: '30',
    gambar: 'image/pemain/cassado.jpg',
    desc: 'Gelandang bertahan, distribusi bola baik.'
  },
  'bernal': {
    nama: 'Marc Bernal',
    posisi: 'Defensive Midfielder',
    negara: 'Spanyol',
    lahir: '26 Feb 2005',
    nomor: '32',
    gambar: 'image/pemain/bernal.jpg',
    desc: 'Gelandang muda, pekerja keras.'
  },
  'pedri': {
    nama: 'Pedri',
    posisi: 'Central Midfielder',
    negara: 'Spanyol',
    lahir: '25 Nov 2002',
    nomor: '8',
    gambar: 'image/pemain/pedri.jpg',
    desc: 'Gelandang kreatif, visi dan passing luar biasa.'
  },
  'gavi': {
    nama: 'Gavi',
    posisi: 'Central Midfielder',
    negara: 'Spanyol',
    lahir: '5 Agu 2004',
    nomor: '6',
    gambar: 'image/pemain/gavi.jpg',
    desc: 'Gelandang energik, agresif, penuh semangat.'
  },
  'dejong': {
    nama: 'Frenkie De Jong',
    posisi: 'Central Midfielder',
    negara: 'Belanda',
    lahir: '12 Mei 1997',
    nomor: '21',
    gambar: 'image/pemain/de jong.jpg',
    desc: 'Gelandang elegan, pengatur tempo.'
  },
  'daniolmo': {
    nama: 'Dani Olmo',
    posisi: 'Attacking Midfielder',
    negara: 'Spanyol',
    lahir: '7 Mei 1998',
    nomor: '7',
    gambar: 'image/pemain/dani olmo.jpg',
    desc: 'Gelandang serang, kreatif, sering cetak gol.'
  },
  'fermin': {
    nama: 'Fermin Lopez',
    posisi: 'Attacking Midfielder',
    negara: 'Spanyol',
    lahir: '11 Mei 2003',
    nomor: '16',
    gambar: 'image/pemain/fermin.jpg',
    desc: 'Gelandang muda, teknik bagus.'
  },
  'raphinha': {
    nama: 'Raphinha',
    posisi: 'Left wing',
    negara: 'Brasil',
    lahir: '14 Des 1996',
    nomor: '11',
    gambar: 'image/pemain/Raphinha.jpg',
    desc: 'Winger cepat, dribbling dan crossing bagus.'
  },
  'marcus': {
    nama: 'Marcus Rashford',
    posisi: 'Left wing',
    negara: 'Inggris',
    lahir: '31 Okt 1997',
    nomor: '10',
    gambar: 'image/pemain/marcus.jpg',
    desc: 'Winger lincah, finishing tajam.'
  },
  'lamine': {
    nama: 'Lamine Yamal',
    posisi: 'Right wing',
    negara: 'Spanyol',
    lahir: '13 Jul 2007',
    nomor: '27',
    gambar: 'image/pemain/lamine.jpg',
    desc: 'Winger muda, sangat berbakat.'
  },
  'roony': {
    nama: 'Roony Bardghji',
    posisi: 'Right wing',
    negara: 'Swedia',
    lahir: '15 Nov 2005',
    nomor: '22',
    gambar: 'image/pemain/roony.jpg',
    desc: 'Winger muda, teknik tinggi.'
  },
  'ferran': {
    nama: 'Ferran Torres',
    posisi: 'Striker',
    negara: 'Spanyol',
    lahir: '29 Feb 2000',
    nomor: '7',
    gambar: 'image/pemain/ferran.jpg',
    desc: 'Penyerang serba bisa, finishing baik.'
  },
  'lewa': {
    nama: 'Robert Lewandowski',
    posisi: 'Striker',
    negara: 'Polandia',
    lahir: '21 Agu 1988',
    nomor: '9',
    gambar: 'image/pemain/lewa.jpg',
    desc: 'Striker top Eropa, pencetak gol ulung.'
  },
  'bagoes': {
    nama: 'Bagoes Wahyu Untoro',
    posisi: 'Striker',
    negara: 'Indonesia',
    lahir: '31 Maret 2006',
    nomor: '31',
    gambar: 'image/pemain/bagoes.jpg',
    desc: 'Penyerang muda, penuh semangat.'
  }
};

// Ambil parameter nama dari URL
const params = new URLSearchParams(window.location.search);
const key = params.get('nama');
const data = pemain[key];

// Tampilkan biodata jika ada
if (data) {
  document.getElementById('biodata').innerHTML = `
    <div class="biodata-container">
      <img src="${data.gambar}" alt="${data.nama}">
      <h1>${data.nama}</h1>
      <table>
        <tr><td><strong>Posisi</strong></td><td>: ${data.posisi}</td></tr>
        <tr><td><strong>Negara</strong></td><td>: ${data.negara}</td></tr>
        <tr><td><strong>Tanggal Lahir</strong></td><td>: ${data.lahir}</td></tr>
        <tr><td><strong>Nomor</strong></td><td>: ${data.nomor}</td></tr>
      </table>
      <div class="desc">${data.desc}</div>
    </div>
  `;
} else {
  document.getElementById('biodata').innerHTML = `<div class="biodata-container"><p>Pemain tidak ditemukan.</p></div>`;
}