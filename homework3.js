function kondisiair(suhuair) {
  if (suhuair >= 100 && suhuair <= 500) {
    return "Uap";
  } else if (suhuair < 100 && suhuair > 0) {
    return "Cair";
  } else if (suhuair <= 0 && suhuair >= -100) {
    return "Beku";
  } else {
    return "Tidak Terdefinisi";
  }
}

console.log(kondisiair(700));
console.log(kondisiair(150));
console.log(kondisiair(100));
console.log(kondisiair(50));
console.log(kondisiair(0));
console.log(kondisiair(-50));
console.log(kondisiair(-1200));

function pilihanbensin(jenis, cc) {
  if (jenis === "plat kuning" || jenis === "motor") {
    return "BBM Subsidi";
  } else if (jenis === "mobil" && cc < 1500) {
    return "Pertamax";
  } else if (jenis === "mobil" && cc >= 1500) {
    return "Pertamax Turbo";
  } else {
  }
}

console.log(pilihanbensin("plat kuning", 1000));
console.log(pilihanbensin("motor", 1500));
console.log(pilihanbensin("mobil", 1000));
console.log(pilihanbensin("mobil", 2000));
console.log(pilihanbensin("mobil", 2000));