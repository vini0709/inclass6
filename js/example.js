// ADD NEW ITEM TO END OF LIST
lists = document.getElementsByTagName('ul');
newItem1 = document.createElement('li');
node1 = document.createTextNode('cream');
newItem1.appendChild(node1);
lists[0].appendChild(newItem1);

// ADD NEW ITEM START OF LIST
newItem2 = document.createElement('li');
node2 = document.createTextNode('kale');
newItem2.appendChild(node2);
lists[0].insertBefore(newItem2, lists[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
list = document.getElementsByTagName('li');
for (let i=0; i<list.length; i++) {
    list[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
heading = document.getElementsByTagName('h2')[0];
newItem3 = document.createElement('span');
node3 = document.createTextNode(list.length);
newItem3.appendChild(node3);
heading.appendChild(newItem3);
