// Promise 프로미스

//Promise is a JavaScript object for asynchrobous operation
//operation state(실행중일 때) : pending -> 
//operation을 성공적으로 끝내면 fulfilled(완벽하게 완료) 
//                            or rejected(완료가 되지 않거나 파일이 없을 때 )



//1.Promise 
const promise = new Promise((resolve, reject) => {
    //do ing some heavy work ()
    //프로미스 안에서 무거운 일을 한다. 즉 시간이 걸린다. 
    //이를 동기적으로 작업하면 시간이 걸리는 동안 다른 작업이 멈추기 때문에
    //비동기적으로 처리하는 것이 좋다. 

    console.log('doing something');

    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
    //정상적으로 작동이 되면 resolve에 ellie라는 값을 전달 2초 후
    //resolve를 주석 처리 했으니 오류만 남아서 정상적으로 작동했을 때 
    //오류가 출력이 되게 한다. 
});
//프로미스를 만든 순간 우리가 만든 executer(생략됨) 함수가 바로 작동한다 
//이번 경우는  console창에 doing something가 바로 찍힌다. 
//그래서 위와 같이 작성하면 사용자가 요구하지 않아도 네트워크 통신이 될 수 있다. 
//이 점을 유의해야 한다. 


//2. Consumers : then, catch, finally
promise.then((value) => {
    //then을 호출하면 Promise가 다시 호출
    console.log(value);
}).catch(error => {
    console.log(error);
})
    .finally(() => {
        console.log('성공 실패에 상관 없이 무조껀 마지막에 실행된다.')
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));
//위에 선언해준 tesolve가 1임으로 then으로 전달 되어서 2->6이 된다. 
//then 은 새로운 Promise를 사용 가능하다. 

//4. Error Handling  에러 상황에 반응하고 에러를 잡는 걸 말한다. 

const getHen = () => new Promise((resolve, reject) => { setTimeout(() => resolve('닭'), 1000); });

//const getEgg = hen => new Promise((resolve, reject) => resolve(`${hen}=> 달걀`), 1000);
const getEgg = hen => new Promise((resolve, reject) => reject(new Error(`${hen}=> 달걀`)), 1000);

const cook = egg => new Promise((resolve, reject) => resolve(`${egg} => 치킨`), 1000);

/*getHen()
.then(hen => getEgg(hen)) 
.then(egg => cook(egg))
.then(meal => console.log(meal));

*/
//콜백 함수를 전달 할 때 받아오는 벨류를 다른 함수로 바로 호출하는 경우 생략 가능
getHen()
    .then(getEgg)
    //에러가 나는 곳에 catch를 작성하여 오류에 대처할 수 있다. 
    .catch(error => { return '빵'; })
    .then(cook)
    .then(console.log)
    .catch(console.log);
    // 달걀을 받아오는 곳에서 에러가 났을 경우
    //catch로 받아줬기 때문에 log가 변했다. 
