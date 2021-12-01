var listBox = document.getElementById("list") 

function addTodo() {
   var input = document.getElementById("inp")
//    console.log(input.value)

   if (input.value.length >= 3) {
       //    create li 
var li = document.createElement("li");
var liText = document.createTextNode(input.value)

li.appendChild(liText)
li.classList.add("sList"); 


// console.log(li)
list.appendChild(li)
// list.classList.add(""); 
input.value = "" 
// console.log(listBox)

// add delete and edit button

// edit 

var editBTN = document.createElement("button")
editBTN.innerHTML = "<i class='fas fa-pen-square'></i>"
editBTN.classList.add("myBtn1")
// var editBtnText = document.createTextNode("edit")
editBTN.setAttribute("onclick","editBtn(this)")
// editBTN.appendChild(editBtnText)
editBTN.classList.add("editBTn"); 
li.appendChild(editBTN)


// delete 
var delBTN = document.createElement("button");
delBTN.innerHTML = "<i class='fas fa-minus-circle'></i>"
// var delBtnText = document.createTextNode("delete");
delBTN.setAttribute("onclick","deleteBtn(this)")
delBTN.classList.add("myBtn2")
// delBTN.appendChild(delBtnText)
// console.log(delBTN)
delBTN.classList.add("delBTn"); 
li.appendChild(delBTN)
   } else {
       alert("please Enter 3 or more than 3 value")
   }



}

function deleteBtn(e) {
    e.parentNode.remove()
}


function editBtn(e) {
    var liText = e.parentNode.firstChild.nodeValue
    var editLiText = prompt("Edit your work", liText)
    // console.log(liText)
    e.parentNode.firstChild.nodeValue = editLiText

}
function delallTodo() {
    listBox.innerHTML = ""
}
