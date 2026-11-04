let styleTag = document.createElement("style");
styleTag.textContent = `
  .nature-card {
    max-width: 380px;
    margin: 20px auto;
    padding: 28px 26px;
    background: linear-gradient(160deg, #f1f8e9 0%, #dcedc8 100%);
    border: 2px solid #8bc34a;
    border-radius: 18px;
    box-shadow: 0 8px 20px rgba(56, 102, 65, 0.25);
    font-family: "Segoe UI", Georgia, serif;
    color: #33691e;
    position: relative;
    overflow: hidden;
  }
  .nature-card::before {
    content: "🌿";
    position: absolute;
    top: -6px;
    right: 10px;
    font-size: 48px;
    opacity: 0.25;
  }
  .nature-card::after {
    content: "🍃";
    position: absolute;
    bottom: -8px;
    left: 10px;
    font-size: 48px;
    opacity: 0.25;
  }
  .nature-title {
    margin: 0 0 16px;
    text-align: center;
    font-size: 22px;
    color: #2e7d32;
  }
  .nature-card label {
    display: block;
    margin-bottom: 4px;
    font-weight: 600;
    color: #558b2f;
  }
  .nature-card input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 12px;
    margin-bottom: 14px;
    border: 2px solid #aed581;
    border-radius: 10px;
    background: #fffffb;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .nature-card input:focus {
    border-color: #2e7d32;
    box-shadow: 0 0 0 3px rgba(139, 195, 74, 0.35);
  }
  .nature-card button {
    width: 100%;
    padding: 11px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #66bb6a, #2e7d32);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .nature-card button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(46, 125, 50, 0.35);
  }
  .nature-card button:active {
    transform: translateY(0);
  }
  #error-message {
    margin-top: 14px;
    padding: 0;
    min-height: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }
`;
document.head.appendChild(styleTag);

// Membuat form (dibungkus kartu)
let form = document.createElement("form");
form.className = "nature-card";

// Judul
let judul = document.createElement("h3");
judul.className = "nature-title";
judul.textContent = "🌳 Form Pecinta Alam";

// Input nama
let labelNama = document.createElement("label");
labelNama.textContent = "🌱 Nama";
labelNama.htmlFor = "nama";

let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.id = "nama";
inputNama.placeholder = "Masukkan nama Anda";

// Input email
let labelEmail = document.createElement("label");
labelEmail.textContent = "🍀 Email";
labelEmail.htmlFor = "email";

let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.placeholder = "contoh@alam.com";

// Tombol submit
let btnSubmit = document.createElement("button");
btnSubmit.type = "button";
btnSubmit.textContent = "🌻 Submit";

// Area pesan error
let errorDiv = document.createElement("div");
errorDiv.id = "error-message";
errorDiv.style.color = "#c62828";

// Event listener
btnSubmit.onclick = function () {
  let nama = inputNama.value.trim();
  let email = inputEmail.value.trim();
  let errorMessage = "";

  if (nama === "") {
    errorMessage += "🥀 Nama tidak boleh kosong. ";
  }
  if (email.indexOf("@") === -1) {
    errorMessage += "🥀 Email harus mengandung @. ";
  }

  if (errorMessage !== "") {
    errorDiv.textContent = errorMessage;
    errorDiv.style.color = "#c62828";
  } else {
    errorDiv.textContent = "🌼 Form valid! Data berhasil dikirim.";
    errorDiv.style.color = "#2e7d32";
  }
};

// Menambahkan elemen ke form
form.appendChild(judul);
form.appendChild(labelNama);
form.appendChild(inputNama);
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(btnSubmit);
form.appendChild(errorDiv);

// Menambahkan form ke output
let outputDiv = document.getElementById("output4");
outputDiv.appendChild(form);