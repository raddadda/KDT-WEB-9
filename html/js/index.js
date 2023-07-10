// 선언과 할당은 동시에
var number = 5;

// 같은 이름을 두번 선언하기 불가
let string = "가나다";
 
// 재할당 안됨
const string2 = "가가가";
console.log(string2);
var string333;

//함수
function aaa(){
    string333 = "가나다";
}
let sss;

for(let i=0; i< 10; i++){
    sss = "aa";
}

alert(sss);

let num = 0;
const variable = 1; // 상수 
var number = 1;
var string22 = 1;

//문자와 변수 동시에
console.log(number,'string');
console.log( `안녕하세요 ${string} 입니다.` );

//boolean
var a = false;

//Array배열
let names = ["가나다","마바사"];

console.log(names[0]);


console.log(names.length); //2
names.push("아자차");
console.log(names);
names.pop(); //배열의 가장 마지막 값을 삭제
console.log(names);
names.unshift("123") // 배열의 제일 앞에 값을 추가하는 기능
console.log(names);
names.shift() // 배열의 가장 앞에 값을 삭제
console.log(names);
names.indexOf("마바사") // 짱구가 몇번 인덱스에 위치해 있는지 알려줌, 없으면 -1출력
let chk = names.indexOf("마바사");
console.log("indexOf",chk);
names.includes("가나다") // 값이 포함되어있으면 true
let isIncludes = names.includes("마바사");
console.log(isIncludes);
