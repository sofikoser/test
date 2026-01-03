let titleProject = prompt('Название проекта?') // Название проекта
console.log('Название проекта: ', titleProject);

let screensValue = prompt('Какие экраны нужны: шаблонные, с уникальным дизайном, с анимациями?') // Типы экранов
console.log('Типы экранов: ', screensValue);

let responsive = prompt('Нужен ли респонсивный сайт? (да/нет)') === 'да';
console.log('Нужен ли респонсивный сайт: ', responsive);

let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?');
console.log('Сервис 1: ', service1 ,'со стоимостью ', servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log('Сервис 2: ', service2 , 'со стоимостью ', servicePrice2);

let screenPrice = 2500; // Цена реализации одного экрана
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;

// Процент отката подрядчику
let percentage = 10;

let servicePercentPrice = Math.round(fullPrice - fullPrice / 100 * percentage);
    console.log('Итоговая сумма за вычетом процента подрядчику: ', servicePercentPrice);

if (fullPrice>=50000) {
    console.log('Вы получаете скидку 10%!');
}
else if (fullPrice>=20000 && fullPrice<50000) {
    console.log('Вы получаете скидку 5%!');
}
else if (fullPrice<0) {
    console.log('Что-то пошло не так');
}
else if (fullPrice>=0 && fullPrice<20000) {
    console.log('Скидка не предусмотрена');
}