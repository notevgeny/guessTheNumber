'use srict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
/*Используйте функции alert, confirm, prompt для общения с пользователем.

Написать игровой бот.

"Загадывание случайного числа от 1 до 100"

Что должна делать программа:

— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается.


Программа должны быть выполнена с помощью рекурсии, без единого цикла.*/



function showAnswer() {
  let num = 12;
  let checkNum = function () {
    let answer = prompt('Угадай число от 1 до 100');
    if
      (answer === null) {
        return alert('Игра окончена');
    } 
    
    else if
      (!isNumber(answer) || (answer === '')) {
        alert('Введи число!');
        checkNum();
        console.dir(checkNum);
    } 
    
    else if 
      (+answer > num) {
        alert('Загаданное число меньше')
        checkNum();
        console.dir(checkNum);
    }

    else if
      (+answer === num) {
        alert('Ты отгадал! Молодец');
    }

    else if
      (+answer < num && answer !== null) {
        alert('Загаданное число больше');
        checkNum();
        console.dir(checkNum);
    } 
  }

  return checkNum();
}

play = showAnswer();
console.log(play);


 








