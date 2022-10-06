//2022.10.04 화요일
//boolean 연산자 
// false : 0, -0, ''(텅텅빈 문자), undefined
// true : -1, 'hello', 텅텅 빈 array는 true다
//값이 없는 것 : false
//값이 존재하는 것 : true\

let num;
if (num) {
    console.log('true')
} else {
    console.log('false!')
}
/*num은 값을 선언해 주지 않아 undefined다 
출력은 fales */

num && console.log(num);
/*num이 false이기 때문에 뒤의 문장(코드)는 무시된다.  */



