const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming soon";
newElement.id = "second";

// select element
const element = document.getElementById("first");
  element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Birthday aa raha hai";
newElement2.id = "third";
// newElement2.className = "diwali";
// newElement2.className += "holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
// newElement2.classList.remove("diwali");

newElement2.style.backgroundColor = "orange";
newElement2.style.fontSize = "50px";
newElement2.setAttribute("hello","Ji");


element.before(newElement2);
console.log(newElement2.getAttribute("hello"));


// before after 



// const list = document.createElement("li");
// list.textContent = "Milk";

// const list1 = document.createElement("li");
// list1.textContent = "Cake";

// const list2 = document.createElement("li");
// list2.textContent = "Halwa";

// const list3 = document.createElement("li");
// list3.textContent = "Paneer";

// const underElement = document.getElementById("listing");


// underElement.append(list);
// underElement.append(list1);
// underElement.append(list2);
// underElement.append(list3);

// underElement.append(list,list1,list2);
// underElement.prepend(list3);


const arr = ["Milk","Cake","Halwa","Paneer","Tea"];

const underElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();
//array

for(let food of arr){
  const list = document.createElement("li");
  list.textContent = food;
  fragment.append(list);

}

underElement.append(fragment);


const s1 = document.getElementById("first");
s1.remove();


const month = document.getElementById("ten");


const lister = document.createElement("li");
// lister.textContent = "Help";

lister.innerHTML = "<h2>Help<h2>";

month.append(lister);
// month.insertAdjacentElement("afterend",lister);
