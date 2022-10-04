class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        /*constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화 하는 특별한 메서드
        다른 모든 메서드의 호출보다 앞선 시점에서 인스턴스 객체를 초기화 할 코드를 정의 가능
        
        class Counter에는 counter라는 변수가 있고 이 클래스를 이용해 
                object를 만드는 순간 자동으로  0으로 초기화 된다. 
        */
        this.callback = runEveryFiveTimes
    
    }
    increase(/*rubIf5Times라는 매개변수가 있었음. */) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            //rubIf5Times(this.counter); this.callback의 추가로 주석처리 

            // 여기부터는 아래쪽을 전부 읽고 읽어야 함. 
            //callback에 값이 없으면 오류가 뜨니 코드를 수정해주면
            this.callback && this.callback(this.counter);
            /* callback가 true일때(값이 존재할 때) &&(뒤에 나오는 내용 this.callback(this.counter); 도 참이다.)
           즉 callback가 true여야만 callback에 매개변수로 this.counter을 준다. 
           아래쪽에 선언해둔 printSometging가 callback가 되고 그에 대한 매개변수로 count를 받으면 
           yo!와 함께 num이 출력된다. 


            &&는 양쪽 모두 ture 여야 true

            이렇게 if문을 쓰지 않고 깔끔하게 코드 작성이 가능하다. */
           //this.callback(this.counter); 위 코드의 추가로 주석

        }
        /* increase 메소드는 rubIf5Times를 매개 변수로 삼아. 
        호출 될 때 마다 counter을 ++해주고 console.log에 counter를 출력한다. 
        그리고 만약(if) counter이 5로 나눴을 때 0이 된다면 
        매개변수로 받은 rubIf5Times를 호출하며 counter을 매개 변수로 받는다.
        
        --처음에 굉장히 어려웠다. 복잡해 보이고... 하지만 어렵게 생각 할 필요가 없다. 
        매개변수로 받는 이름 rubIf5Times는 이 메소드로 들어오는 매개변수를 이 이름으로 쓰겠다는 것이다. 
        */

        /*매개변수 === Parameter 이다
        나는 누구는 매개변수 누구는 Parameter이라 할때 굉장히 헷갈렸다. */
    }
}
function printSometging(num) {
    console.log(`yo! ${num}`);
}
function alertNum(num) {
    alert(`alert! ${num}`);
}


const coolCounter = new Counter(printSometging);

/*그래서 위 coolCounter은 class Counter의 메소드를 받아 왔으며

새로운 function printSometging는 num이라는 것을 파라미터 즉 매개변수로 받고 console에 yo와 num을 
출력해 주는 메소드이다. 

*/

coolCounter.increase(printSometging);  // 1
/* 즉 이 코드는 class를 상속 받은 coolCounter의 increase를 실행하며
 --물론 constructor가 먼저 실행되어 counter의 값은 초기화 되어있다. --
 매개 변수로 printSometging를 받아 rubIf5Times라는 이름으로 if문에서 사용 될 것이다. 
 rubIf5Times는 counter을 배개변수로 받기 때문에 num=counter의 value가 되고 
 yo와 num을 출력하기에 if문이 true가 될 때 num = counter.value와 yo!가 출력이 된다. 


 다시 간단하게 정리하자면 
 increase는 매개변수로 받은 function인 printSometging(num)을 if문에 해당할 때 '호출'한다. 
 왜냐? rubIf5Times라는 이름으로 printSometging(num)이 들어왔기 때문 
 호출된 printSometging는 counter을 num이라는 이름으로 사용하기에 num = counter.value이며 
 yo와 num을 출력한다. 

 이건 내가 학원에서 제대로 잘못 배웠다....
 function a(a,b)에서 함수를 호출 할 때 주는 매개변수의 이름이 동일해야만 하는 줄 알고 있었다. 
 
 지금이라도 이렇게 정보를 수정 할 수 있어서 다행이다. 
*/

coolCounter.increase();  // 2
coolCounter.increase();  // 3
coolCounter.increase();  // 4
coolCounter.increase();  // 5 yo! 5

coolCounter.increase();  // 6
coolCounter.increase();  // 7
coolCounter.increase();  // 8
coolCounter.increase();  // 9
coolCounter.increase();  // 10 yo! 10


const kim = {
    name : 'kim',
    first : 10,
    second : 10,

    sum : function(f, s){
        return this.first + this.second
    }
}
console.log(kim.sum());
/*
 this는 그 this가 속해있는 객체를 가르키도록 설정되어있는 특수한 함수이다.
 객체 명에 상관 없이  항상 메소드가 속해있는 객체를 가리키도록 약속된 특수한 예약어
 만약 입력 받은 값으로 sum을 만들고 싶다면 위 코드로는 안 된다. 
*/


/* 정리 Class에 모든 걸 정의해 버리면 
사용하는 사람이 컨트롤 하기 힘들고 재사용률이 떨어진다. 
 */


const prontCounter = new Counter(printSometging);
const alertCounter = new Counter(alertNum);

/*하나의 클래스로 다양한 오브젝트를 만들어서 서로 다른 기능을 실행하는 오브젝트를 만들 수 있다. 

가능하면 class를 하나의 완전한 것으로 만들기보다는 
레고처럼 우리가 원하는 파츠를 추가해서 원하는 기능을 사용할 수 있도록 해야한다. 
*/