let itemlist = document.querySelector("#items");
console.log(itemlist.parentNode);
itemlist.parentNode.style.background = "lightgrey";
console.log(itemlist.parentNode.parentNode);
itemlist.parentNode.parentNode.style.background = "black";
// parentelement is same as parent Node
console.log(itemlist.childNodes);
// child node also add the empty space i.e line break
// therefore best soln is to use children
console.log(itemlist.children);
itemlist.children[1].style.color = "red";
//firstchild
console.log(itemlist.firstChild);
//firstelement child
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "1st";
//similar for lastElementchild
//nextelementsibling
console.log(itemlist.nextElementSibling);
//previouselement sibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = "yellow";


// create a element
//div
let newdiv = document.createElement("div");

//add class id att
newdiv.className = "heyyy";
newdiv.id = "1";
newdiv.setAttribute("title","hjh ");
let newdivtext  = document.createTextNode("hello world");
newdiv.appendChild(newdivtext);
console.log(newdiv);
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newdiv, h1);