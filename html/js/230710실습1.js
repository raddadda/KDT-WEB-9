let color = ["빨","주","노","초","파","남","black"];
console.log(color[2]);
color.push("카키");
console.log(color);
console.log(color.indexOf("black"));

let reverse = new Array(color.length);
for(var j=color.length-1; j>=0; j--){
    reverse.push(color[j]);
}
//reverse 함수
// reverse = color.reverse();
console.log(reverse);


