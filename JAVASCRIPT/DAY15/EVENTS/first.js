function handleClick(){
    const element = document.getElementById("first");
    element.textContent = "Strike is Coming Soon"
    element.style.backgroundColor = "red";
   
}

const element = document.getElementById("first");
element.onclick = function handleClick(){
    element.textContent = "Strike is Coming Soon";
    element.style.backgroundColor = "Pink";
}

element.onclick = function handleClick(){
    element.textContent = "I am the Best";
   
}


element.addEventListener('mouseenter',()=>{
    element.textContent = "Strike is coming soon";
})

element.addEventListener('click',()=>{
    element.style.backgroundColor="brown"
})


const element = document.getElementById("child1");

element.addEventListener('click',()=>{
    element.textContent = "Strike is coming soon";
    element.style.backgroundColor = "orange";
})


const element2 = document.getElementById("child2");

element2.addEventListener('click',()=>{
    element2.textContent = "Strike is coming soon";
    element2.style.backgroundColor = "blue";
 })


const element3 = document.getElementById("child3");
element3.addEventListener('click',()=>{
    element3.textContent = "Strike is coming soon";
    element3.style.backgroundColor = "red";
})

const element4 = document.getElementById("child4");
element4.addEventListener('click',()=>{
    element4.textContent = "Strike is coming soon";
    element4.style.backgroundColor = "green";
})


const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
    e.target.textContent = "I am Clicked";
    parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick);




for(let child of parent.children){
    console.log(child);
    child.addEventListener('click',()=>{
        child.textContent = "I am Clicked";
    })
}


const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    // grandparent.style.backgroundColor = "orange"
    // console.log("grandparent is clicked")
    console.log(e.target);
},true)

const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log("Parent is clicked")
},true)


const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    // console.log(e);
    // e.stopPropagation();
    // console.log("child is clicked")
})


//Capture phase on hai: top se down aaoge: us time pe event ko trigger kar diya jayega(Capture Phase upar se niche aayega)
//Capture phase off hai: Event hai usko down to up(bubbling phase bolye hai , tab trigger kar diya jayega)(bubbling Phase nicche se uper jata hai)