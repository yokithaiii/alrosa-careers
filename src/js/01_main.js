// services open detail from asper
const careersAccordionBtn = document.querySelectorAll(".l-careers__accordion--btn");

careersAccordionBtn.forEach((el) => {
    el.addEventListener("click", openFadeDetail1);
});

function openFadeDetail1(el) {
    let btnTarget = el.currentTarget;
    btnTarget.parentElement.classList.toggle("l-active");
    btnTarget.parentElement.children[1].classList.toggle("l-active");
}