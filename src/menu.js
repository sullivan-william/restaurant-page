import { removeAllChildNodes } from "./navbar"

export function buildMenu() {
    const main = document.querySelector('.main')
    const h2 = document.createElement('h2')

    removeAllChildNodes(main)

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

    content.appendChild(main)
}