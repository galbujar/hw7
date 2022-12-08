const main = document.querySelector("main");

const Foo = document.querySelector("#F");
Foo.addEventListener("click", function() {
        const F = document.createElement('h3');
        F.textContent = "Foo";
        main.appendChild(F);
    })

const Bar = document.querySelector("#B");
Bar.addEventListener("click", function() {
        const B = document.createElement('h3');
        B.textContent = "Bar";
        main.appendChild(B);
    })

const fooBar = document.querySelector("#FB");
fooBar.addEventListener("click", function() {
        const fB = document.createElement('h2');
        fB.textContent = "Foobar";
        main.appendChild(fB);
    })