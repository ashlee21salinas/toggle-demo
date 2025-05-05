function methodOne() {
    let paraTwo = document.getElementById("pp");
    paraTwo.classList.toggle("paragraphClassTwo");
}


function methodTwo() {
   let para = document.getElementById("p");
   if (para.classList.contains("paragraphClass")) {
    para.classList.remove("paragraphClass");
   }
   else {
    para.classList.add("paragraphClass");
   }
}
