var todoItems = document.querySelectorAll('li');
if (todoItems) {
  todoItems.forEach(function(item) {
    checkTodoItem(item);
  })
}

var deleteIcons = document.querySelectorAll(".close");
if(deleteIcons) {
  deleteIcons.forEach(function(close) {
    deleteItem(close);
  })
}

var addItem = document.querySelector("#addBtn");
if(addItem) {
  addItem.addEventListener("click", 
  function() {
    addNewTodoItem();
  })
}

function deleteItem(close) {
  close.addEventListener("click", function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  )
}

// Add a "checked" symbol when clicking on a list item
function checkTodoItem(item) {
  item.addEventListener("click", function() {
    console.log(item);
    item.classList.toggle("checked");
  })
}


// Create a new list item when clicking on the "Add" button
function addNewTodoItem() {
  var li = document.createElement("li");
  var inputValue = document.querySelector("#myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue !== "") {
    document.querySelector("#myUL").appendChild(li);
  }
  document.querySelector("#myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  deleteItem(span);
  checkTodoItem(li);
}
