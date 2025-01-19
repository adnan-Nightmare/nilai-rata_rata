import { result, lulus, nilaiValid, peringkat } from "./nilaiCheck.js";

const onSubmit = document.getElementById("submit");
const output = document.getElementById("output");
const modal = document.getElementById("modal");

// saat dimulai
window.onload = () => {
  showData();
};

// buat tombol
onSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const nama = document.getElementById("name").value;

  const nilaiMTK = parseFloat(document.getElementById("Mtk").value);
  const nilaiBindo = parseFloat(document.getElementById("Bindo").value);
  const nilaiBing = parseFloat(document.getElementById("Bing").value);
  const nilaiIpas = parseFloat(document.getElementById("Ipas").value);
  const nilaiSejarah = parseFloat(document.getElementById("Sejarah").value);
  const nilaiAgama = parseFloat(document.getElementById("Agama").value);
  const nilaiInfomatika = parseFloat(document.getElementById("Infomatika").value);

  if (nama && nilaiValid(nilaiMTK) && nilaiValid(nilaiBindo) && nilaiValid(nilaiBing) && nilaiValid(nilaiIpas) && nilaiValid(nilaiSejarah) && nilaiValid(nilaiAgama) && nilaiValid(nilaiInfomatika)) {
    let rata = result(nilaiMTK, nilaiBindo, nilaiBing, nilaiIpas, nilaiSejarah, nilaiAgama, nilaiInfomatika);

    const data = [nilaiMTK, nilaiBindo, nilaiBing, nilaiIpas, nilaiSejarah, nilaiAgama, nilaiInfomatika, rata];

    const store = { nilai: data, ket: lulus(rata), timestamp: new Date().toISOString() };

    localStorage.removeItem(nama);

    localStorage.setItem(nama, JSON.stringify(store));

    modal.style.display = "none";
    showData();
  } else {
    alert("Harap isi dengan benar!!!");
  }
});

// menampilkan data setelah tombol di click
function showData() {
  const items = [];

  let no = 0;
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    let name = localStorage.key(i);
    let nilai = JSON.parse(localStorage.getItem(name));
    items.push({ name, nilai });
  }

  const data = hitung(items);

  for (let j = 0; j < data.length; j++) {
    const org = data[j];
    console.log(org);
    no++;

    const tr = document.createElement("tr");
    tr.className = "tr__border__top";

    const tdNo = document.createElement("td");
    tdNo.innerHTML = no;
    tr.appendChild(tdNo);

    const tdName = document.createElement("td");
    tdName.innerHTML = org.name;
    tr.appendChild(tdName);

    org.nilai.nilai.forEach((item) => {
      const tdNilai = document.createElement("td");
      tdNilai.innerHTML = item;
      tr.appendChild(tdNilai);
    });

    const tdPeringkat = document.createElement("td");
    tdPeringkat.innerHTML = org.peringkat;
    tr.appendChild(tdPeringkat);

    const tdKet = document.createElement("td");
    tdKet.innerHTML = org.nilai.ket;
    tr.appendChild(tdKet);

    tableBody.appendChild(tr);
  }
}

function hitung(items) {
  items.forEach((item) => {
    const nilaiStore = item.nilai.nilai;
    const rata = peringkat(nilaiStore);

    item.nilai.rata = rata;
  });

  const sortedItem = items.sort((a, b) => b.nilai.rata - a.nilai.rata);

  sortedItem.forEach((it, no) => {
    it.peringkat = no + 1;
  });

  items.sort((a, b) => new Date(a.nilai.timestamp) - new Date(b.nilai.timestamp));

  return items;
}
