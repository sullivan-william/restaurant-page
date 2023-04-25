export function buildContactPage() {
    const header = document.createElement('header')
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const h4 = document.createElement('h4')
    const emailh4 = document.createElement('h4')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const menuLi = document.createElement('li')
    const contactLi = document.createElement('li')

    const content = document.querySelector('#content')
    content.appendChild(header)
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

    h2.textContent = "Contact Us"
    main.appendChild(h2)

    h4.textContent = "Random Phone: xxx-xxx-xxxx"
    emailh4.textContent = "Random E-mail: random@whoknows.com"

    main.appendChild(h4)
    main.appendChild(emailh4)
} 