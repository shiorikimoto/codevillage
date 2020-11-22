const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');



addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
    const newItem = document.createElement('li')
    list.appendChild(newItem)
    newItem.textContent = 'アイテム' + (list.children.length)
});


removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
    let i = 0
    if (i < list.children.length) {
        list.removeChild(list.lastElementChild)
    }

});