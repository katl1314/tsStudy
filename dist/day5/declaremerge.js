/**
 * 선언 병합.
 * 두 개 이상의 개별적인 선언을 하나의 정의로 병합하는 것 (개수는 제한적이지 않음.)
 */
var DeclareMerge;
(function (DeclareMerge) {
    let hasMuscles = true;
    function animalIsHaveMuscles() {
        return this.hasMuscles;
    }
    DeclareMerge.animalIsHaveMuscles = animalIsHaveMuscles;
    // 두 인터페이스를 병합하면
    // 다만 인터페이스의 이름이 비-함수 멤버는 고유해야. 고유하지 않으면, 모두 같은 타입이어야
    /**
     * interface Box {
     *  width: number;
     *  height: number;
     * }
     */
})(DeclareMerge || (DeclareMerge = {}));
class Animal {
}
class Sheep {
}
class Dog {
}
class Cat {
}
/**
 * namespace 병합
 * 인터페이스 병합과 마찬가지로 namespace의 이름이 동일하면 하나의 네임스페이스로 병합된다.
 * 네임스페이스에 정의된 인터페이스, 클래스, 함수등을 내보내, 하나의 네임스페이스에 확장한다.
 *
 * 네임스페이스는 외부에서 참조할 때 export를 추가해야 접근이 허용된다.
 * 이름이 같은 네임스페이스가 있을때 동명이름의 클래스, 인터페이스, 함수등을 선언할 수 없음.(export 사용 시 중복 선언 불가)
 */
(function (DeclareMerge) {
    function doAnimalHaveMuscle() {
        return this.hasMuscles;
    }
    DeclareMerge.doAnimalHaveMuscle = doAnimalHaveMuscle;
    /**
     * interface cloner {
     *  clone(animal: Animal): Animal;
     *  clone(animal: Sheep): Sheep;
     *  clone(animal: Dog): Dog;
        clone(animal: Cat): Cat;
     * }
     */
})(DeclareMerge || (DeclareMerge = {}));
const myBox = {
    width: 10,
    height: 20,
};
const myCloner = {
    clone: function (animal) {
        return animal;
    },
};
