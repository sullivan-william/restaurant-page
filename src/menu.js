export function buildMenu() {
    const header = document.createElement('header')
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
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

    h2.textContent = "Menu"
    main.appendChild(h2)

    const menuUl = document.createElement('ul')

    const menu = [
        {
            name: "Coffee & Tea",
            price: 4
        },
        {
            name: "Breakfast Burrito",
            price: 10
        },
        {
            name: "Random Menu Item",
            price: 80
        }
    ]

    menu.forEach(item => {
        let li = document.createElement('li')
        li.textContent = `${item.name} - $${item.price}`
        menuUl.appendChild(li)
    })

    menuUl.classList.add('menu')
    main.appendChild(menuUl)
}