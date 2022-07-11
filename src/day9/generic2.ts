// 기본적인 제네릭
interface MyType<T> {
    name: string;
    value: T;
}

const data1: MyType<number> = {
    name: "Adam",
    value: 1,
};

const data2: MyType<(number | string)[]> = {
    name: "Adam",
    value: ["a", 1, "b"],
};

interface myTest2 {
    a: number;
    b: boolean;
}

const data3: MyType<myTest2> = {
    name: "Adam",
    value: {
        a: 1,
        b: true,
    },
};
