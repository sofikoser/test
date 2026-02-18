'use strict'

let title = prompt('Название проекта?') // Название проекта

let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?');

let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')

let percentage = 10; // Процент отката подрядчику
let screenPrice = 2500; // Цена реализации одного экрана


const getAllServicePrices = function (servicePrice1 , servicePrice2) {
    return +servicePrice1 + +servicePrice2
}
let allServicePrices =getAllServicePrices(servicePrice1 , servicePrice2)
console.log('Стоимость всех услуг: ',allServicePrices);


function getFullPrice() {
    return allServicePrices + +screenPrice
}
let fullPrice = getFullPrice(allServicePrices, screenPrice);
console.log('Стоимость всего проекта: ',fullPrice);


const getTitle = function(title) {
    const titleProject = title[0].toUpperCase() + title.slice(1).toLowerCase();
    console.log(titleProject);
}
getTitle(title)


const getServicePercentPrices = function(fullPrice, percentage) {
    let servicePercentPrice = Math.round(fullPrice - fullPrice / 100 * percentage);
    console.log('Итоговая сумма за вычетом процента подрядчику: ', servicePercentPrice);
}
getServicePercentPrices(fullPrice, percentage)



const getRollbackMessage = function(fullPrice) {
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
getRollbackMessage(fullPrice)