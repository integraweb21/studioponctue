document.querySelectorAll('.outer').forEach(el => {
    let content = el.querySelector('.content');

    repeatContent(content, el.offsetWidth);

    let slider = el.querySelector('.loop');
    slider.innerHTML = slider.innerHTML + slider.innerHTML;
});

function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter = 0;
    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}