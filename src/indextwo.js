function getRankedMatches(victories, defeats) {
    return victories - defeats;
}
let result = getRankedMatches(30, 6);
let level = "";

if (result <= 10) {
    level = "Ferro";
} else if (result >= 11 && result <= 20) {
    level = "Bronze";
} else if (result >= 21 && result <= 50) {
    level = "Prata";
} else if (result >= 51 && result <= 80) {
    level = "Ouro";
} else if (result >= 81 && result <= 90) {
    level = "Diamante";
} else if (result >= 91 && result <= 100) {
    level = "Lendário";
} else if (result > 100) {
    level = "Imortal";
}

switch (level) {
    case "Ferro":
    case "Bronze":
    case "Prata":
    case "Ouro":
    case "Diamante":
    case "Lendário":
    case "Imortal":
        console.log("O Herói tem saldo de " + result + " e está no nível " + level);
        break;
    default:
        console.log("Nível desconhecido: " + level);
}
        