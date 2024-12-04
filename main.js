
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
     const cleaned= nameValue.trim().split(/\s+/).join('')
     let split=cleaned.split('=');
     let name=split[0];
     let value=split[1];
     arrName.push(name);
      arrValue.push(value)

     const li= document.createElement("li");
     ul.appendChild(li);
     li.innerText= `${name}=${value}`;

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




