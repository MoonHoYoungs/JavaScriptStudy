//기초과정 복습

//변수 primitive타입과 object의 차이점


//변수 number, string, boolean, null, undefined
let age = 2; //number타입
let num = '2'; //string타입

//전역변수로 선언하면 바로 메모리가 할당된다. 
let age2 = age; //age에 있는 값을 그대로 가져다가 할당한다. 

age = 4
//object란 최소 2가지의 값을 할당받은 것 위에 변수라고 말한 것을 제외한 모든 객체

//object

let obj = {
  name: 'ellie',
  age: 5
  //name와 age에 각각 메모리(공간)이 할당되어 ellie와 5라는 값이 들어간다. 
};

console.log(obj.name);

let obj2 = obj;
console.log(obj2); // { name: 'ellie', age: 5 } 출력
console.log(obj2.name);

/*object나 변수나 값에 변수를 할당하면 그 변수에 있는 값이 복사되어서 들어온다. 

변수는 데이터가 바로 들어있어서 데이터가 바로 들어오지만 
object는 그 주소가 복사되어서 들어온다. 

즉 obj에는 name와 age라는 주소(레퍼런스:reference) 가 할당이 된다. 
*/

obj.name = 'james';

console.log('--------');//--------
console.log(obj2.name);//james
console.log(obj2.name);//james


/*let는 선언하고 나서 나중에 값을 바꿀 수 있다. 
 const는 선언 후 값을 변경할 수 없다. 
  object가 가리키는 레퍼런스는 변경이 불가능하다 하지만 
  레퍼런스가 가리키는  값을 바꿔줄 수 있다. 
  즉 
  age.name = 'jim'; 이 가능하다
*/