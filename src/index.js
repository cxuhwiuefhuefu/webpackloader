import data from './foo.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = data.note.body;
    console.log(data);
    return element;
}

document.body.appendChild(component());