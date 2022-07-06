var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    /**
     * @param colorName : 혼합된 색상 이름
     * @returns
     */
    function mixColor(colorName) {
        if (colorName === "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName === "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName === "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName === "cyan") {
            return Color.green + Color.blue;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
const yellowColor = Color.mixColor("yellow"); // Color.Red + Color.Green = 1 + 2
console.log(yellowColor);
