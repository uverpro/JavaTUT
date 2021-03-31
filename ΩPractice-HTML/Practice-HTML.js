window.addEventListener('DOMContentLoaded', (event) => {
	console.log('This is my profile page!');

	const body = document.querySelector('body');

	const name = document.createElement('h1');
	const text = document.createTextNode('Joe');

	// name.setAttribute('id', 'name');
	name.appendChild(text);
	body.appendChild(name);

	const list = document.createElement('ul');

	const listItem1 = document.createElement('li');

	list.appendChild(listItem1);
	body.appendChild(list);

	// list of elements
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const detailsArr = [
		'<li>I like to drink iced lattes.</li>',
		'<li>I have two cats and eight kittens.</li>',
		'<li>My favorite place to get lunch is Chipotle.</li>',
		'<li>On the weekends, I play flag football.</li>',
		`<li>I live in SF, CA, and it's currently ${hours}:${minutes}</li>`,
	];

	// formatting elements in array into string
	const liString = detailsArr.join(' ');
	console.log(liString);

	const listEle = document.querySelector('ul');

	// inserting to HTML of list
	listEle.innerHTML = liString;
	body.appendChild(listEle);

	// set classes to style in CSS
	list.setAttribute('class', 'my-details');

	// looping through all list elements, give the class
	const liEle = document.querySelectorAll('li');
	liEle.forEach((ele) => {
		ele.className = 'details';
	});

	name.setAttribute('class', 'my-name');
});
