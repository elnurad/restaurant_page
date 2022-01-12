function createH3(text){
    const h3 = document.createElement('h3')
    h3.classList.add('h3')
    h3.textContent = text;
    return h3
}

export default createH3