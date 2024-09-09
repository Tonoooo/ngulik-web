// fungsi untuk display
function dis(val){
    document.getElementById("result").value += val;
}

// fungsi untuk keyboard
function keyboard(event) {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || 
    event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || 
    event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') 
    document.getElementById("result").value += event.key;
}

// fungsi untuk enter
const cal = document.getElementById("calcu");
cal.onkeyup = function(event) {
    if(event.keyCode === 13) {
        solve();
    }
    if(event.key === 'Backspace') {
        hapus();
    }
}

// fungsi untuk hitung
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}

// fungsi untuk clear
function clr() {
    document.getElementById("result").value = "";
}

// fungsi untuk backspace
function hapus() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

// fungsi untuk mode tampilan
function modeTampilan() {
    const body = document.body;
    const ul = document.querySelector("ul");
    const table = document.getElementById("calcu");
    const input = document.getElementById("result");
    const button = document.querySelectorAll("button");
    const cells = document.querySelectorAll("td"); //  ini untuk memilih semua <td>

    // Toggle kelas dark-mode
    body.classList.toggle("dark-mode");
    ul.classList.toggle("dark-mode");
    table.classList.toggle("dark-mode");
    input.classList.toggle("dark-mode");
    button.forEach(btn => btn.classList.toggle("dark-mode"));
    cells.forEach(cell => cell.classList.toggle("dark-mode")); //  kelas dark-mode pada setiap <td>
}
