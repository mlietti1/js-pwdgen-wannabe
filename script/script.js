const anno = 22
const nomeUtente = prompt("What's your name?");
const cognomeUtente = prompt("Hi " + nomeUtente + ", what's your last name?");
const coloreUtente = prompt("Now tell me, what's your favorite color?");
const pwdUtente = nomeUtente + cognomeUtente + coloreUtente + anno;

document.getElementById('pwd').innerHTML += `
    Here's your Password: <br>
    ${pwdUtente}
`;