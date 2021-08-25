function forEachLoop() {
   const teks = "Saya ingin belajar bersama";
   const array = teks.split(" ");
   array.forEach((item, index) => {
      console.log("Item : " + item + " Index ke " + index);
   })
}
forEachLoop()