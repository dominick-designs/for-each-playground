let listOfThings = ['First Thing', 'Second Thing', 'Third Thing'];

const div = document.createElement('div');
div.setAttribute('id', 'phrase');
div.setAttribute('class', 'section');
let ul = document.createElement('ul');
let li = document.createElement('li');


listOfThings.forEach(function (oneThing) {
    let li = document.createElement('li');
    li.setAttribute('class', 'hide letter');
    li.setAttribute('class', 'space');
    li.innerHTML = oneThing;
    ul.appendChild(li);
    div.appendChild(ul);
    document.body.appendChild(div);
    console.log(oneThing);
});

