//Select the section with an id of container without using querySelector.
const a = document.getElementById("container");
console.log(a);

//Select the section with an id of container using querySelector.
let b = document.querySelector("#container");
console.log(b);

//Select all of the list items with a class of "second".
let c = document.getElementsByClassName("second");
console.log(c);

//Select a list item with a class of third, but only the list item inside of the ol tag.

const d = document.querySelector("ol li.third");
console.log(d);

//Give the section with an id of container the text "Hello!".
const container = document.body;
container.innerHTML += "Hello!";

//Add the class main to the div with a class of footer.
let f = document.querySelector(".footer");
let main = document.createElement("div");
main.setAttribute("class", "main");
f.appendChild(main);

//Remove the class main on the div with a class of footer.
f.removeChild(main);

//Create a new li element.
let w = document.body;
let li = document.createElement("li");
li.setAttribute("li", "newLi");
w.appendChild(li);

//Give the li the text "four".
li.innerHTML = "four";

//Append the li to the ul element.
const ul = document.querySelector("ul");
ul.appendChild(li);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
const m = document.querySelector("ol").querySelectorAll("li");

for (let i = 0; i < m.length; i++) {
  m[i].style.backgroundColor = "green";
}

//Remove the div with a class of footer
document.body.removeChild(f);
