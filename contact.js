
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
        image: "FINAL/VIJAY BME.jpg"
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
        modalImage.style.visibility = "visible";
  
        // Show the modal
        modal.style.display = "block";
  
        // Add blur effect to the background
        const header = document.querySelector("h1");
      const buttonGrid = document.querySelector(".button-grid");
      const photoGrid = document.getElementById("photoGrid");
      const containers = photoGrid.querySelectorAll(".photo-container");
  
        // Dim other containers
        header.classList.add("blur");
        buttonGrid.classList.add("blur");
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
    const modalImage = document.getElementById("modalImage");

    if (modal) {
      modal.style.display = "none"; // Hide modal
    }
    if (modalImage) {
      modalImage.style.visibility = "hidden"; // Hide image
      modalImage.src = ""; // Clear image source
    }
  
    // Clear content when closing the modal
    document.getElementById("modalName").innerText = "";

    document.getElementById("modalEmail").innerText = "";

  
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
    // Ensure modal and image are hidden
  if (modal) {
    modal.style.display = "none"; // Hide the modal
  }
  if (modalImage) {
    modalImage.style.visibility = "hidden"; // Hide the image until explicitly shown
    modalImage.src = ""; // Clear any existing source to prevent accidental display
  }
};
  
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