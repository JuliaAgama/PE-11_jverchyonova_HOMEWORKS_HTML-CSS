;
/***** JS Homework #11. DOM. Working with events. Attaching events to DOM nodes. Keyboard and scroll events *****/
//
//Теоретический вопрос
//
//Почему для работы с input не рекомендуется использовать события клавиатуры?
//
//потому что на некоторых клавишах клавиатуры могут вызваться события и действия js вместо стандартных их действий, ожидаемых во время набора текста.



console.log('-----------------------------------');
/******* JS Homework #11. Highlight letters  *******/
console.log('*** JS Homework #11. Highlight letters ***');

//Задание
//Реализовать функцию подсветки нажимаемых клавиш
//
//Технические требования:
//
//В файле index.html лежит разметка для кнопок.
//Каждая кнопка содержит в себе название клавиши на клавиатуре
//По нажатию указанных клавиш - та кнопка, на которой написана эта буква, должна окрашиваться в синий цвет. При этом, если какая-то другая буква уже ранее была окрашена в синий цвет - она становится черной. Например по нажатию Enter первая кнопка окрашивается в синий цвет. Далее, пользователь нажимает S, и кнопка S окрашивается в синий цвет, а кнопка Enter опять становится черной.


document.addEventListener('keypress', (event) => {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach( (el) => {
        el.innerText.toLowerCase() === event.key.toLowerCase() ?
            el.style.background = 'blue' : el.style.background = '#000';
    });
});
















