const input = document.getElementById('name');
const target = document.getElementById('target');
const send = document.getElementById('send');

let arrName = [];
let arrValue = []
let ul = document.createElement('ul');
target.appendChild(ul);
// Додаемо на button (send) подію в якій ми з input беремо дані які вводить користувач та записуємо в нижнє поле(<div id="target">)
// при цьому ми прибираємо пробіли до і після знака =, які вводить користувач і перевіряємо синтаксис
send.addEventListener('click', function (e) {
    e.preventDefault();
    let nameValue = input.value;
    let split = nameValue.split('=');
    let name = split[0].split('=').map(part => part.trimEnd()).join('=');
    let value = split[1].split('=').map(part => part.trimStart()).join('=');
    arrName.push(name);
    arrValue.push(value)

    const li = document.createElement("li");
    // ul.appendChild(li);
    // li.innerText= `${name}=${value}`;
    if (!!name.match(/[a-zA-Z0-9=]+/g) && value.match(/[a-zA-Z0-9=]+/g)) {
        li.innerText = `${name}=${value}`;
        ul.appendChild(li);
    }

});

// Додаемо на button (Sort by Name) подію в якій ми в  поле(<div id="target">) сортуємо дані по возрастанню імені
const buttonSortname = document.getElementById('buttonSortname');
const buttonSortvalue = document.getElementById('buttonSortvalue');
const buttonDelete = document.getElementById('buttonDelete');
buttonSortname.addEventListener("click", function (ev) {
    ev.preventDefault()
    let arrSortNameValue = arrName.map((name, index) => ({name: name, value: arrValue[index]}));

    let arrNameSort = arrSortNameValue.sort((a, b) => a.name.localeCompare(b.name))
    console.log(arrNameSort);
    ul.innerHTML = ''
    for (const item of arrNameSort) {

        let liSort = document.createElement('li');
        ul.appendChild(liSort);
        liSort.innerText = `${item.name}=${item.value}`;
    }
})
// Додаемо на button (Sort by Value) подію в якій ми в  поле(<div id="target">) сортуємо дані по возрастанню Value
buttonSortvalue.addEventListener('click', function (even) {
    even.preventDefault()
    let arrNameValuePair = arrName.map((name, index) => ({name: name, value: arrValue[index]}));
    let objValuePairSort = arrNameValuePair.sort((a, b) => a.value.localeCompare(b.value))
    ul.innerHTML = ''
    for (const item of objValuePairSort) {

        let liSortV = document.createElement('li');
        ul.appendChild(liSortV);
        liSortV.innerText = `${item.name}=${item.value}`;
    }
})
//Додаємо подію на список ul в якому ми очищуємо,змінюємо колір,додаємо текст і class
ul.addEventListener('mousedown', (event) => {
    const li = ul.children
    if (event.target.tagName.toLowerCase() === 'li') {
        const li = event.target;

        if (li.textContent.trim() !== '') {
            li.textContent = '';
            li.classList.add('delete')
        } else {
            li.textContent = 'To delete this line,click the button() ';
            li.style.background = 'red'
        }
    }
});
// Додаемо на button (Delete) подію в якій ми delete li з class delete
buttonDelete.addEventListener('click', function (liDelete) {
    {
        const li = ul.querySelector('li.delete')
        console.log(li)
        if (li) {
            li.remove()
        }
    }
    liDelete(ul)
})