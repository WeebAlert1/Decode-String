// Write your code below this line

function decodeString(code) {
    let decipher = Number(code[0])

    let soulution = ""

    for (let i = 1; i < code.length; i++) {
        let strValue = code[i].charCodeAt() + decipher

        soulution += String.fromCharCode(strValue)
    }

    return soulution
}

console.log(decodeString("2fcjjm"))