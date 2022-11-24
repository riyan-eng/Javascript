// operator conditional
/*
if (kondisi) {
  aksi;
}
 */

var bilangan = 1;
// if (bilangan == 1){
//     console.log('bilangan yang kamu masukkan adalah 1')
// }

var bilangan = prompt("angka: ");
if (bilangan % 2 == 0) {
  console.log("bilangan genap");
} else {
  console.log("bilangan ganjil");
}

if (bilangan % 2 == 0) {
  console.log("bilangan genap");
} else if (bilangan % 2 == 1) {
  console.log("bilangan ganjil");
} else {
  console.log("anda bukan memasukkan angka");
}