//in the making
let date = document.getElementById('date'); // 
let nam = document.getElementById('name'); //   these are all normal inputs
let amount = document.getElementById('amount'); //



let table = document.getElementById('tabli')

function getVal(){
    let newdate = date.value;
    let newname = nam.value;
    let newamount = amount.value;
    
    if(!newdate || !newname || !newamount) return alert('Please enter all values.')
    if(isNaN(newamount)) return alert('Your amount should be a number')
    if(!isNaN(newname)) return alert('Your name shouldnt be a number')
    
    return [newdate, newname, newamount]
}

function updateTable(arr){
    let row = table.insertRow(1);
    let celld = row.insertCell(0);
    let celln = row.insertCell(1);
    let cella = row.insertCell(2);
    celld.innerHTML = arr[0];
    celln.innerHTML = arr[1];
    cella.innerHTML = arr[2];
}


let input = document.getElementById('inputbutton');

input.addEventListener("click", () => {
    updateTable(getVal());
    Array.from(document.getElementsByClassName("addexpense"), elem => elem.value = "")
})