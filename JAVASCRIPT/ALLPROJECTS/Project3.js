const form = document.querySelector("form");
const result = document.querySelector("h2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const boy = document.getElementById("Boy").value.trim();
    const girl = document.getElementById("Girl").value.trim();

    const l1 = Boy.value.length;
    const l2 = Girl.value.length;

    const result = Math.pow(l1+l2,3)%101;

    document.querySelector('h2').textContent =  `Result: ${result}%`;
    form.reset();
});