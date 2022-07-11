/**
 * 추상(Abstract) 클래스
 * 1. 다른 클래스가 파생될 수 있는 기본 클래스 인터페이스와 유사함.
 * abstract는 클래스, 멤버(속성, 메서드)를 사용할 수 있음.
 */
class AbstactAnimal {
}
class Snake extends AbstactAnimal {
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const mySnake = new Snake("Luxy");
console.log(mySnake.getName());
class Snake3 {
    getName() {
        return this.name;
    }
}
/**
 * 추상클래스와 인터페이스의 차이점은 일반 메서드 정의가 가능 여부가 가장 큼.
 * 인터페이스는 일반 메서드를 정의할 수 없음.(반드시 선언만 허용)
 */
