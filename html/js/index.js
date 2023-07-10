// 선언과 할당은 동시에

var number = 5;

// 같은 이름을 두번 선언하기 불가
let string = "가나다";
 
string = "마바사";

const string2 = "가가가";

// 재할당 안됨
// string2 = "나나나";
console.log(string2);

var string333;
function aaa(){
    
    string333 = "가나다";
}

console.log(string333);