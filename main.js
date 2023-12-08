var tanya = true;
while (tanya) {
  var p = prompt("masukkan pilihan anda : \n batu, gunting, kertas");
  var com = Math.random();

  if (com < 0.34) {
    com = "batu";
  } else if (com >= 0.34 && com < 0.67) {
    com = "gunting";
  } else {
    com = "kertas";
  }

  var hasil = "";

  if (p == com) {
    hasil = "SERI";
  } else if (p == "batu") {
    //   if (com == "gunting") {
    //     hasil = "MENANG";
    //   } else {
    //     hasil = "KALAH";
    //   }
    hasil = com == "gunting" ? "MENANG" : "KALAH";
  } else if (p == "gunting") {
    hasil = com == "batu" ? "MENANG" : "KALAH";
  } else if (p == "kertas") {
    hasil = com == "batu" ? "MENANG" : "KALAH";
  } else {
    hasil = " memasukkan pilihan yang salah";
  }

  alert("Anda memilih : " + p + " sedangkan komputer memilih : " + com + "\n maka anda : " + hasil);

  tanya = confirm("masih mau bermain lagi?");
}

alert("terimakasih sudah bermain.");
