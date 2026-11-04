function hitung(operator) {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const hasilEl = document.getElementById("hasil");
  hasilEl.classList.remove("error");

  if (isNaN(a) || isNaN(b)) {
    hasilEl.classList.add("error");
    hasilEl.textContent = "Masukkan kedua angka dengan benar.";
    return;
  }

  let hasil;
  switch (operator) {
    case "+": hasil = a + b; break;
    case "-": hasil = a - b; break;
    case "*": hasil = a * b; break;
    case "/":
      if (b === 0) {
        hasilEl.classList.add("error");
        hasilEl.textContent = "Tidak bisa membagi dengan nol.";
        return;
      }
      hasil = a / b;
      break;
    default:
      hasilEl.classList.add("error");
      hasilEl.textContent = "Operator tidak dikenal.";
      return;
  }

  hasil = parseFloat(hasil.toFixed(10));
  const simbol = { "+": "+", "-": "−", "*": "×", "/": "÷" }[operator];
  hasilEl.textContent = a + " " + simbol + " " + b + " = " + hasil;
}

document.getElementById("tambah").addEventListener("click", () => hitung("+"));
document.getElementById("kurang").addEventListener("click", () => hitung("-"));
document.getElementById("kali").addEventListener("click", () => hitung("*"));
document.getElementById("bagi").addEventListener("click", () => hitung("/"));