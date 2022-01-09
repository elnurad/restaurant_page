import createAbout from './about'
function component() {
    const element = document.createElement('div');
    element.appendChild(createAbout())
    return element;
}

function loadWebsite() {
    document.body.appendChild(component());

}


export default loadWebsite;