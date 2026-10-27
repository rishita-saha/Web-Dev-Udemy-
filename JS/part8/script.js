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

//example 6
document.getElementById("clickMeButton").addEventListener(/*'click''mouseover'*/'dblclick',function(){
    alert("Heyyyyy!!!!!!")
})

//example 7
document.getElementById("teaList")
.addEventListener('click',function(event){
    //console.log(event.target)
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: " + event.target.textContent)
    }
})

//example 8
document.getElementById("feedbackForm")
.addEventListener('submit',function(event){
    //alert("Submitted!")
    event.preventDefault();     //block from submit empty
    let fb = document.getElementById("feedbackInput").value;
    console.log(fb.textContent);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${fb}`
})

//example 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent = "DOM is fully loaded"
})


//example 10
document.getElementById("toggleHighlight").addEventListener('click',function(){
    let a = document.getElementById("descriptionText");
    //a.classList.add("highlight");     //add highlight to the text
    a.classList.toggle("highlight");     //toggle highlight when click
    
})