// //////////////////////////////////////  1  M  /////

// let son1 = prompt("soni kiriting:", Number());
// let son2 = prompt("soni kiriting:", Number());
// let son3 = prompt("soni kiriting:", Number());

// let max = Infinity;

// max = son1 > max ? son1 : max;
// max = son2 > max ? son2 : max;
// max = son3 > max ? son3 : max;

// console.log(`emg kattasi: ${max}`);


//////////////////////////////////////  2  M  /////

// let a = parseInt(prompt("1-sonni kiriting:"));
// let b = parseInt(prompt("2-sonni kiriting:"));
// let c = parseInt(prompt("3-sonni kiriting:"));

// if (a + b >= a + c && a + b >= b + c) {
//     console.log(`Eng katta yig‘indi: ${a + b}, sonlar: ${a}, ${b}`);
// } else if (a + c >= a + b && a + c >= b + c) {
//     console.log(`Eng katta yig‘indi: ${a + c}, sonlar: ${a}, ${c}`);
// } else {
//     console.log(`Eng katta yig‘indi: ${b + c}, sonlar: ${b}, ${c}`);
// }



//////////////////////////////////////  3  M  /////

// let son = parseInt(prompt("Sonni kiriting:"));

// if (son === 0) {
//     console.log("Son 0 ga teng");
// } else {
//     let turi = son > 0 ? "Musbat" : "Manfiy";
//     let juftlik = son % 2 === 0 ? "juft" : "toq";
//     console.log(`${turi} ${juftlik} son`);
// }



//////////////////////////////////////  4  M  /////

// let num = parseInt(prompt("1-999 oralig‘ida son kiriting:"));

// if (num < 1 || num > 999) {
//     console.log("Faqat 1 dan 999 gacha son kiriting!");
// } else {
//     let birlik = ["", "bir", "ikki", "uch", "to‘rt", "besh", "olti", "yetti", "sakkiz", "to‘qqiz"];
//     let onlik = ["", "o‘n", "yigirma", "o‘ttiz", "qirq", "ellik", "oltmis", "yetmis", "sakson", "to‘qson"];
//     let yuzlik = ["", "bir yuz", "ikki yuz", "uch yuz", "to‘rt yuz", "besh yuz", "olti yuz", "yetti yuz", "sakkiz yuz", "to‘qqiz yuz"];

//     let yuz = Math.floor(num / 100);
//     let on = Math.floor((num % 100) / 10);
//     let bir = num % 10;

//     console.log(`${yuzlik[yuz]} ${onlik[on]} ${birlik[bir]}`.trim());
// }



//////////////////////////////////////  5  M  /////

// let oy = parseInt(prompt("Oy raqamini kiriting (1-12):"));

// switch (oy) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("Bu oyda 31 kun bor.");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("Bu oyda 30 kun bor.");
//         break;
//     case 2:
//         console.log("Bu oyda 28 yoki 29 kun bor (kabisa yiliga qarab).");
//         break;
//     default:
//         console.log("Noto‘g‘ri oy raqami.");
// }



//////////////////////////////////////  6  M  /////

// let yonalish = prompt("Robot yo‘nalishini kiriting (S, J, Q, G):").toUpperCase();
// let komanda = parseInt(prompt("Komandani kiriting (0-harakatni davom ettir, 1-chapga buril, 2-o‘ngga buril):"));

// if (komanda === 0) {
//     console.log(`Robotning yo‘nalishi o‘zgarmadi: ${yonalish} `);
// } else if (komanda === 1) {
//   switch (yonalish) {
//     case "S": yonalish = "G"; break;
//     case "J": yonalish = "Q"; break;
//     case "Q": yonalish = "S"; break;
//     case "G": yonalish = "J"; break;
//   }
//   console.log(`Robot chapga burildi, yangi yonalish: ${ yonalish } `);
// } else if (komanda === 2) {
//   switch (yonalish) {
//     case "S": yonalish = "Q"; break;
//     case "J": yonalish = "G"; break;
//     case "Q": yonalish = "J"; break;
//     case "G": yonalish = "S"; break;
//   }
//   console.log(`Robot o‘ngga burildi, yangi yo‘nalish: ${ yonalish } `);
// } else {
//   console.log("Noto‘g‘ri komanda!");
// }



