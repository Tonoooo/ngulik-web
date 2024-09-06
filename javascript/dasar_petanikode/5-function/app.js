let dataBarang = [
    "SSD ITB",
    "Processor IBM",
    "Monitor Asus",
    "Mouse Logitech",
    "Keyboard Logitech"
]

function showBarang() {
    let listBarang = document.getElementById("list-barang");
    listBarang.innerHTML = "";

    for (let i = 0; i < dataBarang.length; i++) {
        let editBtn = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
        let hapusBtn = "<a href='#' onclick='hapusBarang(" + i + ")'>Hapus</a>";


        listBarang.innerHTML += "<li>" + dataBarang[i] + "["+editBtn+"|"+hapusBtn+"] </li>";
    }

}

function addBarang() {
    let barang = document.querySelector("input[name='barang']");
    dataBarang.push(barang.value);
    showBarang();
}

function editBarang(id) {
    var barangBaru = prompt("Masukkan nama barang baru:");
    dataBarang[id] = barangBaru;
    showBarang();
} 

function hapusBarang(id) {
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();