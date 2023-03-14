const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----."
};

function encrypt() {
    const plaintext = document.getElementById("plaintext").value.toUpperCase();
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext.charAt(i);
    if (morseCode[char]) {
        ciphertext += morseCode[char] + " ";
    } else if (char === " ") {
        ciphertext += "/ ";
    }
    }
    document.getElementById("ciphertext").value = ciphertext.trim();
}