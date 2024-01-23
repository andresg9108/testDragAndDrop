const oListById1 = document.getElementById('list1');
const oListById2 = document.getElementById('list2');
const oGeneralConfiguration = {
	animation: 150, 
	chosenClass: 'item-selected', 
	ghostClass: 'item-ghost', 
	dragClass: 'item-drag', 
	/*
	store: {
		get: (sortable) => {
			let order = localStorage.getItem(sortable.options.group.name);

			return order ? order.split('|') : [];
		}, 
		set: (sortable) => {
			let order = sortable.toArray();

			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
	},
	*/
}

const oList1 = new Sortable(oListById1, {
	...oGeneralConfiguration, 
	group: {
        name: 'my-sortable', 
        // pull: 'clone', 
        // put: false 
    }, 
    // handle: '.handle', 
    // filter: '.filtered', 
    // sort: false 
});
const oList2 = new Sortable(oListById2, {
	...oGeneralConfiguration, 
	group: 'my-sortable' 
});

oList1.options.onEnd = (event) => {
	console.log(event.item);
	console.log('END');

	// event.to.classList.add('highlighted-group');
	// event.from.classList.remove('highlighted-group');
}
oList2.options.onEnd = (event) => {
	console.log(event.item);
	console.log('END');
}
/*
EVENTOS:

1- onChoose - Se dispara cuando un elemento se elige para ser arrastrado.
2- onStart - Se dispara cuando se inicia el arrastre de un elemento.
3- onEnd - Se dispara cuando se completa el arrastre de un elemento, ya sea que se haya soltado o cancelado.
4- onAdd - Se dispara cuando un elemento se agrega a un grupo diferente.
5- onUpdate - Se dispara cuando la posición de un elemento se actualiza durante un arrastre.
6- onSort - Se dispara cuando se realiza un cambio en el orden de los elementos en un grupo.
7- onRemove - Se dispara cuando un elemento se elimina de un grupo.
8- onFilter - Se dispara cuando se intenta arrastrar un elemento, pero se filtra mediante una función de filtro.
9- onClone - Se dispara cuando se clona un elemento durante un arrastre.
10- onMove - Se dispara en el momento que estás a punto de soltar un elemento.
*/