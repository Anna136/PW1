let username = 'username1';
let password = 'password1';

let userLogin = prompt("Введите логин:");
let userPassword = prompt("Введите пароль:");
if (userLogin == username && userPassword == password) {
  alert('Привет!');
} else if (userLogin == username && userPassword != password) {
  alert('Неверный пароль.')
} else if (userLogin != username) {
  alert('Неверный логин.')
} else if (userLogin == '' || userPassword == '') { alert('Ошибка!'); }
