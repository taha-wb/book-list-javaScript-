// deleting a book 

const list = document.getElementsByTagName("ul");

list[0].addEventListener('click',function(e){
if(e.target.className == 'deleteBtn'){
  const li = e.target.parentElement ;
  list[0].removeChild(li);
}
});

// adding an element

const addForm = document.getElementById("add-bar");
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = document.getElementById("add-input").value ;
  const newLi = document.createElement("li");
  const newBtn = document.createElement("button");
  
  newLi.textContent = value ;
  newLi.className = 'book';
  newBtn.textContent = 'delete';
  newBtn.className = 'deleteBtn';
  newLi.appendChild(newBtn);
  list[0].appendChild(newLi);
  

 
})

// searching for a book 

const searchValue = document.getElementById("search-input");
const books = list[0].getElementsByTagName("li");
searchValue.addEventListener('keyup', e => {
  e.preventDefault();
 const term = e.target.value.toLowerCase() ;
 
 Array.from(books).forEach(li => {
   if(li.textContent.toLowerCase().indexOf(term) != -1 ){
     li.style.display = 'initial' ;

   }
   else{
     li.style.display = 'none' ;
   }
 })
})

// hide list checkbox 

const hideBox = document.getElementById("hide");

hideBox.addEventListener('change' , e => {
  if(hideBox.checked){
    list[0].style.display = 'none';
  }
  else{
    list[0].style.display = 'initial';
  }
})

// adding navigations tabs 

const tabs = document.getElementById("tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener('click' , e => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach(function(panel) {
      if(panel == targetPanel){
        panel.classList.add("active");
      }
      else{
        panel.classList.remove("active");
      }
    })
  }
})


