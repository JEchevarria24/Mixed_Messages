const lightsaberElements = {
    emitter: ["Eno Cordova", "Power and Control", "Peace and Justice", "Valor and Wisdom", "Element nature"],
    switch: ["Eno Cordova", "Power and Control", "Peace and Justice", "Valor and Wisdom", "Element nature"],
    Kyber: ["Purple", "Orange", "Red", "Blue", "Cyan", "Yellow", "Green"]
}
let selection = [];
let randomSelect = arrayLenght => {
    return Math.floor(Math.random() * arrayLenght);
}

for (let element in lightsaberElements) {
    let randomIndex = randomSelect(lightsaberElements[element].length)
    switch (element) {
        case "emitter":
            selection.push(`The lightsaber you build has the ${lightsaberElements[element][randomIndex]} emmitter`); break;
        case "switch":
            selection.push(`and the switch ${lightsaberElements[element][randomIndex]},`); break;
        case "Kyber":
            selection.push(`The ${lightsaberElements[element][randomIndex]} kyber has chossen you.`); break;
        default:
            break;
    }
}


console.log(selection.join(" "));