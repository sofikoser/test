'use strict'
let percentage = 10; // Процент отката подрядчику
let allServicePrices;
let fullPrice;
let titleProject = '';
let screenPrice = ''; // Цена реализации одного экрана
let textFromPromt = ''
let title;
let screensValue;
let responsive;


const checkIsNumber = function (screenPrice) {
    if (screenPrice === null) {
        return "Вы нажали Отмена";
    }

    let num = screenPrice.trim(); // Удаление пробелов
    if (num === "" || isNaN(parseFloat(num)) || !isFinite(num)) {
        return false;
    } else {
        return true;
    }  
}




const asking = function() {
    title = prompt('Название проекта?') 
    screensValue = prompt('Какие экраны нужны: шаблонные, с уникальным дизайном, с анимациями?') 
    responsive = prompt('Нужен ли респонсивный сайт? (да/нет)');
    textFromPromt = prompt('Сколько стоит реализация одного экрана?');

    while (!checkIsNumber(textFromPromt)) {
        textFromPromt = prompt('Ошибка! Введите цену цифрами.');
    }
    screenPrice = parseFloat(textFromPromt);
}


 

const getAllServicePrices = function() {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        let serviceName = prompt('Какой сервис нужен?');
        let servicePrice = prompt('Сколько это будет стоить?');

 
        while (!checkIsNumber(servicePrice)) {
            servicePrice = prompt('Ошибка! Введите стоимость цифрами:');
        }
        
        sum += parseFloat(servicePrice); 
    }
    
    return sum;
};


function getFullPrice() {
    return allServicePrices + +screenPrice
}

const getServicePercentPrices = function() {
    return Math.round(fullPrice - fullPrice / 100 * percentage);
}

const getTitle = function() {
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
}




 const getRollbackMessage = function() {
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
}



asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
let servicePercentPrice = getServicePercentPrices()
getRollbackMessage()
titleProject = getTitle()



console.log('Название проекта: ', titleProject);
console.log('Типы экранов: ', screensValue);
console.log('Нужен ли респонсивный сайт: ', responsive);
console.log('Стоимость всех услуг: ',allServicePrices);
console.log('Стоимость всего проекта: ',fullPrice);
console.log('Итоговая сумма за вычетом процента подрядчику: ', servicePercentPrice);




