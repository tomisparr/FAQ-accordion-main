const content1 = document.body.querySelector('#contenz');
const content2 = document.body.querySelector('#content');
const display = document.body.querySelector('#display');

content2.addEventListener("click", () => {
    display.textContent = `Frontend Mentor offers realistic coding challenge to help developers
    improve their frontend coding skill with project in HTML,CSS, and
    JavaScript. it's suitable for all levels and for portfolio building.`

    content2.className = "hide"
    content1.className = ``

})

content1.addEventListener('click', () => {
    display.textContent = ``

    content1.className = `hide`
    content2.className = ` `

})

const content3 = document.body.querySelector("#context");
const content4 = document.body.querySelector("#contents");
const show = document.body.querySelector("#show");

content4.addEventListener("click", () => {
    show.textContent =`Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`

    content4.className = "hide"
    content3.className = ``
})

content3.addEventListener("click" ,() => {

    show.textContent=``

    content3.className = `hide`
    content4.className = ``

})

const content5 = document.body.querySelector("#minus");
const content6 = document.body.querySelector("#plus");
const view = document.body.querySelector("#view");

content6.addEventListener("click", () => {
    view.textContent = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! `


    content6.className ="hide"
    content5.className = ``
})

content5.addEventListener("click", () =>{
    view.textContent =``

    content5.className =`hide`
    content6.className = ``
})

const text1 = document.body.querySelector("#ply");
const text2 = document.body.querySelector("#mini");
const see = document.body.querySelector("#see");

text1.addEventListener("click", () =>{

    see.textContent = `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`

    text1.className =`hide`
    text2.className = ``
})

text2.addEventListener("click", () => {

    see.textContent =``

    text2.className = `hide`
    text1.className = ``
    
})