namespace TypeGuards2 {
    /**
     * typeof를 이용하여 타입 가드 제공함.
     */
    export function someFuncTypeof(val: number | string) {
        if (typeof val === "number") {
            return val.toFixed(2);
        } else if (
            typeof val === "string" ||
            (typeof val === "object" && Array.isArray(val))
        ) {
            return val.length;
        }
    }

    /**
     * in연산자를 이용하여 타입 가드를 제공함.
     * in연산자 사용 시 우항의 객체의 타입은 any이어야만 함.
     */
    export function someFuncIn(val: any) {
        if ("toFixed" in val) {
            return val.toFixed(2);
        } else if ("split" in val) {
            return val.split(",");
        }
    }

    class Cat {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        meow() {}
    }

    class Dog {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        woaf() {}
    }

    /**
     * instanceof를 이용한 타입 가드
     * instanceof : 객체의 프로토타입 체인상에 생성자 프로토타입이 존재하는지 검증
     */
    // eslint-disable-next-line no-inner-declarations
    function sounds(animal: Cat | Dog) {
        if (animal instanceof Cat) {
            animal.meow();
        } else if (animal instanceof Dog) {
            animal.woaf();
        }
    }
}
