// if, else, nested if
var nilai = 65;

if (nilai >= 80) {
    console.log("Nilai Kamu A");
} else if (nilai >= 70) {
    console.log("Nilai Kamu B");
} else if (nilai >= 60) {
    console.log("Nilai Kamu C");
} else {
    console.log("Nilai Kamu D");
}

// switch case
var pemain = "Ronaldo";

switch (pemain) {
    case "Ronaldo":
        console.log("Pemain ini adalah GOAT.");
        break;
    case "Kroos":
        console.log("Pemain ini adalah gelandang terbaik.");
        break;
    case "Casillas":
        console.log("Pemain ini adalah keeper terbaik.");
        break;
    default:
        console.log("Pemain ini saya tidak tau.");
}

// for statement
for (var i = 1; i <= 5; i++) {
    console.log("Juara UCL ke-" + i);
}

// while
var pemain_terbaik = 1;

while (pemain_terbaik <= 5) {
    console.log("Pemain terbaik dunia: " + pemain_terbaik);
    pemain_terbaik++;
}

// do while
var tahun = 1;

do {
    console.log("Tahun ke-: " + tahun);
    tahun++;
} while (tahun <= 5);

// function
function tambah(a, b) {
    return a + b;
}

var hasil = tambah(10, 4);
console.log("Jumlah tropi UCL King Eropa: " + hasil);
console.log("Nggak ada lawan pokoknya.");



