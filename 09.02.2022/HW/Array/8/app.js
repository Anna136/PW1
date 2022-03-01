const colors = ["red", "green", "blue"];
let c=prompt("Введите цвет (на английском)");
function checkColor(color){
  alert(colors.indexOf(color));
}
checkColor(c);