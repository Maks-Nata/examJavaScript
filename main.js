const input = document.getElementById('name');
const target = document.getElementById('target');
const send = document.getElementById('send');

let arrName =[];
let arrValue=[]
let ul = document.createElement('ul');
target.appendChild(ul);
send.addEventListener('click', function (e) {
    e.preventDefault();
    let nameValue = input.value;
    let split=nameValue.split('=');
    let name=split[0].split('=').map(part => part.trimEnd()).join('=');
    let value=split[1].split('=').map(part => part.trimStart()).join('=');
    arrName.push(name);
    arrValue.push(value)

    const li= document.createElement("li");
    // ul.appendChild(li);
    // li.innerText= `${name}=${value}`;
    if (!!name.match(/[a-zA-Z0-9=]+/g) && value.match(/[a-zA-Z0-9=]+/g)) {
        li.innerText = `${name}=${value}`;
        ul.appendChild(li);
    }

});



const buttonSortname=document.getElementById('buttonSortname');
const buttonSortvalue=document.getElementById('buttonSortvalue');
const buttonDelete=document.getElementById('buttonDelete');
buttonSortname.addEventListener("click", function (ev) {
    ev.preventDefault()
    let arrSortNameValue = arrName.map((name, index) => ({name: name, value: arrValue[index]}));

    let arrNameSort = arrSortNameValue.sort((a,b)=>a.name.localeCompare(b.name))
    console.log(arrNameSort);
    ul.innerHTML = ''
    for (const item of arrNameSort) {

        let liSort = document.createElement('li');
        ul.appendChild(liSort);
        liSort.innerText =`${item.name}=${item.value}` ;
    }
})
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
ul.addEventListener('mousedown', (event) => {
    const li = ul.children
    if (event.target.tagName.toLowerCase() === 'li') {
        const li = event.target;

        if (li.textContent.trim() !== '') {
            li.textContent = '';
            li.classList.add('delete')
        } else {
            li.textContent = 'To delete this line,click the delight button bellow';
            li.style.background = 'red'
        }
    }
});
buttonDelete.addEventListener('click', function (liDelete) {
    function liDelete(list) {
        const li = ul.querySelector('li.delete')
        console.log(li)
        if (li) {
            li.remove()
        }
    }
    liDelete(ul)
})