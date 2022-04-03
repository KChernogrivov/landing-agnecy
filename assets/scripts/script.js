let sliderItems = document.querySelectorAll('.slider-products--item');
itemIsActive = false;

sliderItems.forEach(item => {
    item.addEventListener('click', () => {
        sliderItems.forEach(item => {
            item.classList.remove("slider-products--item-active");
        })
        item.classList.add("slider-products--item-active");
    })
})