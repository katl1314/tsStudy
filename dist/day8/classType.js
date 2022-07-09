/**
 * 클래스 타입
 * 인터페이스로 클래스를 정의하고자 할 경우 implements를 사용함
 */
class User4 {
    // 인터페이스 IUser4내 모든 멤버는 필수 속성/메서드 이므로, 클래스에서 모두 사용한다.
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const me = new User4("neo");
console.log(me.getName()); // getName메서드 호출
/**
 * 인터페이스(interface)와 추상 클래스(abstract class)는 인스턴스를 생성할 수 없음.
 * new연산자를 이용하여 생성 불가.
 */
