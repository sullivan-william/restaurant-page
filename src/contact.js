import { removeAllChildNodes } from "./navbar"

export function buildContactPage() {
    const main = document.querySelector('.main')
    const h2 = document.createElement('h2')
    const h4 = document.createElement('h4')
    const emailh4 = document.createElement('h4')

    removeAllChildNodes(main)

    h2.textContent = "Contact Us"
    main.appendChild(h2)

    content.appendChild(main)

    h4.textContent = "Random Phone: xxx-xxx-xxxx"
    emailh4.textContent = "Random E-mail: random@whoknows.com"

    main.appendChild(h4)
    main.appendChild(emailh4)
} 