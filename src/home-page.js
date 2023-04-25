import { removeAllChildNodes } from "./navbar"

export function buildHomePage() {
    const main = document.querySelector('.main')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    removeAllChildNodes(main)

    h2.textContent = "About Us"
    p.textContent = "lorem ipsum fjoipwa ojpowjefpo jmpowfepo pojopwf opjopjwf opjopwje opjopjwef pojopwefjpo pjopjwfeopjpo opjopjfweop jpojopjjpo jopwjfopjop awoiefjp jpwajopgwj awefeowpk"
    main.appendChild(h2)
    main.appendChild(p)

    content.appendChild(main)
}