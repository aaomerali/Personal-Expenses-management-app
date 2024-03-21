
// The balanc
var totBalanc = document.querySelector(".totalBalance h1");
var totIncome= document.querySelector("#totIncome");
var totExpense= document.querySelector("#totExpense");

// add Transaction
const inpType = document.querySelector("#type");
const inpName= document.querySelector("#name");
const inpAmount= document.querySelector("#amount");
const inpdate= document.querySelector("#date");
const inpBtn= document.querySelector(".submit-btn");

// Transactions
const transItems = document.querySelector(".transactions");
const transName= document.querySelector(".trans-name");
const transAmount= document.querySelectorAll(".trans-amount");
const transDate= document.querySelector(".trans-date");
 
// -----------------
var totalBa = 0;
var totalIn = 0;
var totalEx = 0;



//add item function
function addItem(type, name, amount, date) {

    let x;
    if (type == 'income') {
        x = "+";
    } else {
        x= "-";
    }

    transItems.innerHTML += `<div class="trans-items">

    <h2 class="trans-name">${name}</h2>
    <h2 class="trans-amount">${x}$${amount}</h2>
    <h3 class="trans-date">${date}</h3>

    </div>` ;

    

    /*transAmount.forEach( (Tamount) => {
        
        if (type == 'income') {
            Tamount.classList.add("green");
        } else {
            Tamount.classList.add("red");
        }
    }) */


}


// change the total balacne
function UpdateTotBalance(type, amount){
    

    if (type == 'income') {
        totalBa += amount;
    } else {
        totalBa -= amount;
    }

    totBalanc.style.transform = 'scale(1.2)'; // Reset to original size
    

    setTimeout(function() {
        totBalanc.innerHTML = `$${totalBa}.00` ;
        totBalanc.style.transform = 'scale(1)'; // Reset to original size
    }, 100);
     

}


// change the total income & expense
function updateIncAndExpTotals(type, amount){

    if (type == 'income') {
        totalIn += amount;
        totIncome.innerHTML = `+$${totalIn}.00` ;

    } else {
        totalEx += amount;
        totExpense.innerHTML = `-$${totalEx}.00` ;
    }

}


function CleanFields() {
    inpName.value = "";
    inpAmount.value = "";
    inpdate.value = "";
}


inpBtn.addEventListener('click' , (e) => {

    e.preventDefault()

    addItem(inpType.value, inpName.value, inpAmount.value, inpdate.value)

    UpdateTotBalance(inpType.value, parseInt(inpAmount.value));

    updateIncAndExpTotals(inpType.value, parseInt(inpAmount.value))

    CleanFields();
    

})


