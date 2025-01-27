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

// Student data
const students = [
    {
        name: "Anbumuthu",
        role: "DECORATION",
        mobile: "+918000000000",
        email: "anbumuthu@example.com",
        image: "FINAL/ANBU BME.jpg"
    },
    {
        name: "Biruntha",
        role: "VOLUNTEERS",
        mobile: "+918000000001",
        email: "biruntha@example.com",
        image: "FINAL/BIRUNTHA BME.jpg"
    },
    {
        name: "Deepak",
        role: "SOFTWARE MENTORS",
        mobile: "+918000000002",
        email: "deepak@example.com",
        image: "FINAL/DEEPAK BME.jpg"
    },
    {
        name: "Devika",
        role: "FUNGAMES",
        mobile: "+918000000003",
        email: "devika@example.com",
        image: "FINAL/DEVIKA BME.jpg"
    },
    {
        name: "Dinesh",
        role: "ACCOUNTS",
        mobile: "+918000000004",
        email: "dhinesh@example.com",
        image: "FINAL/DHINESH BME.jpg"
    },
    {
        name: "Elakkiya",
        role: "INCHARGES",
        mobile: "+918000000005",
        email: "elakkiya@example.com",
        image: "FINAL/ELAKKIYA BME.jpg"
    },
    {
        name: "Ganesh",
        role: "WEBSITE DESIGN,SOFTWARE MENTORS",
        mobile: "+918000000006",
        email: "ganesh@example.com",
        image: "FINAL/GANESH BME.jpg"
    },
    {
        name: "Geetharakchana",
        role: "ACCOUNTS",
        mobile: "+918000000007",
        email: "geetharakchana@example.com",
        image: "FINAL/GEETHARAKCHANA BME.jpg"
    },
    {
        name: "Gokul",
        role: "VOLUNTEERS",
        mobile: "+918000000008",
        email: "gokul@example.com",
        image: "FINAL/GOKUL BME.jpg"
    },
    {
        name: "Gowtham",
        role: "WEBSITE DESIGN",
        mobile: "+918000000009",
        email: "gowtham@example.com",
        image: "FINAL/GOWTHAM BME.jpg"
    },
    {
        name: "Harikrishnan",
        role: "SOFTWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/HARIKRISHNAN BME.jpg"
    },
    {
        name: "Indhuja", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/INDHUJA BME.jpg"
    },
    {
        name: "Jahatheswaran", 
        role: "ACCOUNTS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/JAGA BME.jpg"
    },
    {
        name: "Janapriya", 
        role: "WEBSITE DESIGNERS,SOFTWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/JANAPRIYA BME.jpg"
    },
    {
        name: "Jayakarthikeyan", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/JAYAKARTHI BME.jpg"
    },
    {
        name: "Kalaiselvan", 
        role: "ACCOUNTS,EVALUATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/KALAI BME.jpg"
    },
    {
        name: "Kamatchi", 
        role: "WEBSITE DESIGNERS,SOFTWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/KAMATCHI BME.jpg"
    },
    {
        name: "Kanimozhi", 
        role: "DECORATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/KANIMOZHI BME.jpg"
    },
    {
        name: "Kavya", 
        role: "SOFTWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/KAVYA BME.jpg"
    },
    {
        name: "Kayalvizhy", 
        role: "FUNGAMES,EVALUATION", 
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/kayal bme.jpg"
    },
    {
        name: "Kuberalakshmi", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/KUBERA BME.jpg"
    },
    {
        name: "Malaravan", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/MALAR BME.jpg"
    },
    {
        name: "Malini", 
        role: "VOLUNTEERS", 
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/MALINI BME.jpg"
    },
    {
        name: "Manikandan", 
        role: "HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/MANI BME.jpg"
    },
    {
        name: "Muralidharan", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/MURALI BME.jpg"
    },
    {
        name: "Muthukumar", 
        role: "HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/muthu bme.jpg"
    },
    {
        name: "MythilI", 
        role: "HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/MYTHILI BME.jpg"
    },
    {
        name: "Nandhini P", 
        role: "EVALUATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/NANDHINI P BME (1).jpg"
    },
    {
        name: "Nandhini S", 
        role: "FUNGAMES",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/nandhini S bme.jpg"
    },
    {
        name: "Naveenkumar", 
        role: "INCHARGES",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/NAVEEN BME.jpg"
    },
    {
        name: "Nithya", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/NITHYA BME.jpg"
    },
    {
        name: "Pooja", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/POOJA BME.jpg"
    },
    {
        name: "Prabakaran", 
        role: "DECORATION,CERTIFICATIONS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/PRABA BME.jpg"
    },
    {
        name: "Prabhu", 
        role: "FUNGAMES",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image:"FINAL/PRABHU BME.jpg"
    },
    {
        name: "Prasanth", 
        role: "CERTIFICATIONS,HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/PRASANTH BME.jpg"
    },
    {
        name: "Premanth", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/PREM BME.jpg"
    },
    {
        name: "Priyadharshini", 
        role: "CERTIFICATIONS,HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/PRIYA BME.jpg"
    },
    {
        name: "RAMANI", 
        role: "INCHARGES",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/RAMANI BME.jpg"
    },
    {
        name: "Risika", 
        role: "DECORATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/risika bme.jpg"
    },
    {
        name: "Rubika", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/RUBIKA BME.jpg"
    },
    {
        name: "Sabarivasan", 
        role: "FUNGAMES,POSTER",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SABARI BME.jpg"
    },
    {
        name: "Sakthikumar",
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SAKTHI BME.jpg"
    },
    {
        name: "Sangeetha", 
        role: "EVALUATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SANGEETHA BME.jpg"
    },
    {
        name: "Santhiya", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SANTHIYA BME.jpg"
    },
    {
        name: "Santhosh", 
        role: "DECORATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SANTHOSH BME.jpg"
    },
    {
        name: "Shamprakash", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SHAM BME.jpg"
    },
    {
        name: "Shankhesh", 
        role: "SOFTWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SHANKHESH BME.jpg"
    },
    {
        name: "Shanmuganathan", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SHANMUGANATHAN BME.jpg"
    },
    {
        name: "Shanmugapriya", 
        role: "EVALUATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SHNAMUGA PRIYA BME.jpg"
    },
    {
        name: "Sivadharshana",
        role: "POSTER",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SIVA DHARSHANA BME.jpg"
    },
    {
        name: "Sivaranjani", 
        role: "HOSPITALITY",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SIVARANJINI BME.jpg"
    },
    {
        name: "Sonaligha",
        role: "ACCOUNTS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SONALIGHA BME.jpg"
    },
    {
        name: "Soundarya", 
        role: "EVALUATION",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SOUNDARYA BME.jpg"
    },
    {
        name: "Sritharan", 
        role: "HOSPITALITY",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SRI BME.jpg"
    },
    {
        name: "Sruthi", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/SRUTHI BME.jpg"
    },
    {
        name: "Vignesh", 
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/VIGNESH BME.jpg"
    },
    {
        name: "VijaySakthi",
        role: "VOLUNTEERS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/VIJAY SAKTHI BME.jpg"
    },
    {
        name: "Vinoth", 
        role: "FUNGAMES",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/VINOTH BME.jpg"
    },
    {
        name: "Vishnu", 
        role: "ACCOUNTS,EVALUATION,HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/VISHNU BME.jpg"
    },
    {
        name: "Vishnuvarthan", 
        role: "FUNGAMES,HOSPITALITY",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/VISHNUVARTHAN BME.jpg"
    },
    {
        name: "Yuvaraj", 
        role: "HARDWARE MENTORS",
        mobile: "+918000000010",
        email: "harikrishnan@example.com",
        image: "FINAL/YUVARAJ BME.jpg"
    },
  ];
  
  function showDetails(container) {
    const alt = container.querySelector("img").alt;
    const student = students.find((s) => s.name === alt);
  
    if (student) {
      // Create modal content variables
      const modal = document.getElementById("detailsModal");
      const modalName = document.getElementById("modalName");
      const modalEmail = document.getElementById("modalEmail");
      const modalImage = document.getElementById("modalImage");
  
      // Clear previous modal content
      modalName.innerText = "";
      modalEmail.innerText = "";
      modalImage.src = "";
      modalImage.alt = "";
  
      // Load the image in a temporary object to ensure it loads fully
      const tempImage = new Image();
      tempImage.onload = () => {
        // Populate modal content once the image loads
        modalName.innerText = student.name;
        modalEmail.innerText = student.email;
        modalImage.src = student.image;
        modalImage.alt = student.name;
  
        // Show the modal
        modal.style.display = "block";
  
        // Add blur effect to the background
        const header = document.querySelector("h1");
        const buttonGrid = document.querySelector(".button-grid");
        header.classList.add("blur");
        buttonGrid.classList.add("blur");
  
        // Dim other containers
        const photoGrid = document.getElementById("photoGrid");
        const containers = photoGrid.querySelectorAll(".photo-container");
        containers.forEach((otherContainer) => {
          if (otherContainer === container) {
            otherContainer.classList.add("active-student");
            otherContainer.classList.remove("dim");
          } else {
            otherContainer.classList.add("dim");
            otherContainer.classList.remove("active-student");
          }
        });
  
        // Ensure modal is interactive
        modal.style.filter = "none";
        modal.style.pointerEvents = "auto";
  
        // Add event listener to close the modal
        modalImage.addEventListener("click", closeModal);
      };
  
      tempImage.onerror = () => {
        // Handle image loading errors
        alert("Failed to load the image. Please try again.");
      };
  
      // Start loading the image
      tempImage.src = student.image;
    }
  }

  document.addEventListener("click", (e) => {
    const modal = document.getElementById("detailsModal");
    if (modal.style.display === "block" && !modal.contains(e.target)) {
      closeModal();
    }
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
  
  
  
  // Close modal function
  function closeModal() {
    const modal = document.getElementById("detailsModal");
    modal.style.display = "none"; // Hide modal
  
    // Clear content when closing the modal
    document.getElementById("modalName").innerText = "";
    document.getElementById("modalMobile").innerText = "";
    document.getElementById("modalEmail").innerText = "";
    document.getElementById("modalImage").src = "";
  
    // Remove the event listener from the image when the modal is closed
     // Remove blur and highlight classes
     const header = document.querySelector("h1");
     const buttonGrid = document.querySelector(".button-grid");
     const photoGrid = document.getElementById("photoGrid");
     const containers = photoGrid.querySelectorAll(".photo-container");
   
     header.classList.remove("blur");
     buttonGrid.classList.remove("blur");
     containers.forEach((container) => {
       container.classList.remove("active-model", "dim");
     });
  
    // Remove event listener from modal image
    const modalImage = document.getElementById("modalImage");
    modalImage.removeEventListener("click", closeModal);
  
  
    containers.forEach((container) => {
        container.classList.remove("highlight");
        container.classList.remove("dim");
    });
    
    // Ensure the background of the page is restored to its normal state
    body.style.overflow = "auto";  
  }
  
  // Reset modal content when the page loads
  window.onload = function() {
    const modal = document.getElementById("detailsModal");
    // Ensure the modal is empty when the page loads
    modal.style.display = "none"; // Keep the modal hidden by default
    document.getElementById("modalName").innerText = "";

    document.getElementById("modalEmail").innerText = "";
    document.getElementById("modalImage").src = "";
  }
  
  // Function to filter by role and then sort alphabetically by name
  let isFiltered = false; // To track if the filter is applied
let lastClickedRole = null; // To track the last clicked role button

function filterByRole(role) {
  const photoGrid = document.getElementById("photoGrid");
  const containers = Array.from(photoGrid.querySelectorAll(".photo-container"));

  // Separate elements into those with the matching role and others
  const matchingContainers = [];
  const otherContainers = [];

  containers.forEach((container) => {
    const roles = container.dataset.role.split(",").map((r) => r.trim());

    if (roles.includes(role)) {
      matchingContainers.push(container);
      container.classList.add("highlight"); // Highlight matching role
      container.classList.remove("dim");   // Remove dim for matching role
    } else {
      otherContainers.push(container);
      container.classList.add("dim");      // Dim non-matching role
      container.classList.remove("highlight"); // Remove highlight for non-matching role
    }
  });

  // If it's a new role filter, apply filtering logic
  if (role !== lastClickedRole) {
    // Filter and sort by role
    matchingContainers.sort((a, b) => {
      const nameA = a.querySelector("img").alt.toLowerCase();
      const nameB = b.querySelector("img").alt.toLowerCase();
      return nameA.localeCompare(nameB); // Sort alphabetically (case-insensitive)
    });

    // Combine the two arrays: matching containers first, then others
    const sortedContainers = [...matchingContainers, ...otherContainers];

    // Clear the current grid and append the sorted containers back in the new order
    photoGrid.innerHTML = "";
    sortedContainers.forEach((container) => {
      photoGrid.appendChild(container);
    });

    // Mark filter as applied
    isFiltered = true;
    lastClickedRole = role; // Update the last clicked role
  } else {
    // If the same button is clicked again, just sort alphabetically
    const allContainers = [...matchingContainers, ...otherContainers];

    // Sort the entire grid alphabetically by name (based on the alt attribute of the image)
    allContainers.sort((a, b) => {
      const nameA = a.querySelector("img").alt.toLowerCase();
      const nameB = b.querySelector("img").alt.toLowerCase();
      return nameA.localeCompare(nameB); // Sort alphabetically (case-insensitive)
    });

    // Clear the current grid and append the sorted containers back in the new order
    photoGrid.innerHTML = "";
    allContainers.forEach((container) => {
      photoGrid.appendChild(container);
    });

    // Remove the 'dim' and 'highlight' classes to restore original state
    allContainers.forEach((container) => {
      container.classList.remove("dim", "highlight");
    });

    // Reset the filter state
    isFiltered = false;
    lastClickedRole = null; // Reset last clicked role
  }
}



const carousel = document.getElementById('carousel');
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
let currentIndex = 0;
const totalImages = images.length;
let startX = 0;
let isDragging = false;

// Update the carousel based on the current index
function updateCarousel() {
    images.forEach((img, index) => {
        const angle = ((index - currentIndex) * (360 / totalImages)) % 360; // Circular arrangement
        img.style.transform = `rotateY(${angle}deg) translateZ(700px)`; // Adjust `translateZ` for depth
        img.classList.toggle('active', index === currentIndex); // Highlight the active image
    });
}

// Handle drag start
function handleDragStart(e) {
    startX = e.touches ? e.touches[0].clientX : e.clientX; // Capture starting X position
    isDragging = true;
    carousel.style.cursor = 'grabbing';
}

// Handle drag move
function handleDragMove(e) {
    if (!isDragging) return;

    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX;

    if (Math.abs(deltaX) > 500) { // Threshold for swipe
        if (deltaX < 0) {
            // Swipe left
            currentIndex = (currentIndex + 1) % totalImages;
        } else {
            // Swipe right
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        }

        startX = currentX; // Reset startX for smoother continuous drag
        updateCarousel();
    }
}

// Handle drag end
function handleDragEnd() {
    isDragging = false;
    carousel.style.cursor = 'grab';
}

// Attach event listeners for mouse and touch events
carousel.addEventListener('mousedown', handleDragStart);
carousel.addEventListener('touchstart', handleDragStart);

carousel.addEventListener('mousemove', handleDragMove);
carousel.addEventListener('touchmove', handleDragMove);

carousel.addEventListener('mouseup', handleDragEnd);
carousel.addEventListener('touchend', handleDragEnd);

// Initialize carousel
updateCarousel();



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

