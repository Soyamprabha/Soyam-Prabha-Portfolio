



(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // })


const linkWork = document.querySelectorAll('.work-item')
function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

let mixerPortfolio = mixitup('.portfolios', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
});

let type = new Typed ('.auto-input', {
    strings: ['Web-Developer...', 'UI Designer...', 'Content-Writer...'],
    typeSpeed: 100,
    backSpeed: 65,
    backDelay: 1000,
    loop: true,
})

})();

