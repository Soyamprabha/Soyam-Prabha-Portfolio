// let type = new Typed ('.auto-input', {
//     strings: ['Web-Developer...', 'UI Designer...', 'Content-Writer...'],
//     typeSpeed: 100,
//     backSpeed: 65,
//     backDelay: 1000,
//     loop: true,
// })

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

})();

