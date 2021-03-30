window.addEventListener('DOMContentLoaded', (event) => {
	console.log('This is my profile page!');

	const body = document.querySelector('body');

	const name = document.createElement('h1');
	const text = document.createTextNode('Joe');

	name.setAttribute('id', 'name');
	name.appendChild(text);
	body.appendChild(name);

	const list = document.createElement('ul');
	const listItem1 = document.createElement('li');
	const listItem1Content = document.createTextNode(
		'I like to drink iced lattes.'
	);
	listItem1.appendChild(listItem1Content);

	// what we're creating
	list.appendChild(listItem1);

	// show what we're creating
	body.appendChild(list);
});

// let p = document.createElement('p');
// p.innerHTML = 'Hello World!';
// document.appendChild(p);
