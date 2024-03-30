const main = document.getElementById('main');
const todayDate = document.getElementById('todayDate');
const form = document.getElementById('form');
const table = document.getElementById('table');


var formValue;
let newItems = 1;
todayDate.textContent = dayjs().format('D MMMM, YYYY')

form.addEventListener('submit', function(event){

    event.preventDefault();

    formValue = document.getElementById('inputValue').value;
    let upperValue = formValue.charAt(0).toUpperCase() + formValue.slice(1);
    
    addTable(upperValue);
    if(newItems>5){
        main.style.height = 600;
    }


});

function addTable(formValue){
    newItems++;
 
    const newTable = document.createElement('tr');
    newTable.innerHTML = `
    <td id="tableRow">${formValue}</td>
    <td >
      <button type="submit" class="dBtn">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </td>
    `   
    table.appendChild(newTable);

    const dBtn = newTable.querySelector('.dBtn');
    dBtn.addEventListener('click', function(){
        table.removeChild(newTable);
    });
}


