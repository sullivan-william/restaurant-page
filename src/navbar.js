import { buildHomePage } from "./home-page";
import { buildMenu } from "./menu";
import { buildContactPage } from "./contact";

export function navbar() {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const menuLi = document.createElement('li')
    const contactLi = document.createElement('li')
    const main = document.createElement('main')

    const content = document.querySelector('#content')
    content.appendChild(header)
    main.classList.add('main')
    content.appendChild(main)

    h1.textContent = "Random Restaurant"
    header.appendChild(h1)

    header.appendChild(nav)
    nav.appendChild(ul)
    li.textContent = "Home"
    menuLi.textContent = "Menu"
    contactLi.textContent = "Contact"
    ul.appendChild(li)
    ul.appendChild(menuLi)
    ul.appendChild(contactLi)

    li.addEventListener('click', (e) => {
        buildHomePage()
    })

    menuLi.addEventListener('click', (e) => {
        buildMenu()
    })

    contactLi.addEventListener('click', (e) => {
        buildContactPage()
    })
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
