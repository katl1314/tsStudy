let country = "CN";
// 변수 country의 타입은 KR | US | CN임. 해당 값만 할당 할 수 있음.
country = "US";
console.log(country);
// keyof를 통한 인덱싱으로 타입의 개별 값에도 접근이 가능함.
let country2; // ICounties2['KR' | 'US' | 'CN']
country2 = "한국";
console.log(country2);
country2 = "미국";
console.log(country2);
// country2 = "러시아";
// console.log(country2);
// 인덱싱을 통해 개별 값에도 접근이 가능함.
