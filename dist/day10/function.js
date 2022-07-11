/**
 * 함수는 자바스크립트에서도 제공되는 기능임.
 * 타입스크립트에서는 매개변수 타입, 리턴 타입을 지정할 수 있음.
 *
 * 함수에서 가장 중요한 부분은 this임.
 * this는 함수가 호출에 따라 this가 전역 객체를 가리킬 수 있고, strict mode(ES6 기능)인 경우
 * undefined가 될 수 있음.
 *
 * 객체 내 메소드내 this는 메서드를 포함하고 있는 객체를 참조한다.
 */
const obj = {
    a: "Hello~",
    b() {
        console.log("method b", this.a); // obj.a
        // Inner function
        function b() {
            // this -> window
            console.log("function b", this.a); // global.a(es6 또는 strict모드이면 undefined)
        }
        const c = () => {
            console.log("function c(arrow)", this.a); // obj.a (화살표 함수는 상위 함수(상위 스코프의 this를 참조))
        };
        b();
        c();
    },
};
// obj.b();
const bindB = obj.b.bind(obj);
setTimeout(bindB, 3000);
// 만약 호출하지 않는 메서드를 사용하게 되면 this가 유효한 컨텍스트는 잃어버리게 되면서
// 속성 a를 참조할 수 없게 됨.
// bind를 이용하여 새로운 컨텍스트를 전달하여, 함수 내 this를 해당 컨텍스트를 참조하도록 한다.(연결)
// bind(변경된 this를 가진 함수를 생성), apply, call(호출)
// 화살표 함수내 this는 상위 스코프의 this를 참조함.
// 다음은 명시적 this부터
