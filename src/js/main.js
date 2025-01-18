import { result } from './rata.js';

const onSubmit = document.getElementById("submit");
const output = document.getElementById("output")

onSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const nama = document.getElementById("name").value;

  const nilaiMTK = parseFloat(document.getElementById("mtk").value);
  const nilaiIpas = parseFloat(document.getElementById("ipas").value);

  if(nilaiMTK && nilaiIpas) {
    let rata = result(nilaiMTK, nilaiIpas)

    const data = [nilaiMTK, nilaiIpas, rata];

    localStorage.removeItem(nama)

    localStorage.setItem(nama, JSON.stringify(data));

    showData()
  }

});

function showData() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    for(let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i);
        let nilai = JSON.parse(localStorage.getItem(name));

        if(name){
            const tr = document.createElement('tr');
            const tdName = document.createElement('td');
            tdName.innerHTML = name;
            tr.appendChild(tdName)

            nilai.forEach((item) => {
                const tdNilai = document.createElement('td');
                tdNilai.innerHTML = item;
                tr.appendChild(tdNilai);
            })


            tableBody.appendChild(tr)

        }
        // output.textContent += `Key: ${key}, Value: ${JSON.stringify(value, null, 2)}\n`;
    }


    // output.textContent = JSON.stringify(storeData, null, 2);
}
