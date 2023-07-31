/*
//비동기처리

//1000 = 1초
console.log(1);

setTimeout(() => {
    console.log(2)
}, 2000)
console.log(3);
//ES7 react
//편의점에 들어가서 음료수를 사고 나오는 상황
function goMart() {
    console.log('마트에서 뭘 살지 고민한다.')
}

function pickDrink() {
    setTimeout( () => {
        console.log('고민 끝')
        product = '제로 콜라';
        price = 2000
    },3000)
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;
goMart();
pickDrink();
pay(product,price);

*/

//콜백함수: 함수 타입 파라미터 맨 마지막에 하나 더 선언
function mainFunc(param1, param2, callback){
    callback(param1,param2);
}

function callbackFunc(param){
    console.log("콜백함수 입니다");
}

mainFunc(1,2,callbackFunc);

   

function goMart() {
    console.log('마트에서 뭘 살지 고민한다.')
}

function pickDrink(callback) {
    setTimeout( () => {
        console.log('고민 끝')
        product = '제로 콜라';
        price = 2000
        callback(product,price);
    },3000)
}



let product;
let price;
goMart();
pickDrink(function (product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
});
//pay(product,price);