const input = document.querySelector('#input')
const warning = document.querySelector('.warnings')
const mano = document.querySelector('.mano')
const output = document.querySelector('.output')

input.addEventListener('keyup', (e) => {
    const entrada = e.key
    let value = e.target.value;

    if (entrada == 'Enter') {
        console.log('Enter press: operating...', value);
        if (value.length == 0) {
            console.log('Too Short');
            mostrarWarning()
            return
        }
        convertirBin(value)
    } else if (entrada != 0 && entrada != 1) {
        console.log('invalid data');
        e.target.value = value.slice(0, -1)
        mostrarWarning()
    } else if (value.length >= 8) {
        console.log('Long code: operating...', value);
        convertirBin(value)
    }
})

function mostrarWarning() {
    warning.classList = 'warnings'
    warning.innerHTML = 'Invalid Data'
    setTimeout(() => {
        warning.classList.add('oculto')
    }, 1500);
}

function convertirBin(value) {
    input.disabled = true;
    mano.classList.add('oculto')
    output.classList.remove('oculto')

    const arrayDigits = value.split('').map((el) => +el)

    const conversion = (a, b) => a * 2 + b;
    const resultado = arrayDigits.reduce(conversion, 0)
    
    output.innerHTML = resultado;

    setTimeout(() => {
        input.disabled = false;
        input.value = ''
        mano.classList.remove('oculto')
        output.classList.add('oculto')
    }, 5000);
}
