// Data Struktur Kelas
const classData = {
  waliKelas: "Salsadilla Safitri",
  ketuaKelas: {
    name: "Chandra Wijaya",
    sekretaris: ["Sekretaris: Bryan Max Clarence"],
  },
  wakilKetua: {
    name: "Kisardi",
    bendahara: ["Bendahara: Jessica Cornelia"],
  },
};

// Data Jadwal Mata Pelajaran
const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const mataPelajaran = [
  ["Tidak Ada Jadwal Hari Ini"],
  ["Upacara", "Kk", "B.Inggris", "Prkw", "Agama"],
  ["Pkn", "B.Inggris", "kK", "Kaligrafi Mandarin", "B.Indonesia", "Prkw"],
  ["Pjok", "ME", "Kk", "B.Indonesia", "Agama"],
  ["IGTS", "Kk", "Bahasa Mandarin", "Sejarah", "Bisnis Manajemen"],
  ["Pemantapan MoraL", "Mtk", "Bisnis Manajeme", "Kk", "Prkw"],
  ["EKSKUL", "Ekskul Pilihan"],
];

const jadwalPiket = [
  ["Tidak Ada Yang Piket Hari Ini"],
  ["Angelika", "Kisardi", "Risky", "Wilson"],
  ["Bryan", "Maverick", "Susanto", "Veronica"],
  ["Chandra", "Dicky", "Jessica", "vino"],
  ["Frederick", "Nicholas", "Weliem"],
  ["Calvin", "Owen", "lorenzo"],
  ["Tidak Ada Yang Piket Hari Ini"],
];

// Ambil elemen kontainer untuk menampilkan konten
const displayArea = document.getElementById("display-area");

// Fungsi untuk menampilkan Struktur Kelas
function showClassStructure() {
  displayArea.innerHTML = ""; // Kosongkan area tampilan
  const waliKelas = createBox(`Wali Kelas: ${classData.waliKelas}`);
  const ketuaKelas = createColumn(
    `Ketua Kelas: ${classData.ketuaKelas.name}`,
    classData.ketuaKelas.sekretaris
  );

  const wakilKetua = createColumn(
    `Wakil Ketua: ${classData.wakilKetua.name}`,
    classData.wakilKetua.bendahara
  );

  displayArea.appendChild(waliKelas);
  displayArea.appendChild(createLine());
  const row = document.createElement("div");
  row.className = "row";
  row.appendChild(ketuaKelas);
  row.appendChild(wakilKetua);
  displayArea.appendChild(row);
}

// Fungsi untuk menampilkan Jadwal
function showSchedule() {
  displayArea.innerHTML = ""; // Kosongkan area tampilan
  const tanggalSekarang = new Date();
  const hariIni = tanggalSekarang.getDay();
  const mapelHariIni = mataPelajaran[hariIni];

  const hariElement = document.createElement("h4");
  hariElement.textContent = `Jadwal Hari ${namaHari[hariIni]}`;
  displayArea.appendChild(hariElement);
  hariElement.style.color = "white";

  const mapelList = document.createElement("ul");
  mapelHariIni.forEach(function (mapel) {
    const listItem = document.createElement("li");
    listItem.style.marginTop = "30px";
    listItem.textContent = mapel;
    mapelList.appendChild(listItem);
  });
  displayArea.appendChild(mapelList);
  mapelList.style.color = "white";

  const hariIniPiket = jadwalPiket[hariIni];
  const piket = document.createElement(`h4`);
  piket.textContent = `Jadwal Piket`;
  const piketList = document.createElement("ul");
  hariIniPiket.forEach(function (piket) {
    const listItem = document.createElement("li");
    listItem.style.marginTop = "30px";
    listItem.textContent = piket;
    mapelList.appendChild(listItem);
  });
  displayArea.appendChild(mapelList);
  displayArea.appendChild(piketList);
  mapelList.style.color = "white";
}

function createBox(content) {
  const box = document.createElement("div");
  box.className = "box";
  box.innerHTML = content;
  return box;
}

// Fungsi untuk membuat line elemen
function createLine() {
  const line = document.createElement("div");
  line.className = "line";
  return line;
}

function CreateHLine() {
  const hLine = document.querySelector(".horizontal-line");
  return hLine;
}

// Fungsi untuk membuat column dengan peran dan anggotanya
function createColumn(role, members) {
  const column = document.createElement("div");
  column.className = "column";
  column.appendChild(createBox(role));
  column.appendChild(createLine());
  members.forEach((member) => {
    column.appendChild(createBox(member));
  });
  return column;
}

// Event listener untuk tombol Struktur Kelas
document
  .getElementById("structure-btn")
  .addEventListener("click", showClassStructure);

// Event listener untuk tombol Jadwal
document.getElementById("schedule-btn").addEventListener("click", showSchedule);

// Tampilkan Struktur Kelas secara default
showClassStructure();
// Ambil elemen dari DOM
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

// Fungsi untuk menambahkan pesan baru ke dalam chat
function addMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("chat-message");

  const messageText = document.createElement("p");
  messageText.textContent = message;
  messageContainer.appendChild(messageText);

  chatBox.appendChild(messageContainer);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll ke bawah
}

// Event listener untuk tombol kirim
sendBtn.addEventListener("click", function () {
  const message = messageInput.value.trim();

  if (message) {
    addMessage(message); // Tambah pesan ke chatbox
    messageInput.value = ""; // Kosongkan input
  }
});

// Event listener untuk kirim pesan dengan tombol "Enter"
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendBtn.click(); // Simulasikan klik tombol kirim
  }
});

const slider = document.getElementById("ratingSlider");
const ratingValue = document.getElementById("ratingValue");
const face = document.getElementById("face");

slider.oninput = function () {
  ratingValue.textContent = this.value + ".0";
  updateFace(this.value);
};

function updateFace(value) {
  if (value <= 2) {
    face.textContent = "😠";
  } else if (value <= 4) {
    face.textContent = "😞";
  } else if (value <= 6) {
    face.textContent = "😐";
  } else if (value <= 8) {
    face.textContent = "😊";
  } else {
    face.textContent = "😍";
  }
}
