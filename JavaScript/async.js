//async & await 
//에이싱크와 어워잇
//Promis 보다 간편하게 작성이 가능


//1. async : function앞에 붙이면 자동적으로  Promise를 사용한 것 처럼 된다. 
// async function 함수이름(){}

function fetchUser() {
    //서버와 연결하여 유저의 정보를 받아오는 펑션이 있다고 가정
    //di network reqeust in 10 secs....
    return 'moon';
}
const user = fetchUser();
console.log(user);

/*
이렇게 시간이 걸리는 코드를 비동기적 처리를 하지 않으면 
코드가 적힌 순서대로, 동기 방식으로 진행 되기 때문에 
const user = fetchUser(); 가 실행 되면
fetchUser가 선언된 곳으로 가서 10초동안 머무르고 
성공적으로 데이터를 받아오면 'moon'이 return 된다. 

사용자의 데이터를 받아오는데 10초가 걸릴때
만약 뒤에 웹 페이지를 표시하는 function이 있다면
10초 동안 빈 화면이 나오고 유저 정보를 받아오고 나서야
화면이 보일 것이다. 

비동기 처리방법은 Promis로 만드는 것. 

*/

//Promise를 사용한 비동기 함수 만들기
function fetchUser1() {
    return new Promise((resolve, reject) => {
        resolve('moon1');
    });
}

const user1 = fetchUser1();
user1.then(console.log);

//Promise 를 사용하지 않고 더 간단하게 비동기 함수 만들기

async function fetchUser2() {
    return 'moon2'
}

const user2 = fetchUser2();
user2.then(console.log);

//2.await : 기다려, asybc  가 붙은 함수에서만 사용가능 
//정해진 시간이 지나면 resolve 를 호출하는 함수

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}
//위에 두 getApple와 getBanana는 3초 후에(비동기로) 사과, 바나나를 불러온다.

/* 
바나나와 사과를  Promis로 만들면
function getBanana(){
return delay(3000)
.then(()=>'바나나');
}

function pickFruist() {
    return getApple()                                   //리턴 값으로 getApple를 부르고 
        .then(apple => {                                // apple 가 받아와 지면
            return getBanana()                          //받아온 apple를 이용해서 banana를 받아오고
                .then(banana => `${apple} + ${banana}`) //바나나를 받아오면 strin템플릿을 이용하여
        });                                             //apple와 banana를 동시에 묶어주는 애를 리턴

}
pickFruist().then(console.log);  //결과 값 사과 + 바나나

이것이 바로  coll back지옥이 될 수 있다. 
*/

/*
async function pickFruits(){
    const apple = await getApple();
    const bababa = await getBanan();
    return `${apple} + ${banana}`;
}
//이 경우는 사과와 바나나가 순차적으로 받아오는 상태이다. 
*/

async function pickFruits() {
    const applePromise = getApple();
    const bababaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bababaPromise;
    return `${apple} + ${banana}`;
}
//이 경우에는 사과와 바나나를 동시에 따서 온다
//순차가 아닌 병렬로 실행되는 상태
//하지만 코드가 지저분하기에 다른 기능을 쓴다. 



//3. useful Promise APIs

//Promise.all : Promise 배열을 전달하면 모든 Promise 별렬적으로 다 받을 때 까지 모아준다. 
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+')); //join 텍스트를 묶는 배열 API
};

pickAllFruits().then(console.log);
//pickAllFruits가 성공하면(then) console.log를 출력한다. 


//Promise.race :배열에 전달된 Promise중에서 가장 먼저 값을 리턴하는 것만 전달된다. 
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)
//getBanana가 1초 이기 때문에 바나나만 출력 된다. 



/**/