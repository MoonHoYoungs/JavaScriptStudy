//JavaScript 기본함수와 동작하는 원리

//함수 선언
function doSomething(/*함수에서 절달하거나 전달 받을 인자*/) {
    /*실제 함수가 동작하는 곳*/
    console.log('hello');
}
// 함수는 두 종류가 있다. 
// 아무것도 전달하지 않고 기능만 하는 함수 doSomething


function add(a, b) {
    /* 타 언어의 경우  a : number, b:number 이런식으로 타입을 지정해 줘야 한다.
    하지만 JavaScript는 타입을 지정해주지 않는 언어*/
    const sum = a + b;
    return sum;
}



//함수 호출
doSomething();
//add(1,2);
const result = add(2, 3);
console.log(add(1, 2)); //3 출력
console.log(result); // 5 출력

/*JavaScript는 ui적 요소가 없다.*/

function doSomething1(add) {
    console.log(add);
}
// doSomething1(add);
// doSomething1을 실행하면  add라는 함수 자체가 전달된다. 
/* doSomething1(add()); 이렇게 하면 함수를 호출 하고 전달을 하기 때문에 add라는 함수가 출력이 된다. 
   doSomething1(add(1, 2)); 는 3이 출력된다. 
*/

//최종적으로 
function doSomething2(add) {
    console.log(add);
    const result1 = add(2, 3);
    console.log(result1);
}

doSomething2(add);

//내가 개조해보기 및 정리


/*함수에는 선언과 호출이 있다. 
선언할 때는 우리가 어떤 값을 전달 받아 올 건지 인자들을 정하고 나서 코드 블록을 작성
선언만 하면 우리가 작성한 코드블록은 실행되지 않는다. 
실행가기 위해서는 함수를 호출해야 한다. 
함수를 호출하기 위해서는 함수선언에 정의된 인자 값을 전달하며 호출해야 한다. 
함수의 이름은 함수를 가르키는 함수 자체가 된다. 
doSomething3(); 인자를 적어주지 않으면 함수 자체를 전달한다.
*/
function doSomething3(add, a, b) {
    const result1 = add(a, b);
    console.log('개조한 것' + result1);
}


doSomething3(add, 1, 5);


