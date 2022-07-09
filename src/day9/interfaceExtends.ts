/**
 * 인터페이스 확장 : 클래스 확장과 마찬가지로 인터페이스는 extends키워드를
 * 사용하여, 확장이 가능하다.
 */

interface IAnimal9 {
    name: string;
}

interface ICat9 extends IAnimal9 {
    meow(): void;
}

interface IDog9 extends IAnimal9 {
    move(): void;
}

// interface ICat9 { name: string; meow(): void };
// interface IDog { name: string; move(): void };

const cat: ICat9 = {
    name: "Tomas",
    meow() {
        console.log(`${this.name} 야옹~`);
    },
};

cat.meow();
