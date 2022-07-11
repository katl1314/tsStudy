/**
 * 클래스(Class)
 * 클래스의 생성자(constructor), 메서드, 멤버와 다르게, 속성은
 * 클래스 바디에 별도로 타입을 선언함.
 *
 * 클래스 바디(Class Body)는 중괄호로 감싸져 있는 영역을 의미
 */
class Animal3 {
    constructor(name) {
        this.name = name; // 멤버
    }
}
class Cat3 extends Animal3 {
    // 클래스 메서드
    getName() {
        return `Cat name is ${this.name}`;
    }
}
const myCat = new Cat3("Lucy");
console.log(myCat.getName());
/**
 * 클래스 수식어, 클래스 멤버(메서드, 속성)은 지원하는 접근 제어자가 있음.
 * 접근 제어자는 public, private, protected으로 구성되어있음.
 *
 * public : 어디서든지 접근할 수 있음 (완전 자율)
 * private : 해당 클래스 내부에서만 접근이 허용 (완전 폐쇄)
 * protected : 부모 클래스와 부모 클래스로부터 상속받은 서브 클래스만 접근 허용
 *
 * static : 정적 메서드를 정의함.(속성, 일반 메서드)
 * readonly : 읽기 전용으로 사용함(속성만)
 *
 * 클래스는 속성을 굳이 사용하지 않아도 constructor에서 정의할 수 있음.
 * 접근제어자를 같이 사용하면 속성 멤버로 정의
 *
 * static 속성은 클래스 바디에서 초기화를 할 수 없으며, constructor에서 정의해야함.
 *
 * readonly가 적용된 속성은 constructor에서 초기화 가능하며, 재할당이 불가능.
 */
// 추상 클래스 이후 진행 (07-11)
