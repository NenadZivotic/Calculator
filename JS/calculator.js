const num1 = () => {
    document.getElementById('calc').value += 1;
}

const num2 = () => {
    document.getElementById('calc').value += 2;
}

const num3 = () => {
    document.getElementById('calc').value += 3;
}

const num4 = () => {
    document.getElementById('calc').value += 4;
}

const num5 = () => {
    document.getElementById('calc').value += 5;
}

const num6 = () => {
    document.getElementById('calc').value += 6;
}

const num7 = () => {
    document.getElementById('calc').value += 7;
}

const num8 = () => {
    document.getElementById('calc').value += 8;
}

const num9 = () => {
    document.getElementById('calc').value += 9;
}

const num0 = () => {
    document.getElementById('calc').value += 0;
}

const plus = () => {
    document.getElementById('calc').value += '+';
}

const minus = () => {
    document.getElementById('calc').value += '-';
}

const multi = () => {
    document.getElementById('calc').value += '*';
}

const divide = () => {
    document.getElementById('calc').value += '/';
}

const rest = () => {
    document.getElementById('calc').value += '%';
}

const comma = () => {
    document.getElementById('calc').value += '.';
}

const ac = () => {
    document.getElementById('calc').value = '';
    document.getElementById('res').value = '';
}

const equal = () => {
    let result = document.getElementById('calc').value;
    document.getElementById('res').value = eval(result)
}