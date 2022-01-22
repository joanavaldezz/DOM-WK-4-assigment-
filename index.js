"use strict"

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    const createdDate =  new Date ();
    const table = document.getElementById('list');
    const row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('couples-last-name').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-wedding-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-rehearse-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
   document.getElementById('couples-;last-name').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
       elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn; 
}