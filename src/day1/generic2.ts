interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

/**
 * showName에 전달하는 인자는 반드시 프로퍼티 name이 있어야함.
 */
function showName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

const user: User = {
    name: "James",
    age: 20,
};

showName(user);
// showName({ age : 20 }); // 함수에 전달하는 인자에 name프로퍼티가 없으므로 에러,
