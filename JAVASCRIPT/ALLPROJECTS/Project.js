const parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {

   const child = e.target;
    const body = document.querySelector("body")

    document.body.style.backgroundColor = e.target.id;
});

