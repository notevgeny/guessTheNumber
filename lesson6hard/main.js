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
********************************************************************************************************
Кол-во попыток пользователя должно быть ограничено: 10

— если пользовательское число больше, то бот выводит "Загаданное число меньше, осталось попыток ..." и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше, осталось попыток ..." и предлагает ввести новый вариант;
— если пользователь вводит правильное число, то бот выводит "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", при нажатии ОК игра перезапускается (снова 10 попыток и новое загаданное число)
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра выводит прощальное сообщение и завершается.
— если закончились попытки то программа сообщает: "Попытки закончились, хотите сыграть еще?"
************************************************************************************************************
Программа должны быть выполнена с помощью рекурсии, без единого цикла.*/



function showAnswer() {
  let num = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  function answerToPlay(message) {
    if (confirm(message)) {
      showAnswer();
    }
  }

  let checkNum = function () {
    let answer = prompt('Угадай число от 1 до 100');

    if
      (answer === null) {
        return alert('До встречи!');
      }

    else if
      (+answer === num) {
          if (
            answerToPlay('Ты отгадал, молодец! Затраченное количество попыток: ' + (10 - +attempts) + '\nБудем играть еще?'));
      }
    else if
      (!isNumber(answer) || (answer === '')) {
        alert('Введи число!');
        checkNum();
        console.dir(checkNum);  
      } 
    else {
      attempts--;
      if (attempts > 0) {
        if 
          (+answer > num) {
            attempts--;
            alert('Загаданное число меньше. Количество попыток: ' + attempts)
            
        }
        else {
            alert('Загаданное число больше. Количество попыток: ' + attempts);
        }
        checkNum();
      
      }
      else 
        {
          answerToPlay('Попытки закончились. Хотите сыграть еще?');
        }
      console.dir(checkNum);
    }
  }
  checkNum();
}

showAnswer();


 








