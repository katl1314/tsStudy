interface IFullName {
    firstName: string;
    lastName: string;
}

/**
 * 구성 시그니처
 */
interface IFullNameConstructor {
    new (firstName: string, agentCode?: number): IFullName;
}

function makeSon(
    o: IFullNameConstructor,
    firstName: string,
    agentCode?: number
) {
    // agentCode가 undefined이면
    if (typeof agentCode === "undefined") {
        return new o(firstName);
    }
    return new o(firstName, agentCode);
}

class Aderson implements IFullName {
    constructor(public firstName: string) {
        this.lastName = "Aderson";
    }
    public lastName: string;
}

const tomas = makeSon(Aderson, "Tomas");
const jack = makeSon(Aderson, "Jack");
console.log(tomas);
console.log(jack);

class Smith implements IFullName {
    constructor(public firstName: string, private agentCode: number) {
        this.lastName = "Smith";
        this.agentCode = agentCode;
    }
    lastName: string;
}

const smith = makeSon(Smith, "Tomas", 7);
console.log(smith);
