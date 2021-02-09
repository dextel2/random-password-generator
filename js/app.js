const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () => {
    const symbols = '!@#$%^&*_.?'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    if (length <= 4) {
        document.getElementById("strength").innerHTML = "Password Strength: Very bad";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.remove("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length > 4 && length < 8) {
        document.getElementById("strength").innerHTML = "Password Strength: Weak";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.remove("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Weak');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != false && hasSymbol != false && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Excellent";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.add("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Excellent');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != false && hasSymbol != false && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Very Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Very_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != false && hasSymbol != true && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != true && hasSymbol != false && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Very Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Very_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != false && hasSymbol != false && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Very Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Very_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != false && hasSymbol != true && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != true && hasSymbol != true && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != true && hasSymbol != false && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Very Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != true && hasSymbol != false && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Very Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != false && hasSymbol != true && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Moderate');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != false && hasSymbol != false && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Very Good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.add("orangeyellow");
        document.getElementById("strengthgood").classList.add("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Very_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != true && hasSymbol != true && hasLower != false) {
        document.getElementById("strength").innerHTML = "Password Strength: Not good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.remove("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Not_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != true && hasSymbol != false && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Not good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.remove("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Not_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != false && hasSymbol != true && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Not good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.remove("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Not_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != false && hasNumber != true && hasSymbol != true && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: Not good";
        document.getElementById("strengthlow").classList.add("redorange");
        document.getElementById("strengthmedium").classList.remove("orangeyellow");
        document.getElementById("strengthgood").classList.remove("yellowlightgreen");
        document.getElementById("strengthexcellent").classList.remove("lightgreentogreen");
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('Not_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
        document.getElementById("strength").classList.remove('NA');
    }
    else if (length >= 8 && hasUpper != true && hasNumber != true && hasSymbol != true && hasLower != true) {
        document.getElementById("strength").innerHTML = "Password Strength: --";
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
        document.getElementById("strength").classList.add('NA');
        document.getElementById("strength").classList.remove('Not_Good');
        document.getElementById("strength").classList.remove('Very_Bad');
        document.getElementById("strength").classList.remove('Weak');
        document.getElementById("strength").classList.remove('Moderate');
        document.getElementById("strength").classList.remove('Good');
        document.getElementById("strength").classList.remove('Very_Good');
        document.getElementById("strength").classList.remove('Excellent');
    }
})
const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

let toggler = document.getElementById("toggler");
toggler.addEventListener("click", () => {
  let toggle_white_button = document.getElementById("round");
  let icon_toggle_moon = document.querySelector(".moon");
  let icon_toggle_sun = document.querySelector(".sun");
  let body = document.querySelector("body");
  let main_container = document.querySelector(".container");
  let main_heading = document.querySelector("h2");
  let label1 = document.querySelector('.label1');
  let label2 = document.querySelector('.label2');
  let label3 = document.querySelector('.label3');
  let label4 = document.querySelector('.label4');
  let label5 = document.querySelector('.label5');

  toggle_white_button.classList.toggle('toggle');
  icon_toggle_moon.classList.toggle('show');
  icon_toggle_sun.classList.toggle('hide');
  body.classList.toggle('dark_mode');
  main_container.classList.toggle('dark');
  main_heading.classList.toggle('dark_text');
  label1.classList.toggle('dark_text_for_label');
  label2.classList.toggle('dark_text_for_label');
  label3.classList.toggle('dark_text_for_label');
  label4.classList.toggle('dark_text_for_label');
  label5.classList.toggle('dark_text_for_label');
});
