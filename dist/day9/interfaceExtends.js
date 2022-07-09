/**
 * 인터페이스 확장 : 클래스 확장과 마찬가지로 인터페이스는 extends키워드를
 * 사용하여, 확장이 가능하다.
 */
// interface ICat9 { name: string; meow(): void };
// interface IDog { name: string; move(): void };
const cat = {
    name: "Tomas",
    meow() {
        console.log(`${this.name} 야옹~`);
    },
};
cat.meow();
