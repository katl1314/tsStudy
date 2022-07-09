function makeSon(o, firstName, agentCode) {
    // agentCode가 undefined이면
    if (typeof agentCode === "undefined") {
        return new o(firstName);
    }
    return new o(firstName, agentCode);
}
class Aderson {
    constructor(firstName) {
        this.firstName = firstName;
        this.lastName = "Aderson";
    }
}
const tomas = makeSon(Aderson, "Tomas");
const jack = makeSon(Aderson, "Jack");
console.log(tomas);
console.log(jack);
class Smith {
    constructor(firstName, agentCode) {
        this.firstName = firstName;
        this.agentCode = agentCode;
        this.lastName = "Smith";
        this.agentCode = agentCode;
    }
}
const smith = makeSon(Smith, "Tomas", 7);
console.log(smith);
