function createParagraph(text){
    const p = document.createElement('p')
    p.classList.add('paragraph')
    p.textContent = text;
    return p

}

export default createParagraph 