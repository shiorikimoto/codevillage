const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');



addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
    const newItem = document.createElement('li');
    var img = document.createElement('img');
    newItem.appendChild(img);
    const newSpan = document.createElement('span');
    newItem.appendChild(newSpan);
    img.setAttribute('src', "http://placehold.it/64x64");
    img.setAttribute('alt',　'アイテム１')
    newSpan.textContent = 'アイテム' + (list.children.length + 1);
    list.appendChild(newItem);
});


removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
    let i = 0;
    if (i < list.children.length) {
        list.removeChild(list.lastElementChild);
    }

});


