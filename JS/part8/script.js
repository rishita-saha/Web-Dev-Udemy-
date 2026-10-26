//alert("Connected!")
//example 1
// 
//document.querySelectorAll('button')
let hold = document.getElementById('changeTextButton')
.addEventListener('click',function(){
    let para = document.getElementById("myParagraph") 
    para.textContent = "This paragraph is changed"
    //console.log(para.textContent)   //gives the content 
})
//console.log(hold);

//example 2
document.getElementById("highlightFirstCity").addEventListener('click',()=>{
    let grab = document.getElementById("citiesList")
    //console.log(grab.firstElementChild) //to get the 1st element in the list
    console.log(grab.firstElementChild.classList.add("highlight"))
})  

//example 3
document.getElementById("changeOrder").addEventListener('click',function(){
    let coffee = document.getElementById("coffeeType");
    coffee.textContent = "Espresso";
    coffee.style.backgroundColor = "brown";
    coffee.style.padding = "5px";
    
});


//example 4
document.getElementById("addNewItem").addEventListener('click',() =>{
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)     //appendChild() used to create a new elemnt
})

//example 5
document.getElementById("removeLastTask").addEventListener('click',function(){
    let lt = document.getElementById("taskList");
    //lt.remove();    //to remove whole list
    lt.lastElementChild.remove();   //remove last elemnet
    
})