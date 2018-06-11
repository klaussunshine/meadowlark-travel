//fortune.js
var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't hnow.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

exports.getFortune = function() {
    var idx = Math.floor(MAth.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};