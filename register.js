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
        image: "Images/About.png"
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
        image: "Images/Sabari.png"
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
      // Display modal with student details
      const modal = document.getElementById("detailsModal");
      document.getElementById("modalName").innerText = student.name;
      document.getElementById("modalMobile").innerText = `${student.mobile}`;
      document.getElementById("modalEmail").innerText = `${student.email}`;
      document.getElementById("modalImage").src = student.image;
  
      modal.style.display = "block"; // Show modal
  
       // Blur h1 and button-grid
       const header = document.querySelector("h1");
       const buttonGrid = document.querySelector(".button-grid");
       header.classList.add("blur");
       buttonGrid.classList.add("blur");
   
       // Blur all models except the clicked one
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
  
      // Ensure the modal is not blurred
      modal.style.filter = "none";
      modal.style.pointerEvents = "auto";
  
      // Add event listener to close modal
      const modalImage = document.getElementById("modalImage");
      modalImage.addEventListener("click", closeModal);
    }
  }
  
  
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
    document.getElementById("modalMobile").innerText = "";
    document.getElementById("modalEmail").innerText = "";
    document.getElementById("modalImage").src = "";
  }
  
  // Function to filter by role and then sort alphabetically by name
  let isFiltered = false; // To track if the filter is applied

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
  } else {
    // If the filter is already applied, just sort the grid alphabetically
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

    // Remove the 'dim' and 'highlight' classes and ensure all elements are restored to original state
    allContainers.forEach((container) => {
      container.classList.remove("dim", "highlight");
    });

    // Mark filter as toggled (completed) and reset to no filter
    isFiltered = false;
  }
}


 const carousel = document.getElementById('carousel');
        const carouselContainer = document.querySelector('.carousel-container');
        const images = document.querySelectorAll('.carousel-container img');
        const overlay = document.getElementById('overlay');
        const overlayImg = overlay.querySelector('img');
        let currentIndex = 0;
        const totalImages = images.length;

        function updateCarousel() {
            images.forEach((img, index) => {
                const angle = ((index - currentIndex + totalImages) % totalImages) * (360 / totalImages);
                img.style.transition = "transform 0.6s ease-in-out"; 
                img.style.transform = `rotateY(${angle}deg) translateZ(${400 - Math.abs(angle - 180) * 0.5}px)`;
                img.classList.toggle('active', index === currentIndex);
            });
        }
        

        function handleSideClick(direction) {
            if (direction === 'left') {
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            } else if (direction === 'right') {
                currentIndex = (currentIndex + 1) % totalImages;
            }
            updateCarousel();
        }

        carousel.addEventListener('click', (e) => {
            const { left, width } = carousel.getBoundingClientRect();
            const clickPosition = e.clientX - left;
            if (clickPosition < width / 2) {
                handleSideClick('left');
            } else {
                handleSideClick('right');
            }
        });

        images.forEach((img) => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                overlayImg.src = img.src;
                overlay.classList.add('active');
                carousel.classList.add('blurred');
            });
        });

        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            carousel.classList.remove('blurred');
        });

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

