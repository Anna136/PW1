let name=prompt("Как тебя зовут?");
alert(`Привет ${name}`);
let answer=confirm('Ты знаком с языком JavaScript?');
if(answer){
  alert('Молодец!');
}else{
  alert('');
  alert('Можно начать изучение прямо сейчас!');
}