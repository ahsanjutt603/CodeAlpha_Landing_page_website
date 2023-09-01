tailwind.config = {
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                brightRed: '#F3603C',
                brightRedLight: '#f2604e',
                brightRedSupLight: '#FDECE7',
                darkGrayishBlue: '#6b8693',
                veryDarkBlue: '#040303',
            },
        },
    }
}

const hamburger = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
    menu.classList.toggle('smooth')
})