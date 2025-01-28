window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
  });

// Function to adjust sections dynamically to start after the header
function adjustSections() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.marginTop = `${headerHeight}px`; // Ensure sections start below the header
    });
}

const starsContainer = document.getElementById('starsContainer');

// Function to generate random stars
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize star's properties
    const randomX = Math.random() * 140; // Random X position
    const randomY = Math.random() * 30; // Random Y position
    const randomDuration = Math.random() * 3 + 6; // Random duration for falling (6s to 9s)

    // Set the inline styles based on random values
    star.style.top = `${randomY}vh`;
    star.style.left = `${randomX}vw`;
    star.style.animationDuration = `${randomDuration}s`;

    starsContainer.appendChild(star);

    // Remove the star after the animation ends
    setTimeout(() => {
        star.remove();
    }, randomDuration * 1000);
}

// Generate stars at regular intervals
setInterval(createShootingStar, 500);

// Generate stars initially (in case the user doesn't scroll immediately)
window.addEventListener('scroll', () => {
});


// Portfolio js
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=() =>{

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// Smooth scroll to sections, accounting for the header height
function smoothScrollToSection(event) {
    event.preventDefault(); // Prevent default anchor click behavior

    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    // Get the target section from the clicked link
    const targetId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        // Scroll to the section minus the header height
        const targetPosition = targetSection.offsetTop - headerHeight;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;

        // Adjust this duration for faster or slower scrolling
        const duration = 400; // Duration in milliseconds (shorter = faster)
        let startTime = null;

        function animationScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Clamp progress to 1

            // Ease-in-out cubic function for smoother scrolling
            const ease = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animationScroll);
            } else {
                // Update the URL to reflect the section once scrolling is complete
                history.pushState(null, null, `#${targetId}`);
            }
        }

        requestAnimationFrame(animationScroll);
    }
}

// Function to toggle the menu on small screens (hamburger menu)
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Function to hide/show navbar based on scroll position
function handleNavbarVisibility() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    // Determine if we're at the top of the page or inside a section
    let inSection = false;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            inSection = true;
        }
    });

    if (inSection) {
        navbar.classList.add('hide-navbar'); // Add a class to hide the navbar
    } else {
        navbar.classList.remove('hide-navbar'); // Remove the class to show the navbar
    }
}

// Initialize all functions after the page loads
document.addEventListener('DOMContentLoaded', () => {
    adjustSections(); // Adjust the sections' margin on page load

    // Add event listener for smooth scroll to section
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });

    // Toggle the menu when the hamburger icon is clicked
    document.getElementById('menu-icon').addEventListener('click', toggleMenu);

    // Monitor scroll and adjust navbar visibility
    window.addEventListener('scroll', handleNavbarVisibility);
});


// Highlight active section in navigation and add animations
function highlightSectionOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            const offset = sec.offsetTop - header.offsetHeight - 100; // Adjust scroll position for activation
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            // Highlight navigation link for the current section
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.navbar a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
}

// Attach event listeners for smooth scrolling on navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', smoothScrollToSection);
});


// Save and restore scroll position
function manageScrollPosition() {
    // Save the scroll position before unloading the page
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollPosition', window.scrollY);
    });

    // Restore the scroll position on page load
    window.addEventListener('load', () => {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
        }
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    adjustSections();
    highlightSectionOnScroll();
    manageScrollPosition();

    // Attach smooth scroll to all nav links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
});


// ContactSection

document.addEventListener("DOMContentLoaded", () => {
    const mainVideo = document.getElementById("main-video");
    const overlay = document.getElementById("overlay");
    const expandedVideo = document.getElementById("expanded-video");
  
    mainVideo.addEventListener("click", () => {
      expandedVideo.src = mainVideo.querySelector("source").src;
      overlay.classList.add("active");
    });
  
    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      expandedVideo.pause();
      expandedVideo.src = "";
    });
  });

  
  const observer = new IntersectionObserver(
    (entries) => {
      const logo = document.querySelector(".logo");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logo.style.display = "none"; // Hide logo when home section is in view
        } else {
          logo.style.display = "block"; // Show logo when home section is out of view
        }
      });
    },
    { threshold: 0.2 } // Trigger when 50% of the home section is in view
  );
  
  observer.observe(document.querySelector("#home"));
      