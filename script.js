document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight Active Section in Navbar
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 60;
        document.querySelectorAll("section").forEach(section => {
            if (section.offsetTop <= scrollPosition && 
                section.offsetTop + section.offsetHeight > scrollPosition) {
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // Contact Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message Sent Successfully!");
        form.reset();
    });
});

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= carousel.children.length) {
            index = 0;
        }
        const offset = -index * 100 + "%";
        carousel.style.transform = `translateX(${offset})`;
    }

    setInterval(moveCarousel, 3000); // Change section every 3 seconds
});

