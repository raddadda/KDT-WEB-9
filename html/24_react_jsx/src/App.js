import logo from './logo.svg';
import './App.css';

function App() {
  
  const flag = false;
  let txt=''

  if(flag){
    txt = 'true 입니다'
  }else{
    txt = 'false 입니다'
  }

  const styles = {
    backgroundColor: 'red'
  }
  let name='밥';
  let animal='강아지';
  //map 함수
  const lists = ['k','d','t','w','e','b'];
  //filter함수
  const animals = ['dog','cat','rabbit'];

  const newAnimals = animals.filter(value=>{
    //return value.length>3;
    return value.includes('o');
  });
  console.log(newAnimals);
  //단축평가
  //&&연산자
  const result = false && 'Hello';
  console.log(result);
  //||연산자
  const defaultValue = 1000
  const price = 1500
  const dbPrice = price || defaultValue;
  console.log(dbPrice)
  const users = [
    {id:1,name:"John",age:25,vip:true},
    {id:2,name:"Jane",age:19,vip:false},
    {id:3,name:"Alice",age:30,vip:true},
    {id:4,name:"Bob",age:18,vip:false},
    {id:5,name:"Charlie",age:35,vip:true}
  ]
  const newUser = users.filter(value=>{
    return value.age>=25;
  })
  console.log("newUser",newUser)
  const islogin = false;
 

    return (
      <div>
        {islogin && (
          <>
           <h1 style={{backgroundColor: 'black', color: 'white'}} >Hello React</h1>
        <div style={styles}>리액트 시작</div>
        <input />
  
        <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
        <div>{txt}</div>
        {lists.map((value,index)=>{
          return (
            <div key={index}>
              <p>{index} Hello {value}</p>
            </div>
        );
        })}
        {newUser.map((a,b)=>{
          return (
            <div>
                -{a.name}
            </div>
          )
        })}
          </>
        )}
       
      </div>
      //===실습4===
      // <div className='box'>
      //   <div className='red'></div>
      //   <div className='orange'></div>
      //   <div className='yellow'></div>
      //   <div className='green'></div>
      //   <div className='blue'></div>
      //   <div className='navy'></div>
      //   <div className='purple'></div>
      // </div>
      //===실습3===
      // <>
      //   <h1 className="test">Hello World</h1>
      //   <div className="input">
      //   아이디 : <input /> <br/><br/>
      //   비밀번호 : <input />
      //   </div>
        
      // </>
      //===실습2===
      // <>
      //   <span>제 반려 동물의 이름은 <u>{name}</u>입니다.</span>
      //   <div><u>{name}</u>은<u>{animal}</u>입니다.</div>
      // </>
      //===실습1===
      // <div>
      //   이것은 div입니다
      //   <h3>이것은 div안에 있는 h3태그입니다</h3>
        
      //   <div>
      //     {3+5 == 8 ? <h1>정답입니다</h1> : <h1>오답입니다</h1>}
      //   </div> 
        
      // </div>
  
    );
  
  
}

export default App;
