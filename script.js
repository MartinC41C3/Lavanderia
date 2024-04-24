
    window.addEventListener('load', function() {
        
    });


var items = document.querySelectorAll('.car .car-1')

items.forEach((e)=>{
    const slide = 7;
    let next = e.nextElementSibling;

    for (let i = 0; i < slide; i++) {
        if (!next) {
            next = items[0]
        }
        let clonechild = next.cloneNode(true)
        e.appendChild(clonechild.children[0])
        next = next.nextElementSibling
    }
})


