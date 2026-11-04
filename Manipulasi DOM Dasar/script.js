// Membuat tombol
let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function () {
  document.body.style.backgroundColor = "#f70606";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function () {
  document.body.style.color = "#1900ff";
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function () {
  let currentSize = parseInt(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentSize + 1) + "px";
};

// Tombol tambahan: memperkecil font (sesuai soal "menambah/mengurangi")
let btnDecreaseFont = document.createElement("button");
btnDecreaseFont.textContent = "Perkecil Font";
btnDecreaseFont.onclick = function () {
  let currentSize = parseInt(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentSize - 1) + "px";
};

// Menambahkan tombol ke output
let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);
outputDiv.appendChild(btnDecreaseFont);