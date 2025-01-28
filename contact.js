
// Student data
const students = [
    {
        name: "Anbumuthu",
        role: "DECORATION",
        mobile: "+918056807106",
        email: "anbumuthup3515@gmail.com",
        image: "FINAL/ANBU BME.png"
    },
    {
        name: "Biruntha",
        role: "VOLUNTEERS",
        mobile: "+919003392339",
        email: "biruntharavi18@gmail.com",
        image: "FINAL/BIRUNTHA BME.png"
    },
    {
        name: "Deepak",
        role: "SOFTWARE MENTORS",
        mobile: "+919944553118",
        email: "deepakravis03@gmail.com",
        image: "FINAL/DEEPAK BME.png"
    },
    {
        name: "Devika",
        role: "FUNGAMES",
        mobile: "+919345072902",
        email: "devikabsm2003@gmail.com",
        image: "FINAL/DEVIKA BME.png"
    },
    {
        name: "Dinesh",
        role: "ACCOUNTS",
        mobile: "+918667450659",
        email: "dineshdineshdon2002@gmail.com",
        image: "FINAL/DHINESH BME.png"
    },
    {
        name: "Elakkiya",
        role: "INCHARGES",
        mobile: "+918870820969",
        email: "elakkiyab153@gmail.com",
        image: "FINAL/ELAKKIYA BME.png"
    },
    {
        name: "Ganesh",
        role: "WEBSITE DESIGN,SOFTWARE MENTORS",
        mobile: "+918248418302",
        email: "rcganesh8903@gmail.com",
        image: "FINAL/GANESH BME.png"
    },
    {
        name: "Geetharakchana",
        role: "ACCOUNTS",
        mobile: "+917358892487",
        email: "geethabiomedical@gmailcom",
        image: "FINAL/GEETHARAKCHANA BME.png"
    },
    {
        name: "Gokul",
        role: "VOLUNTEERS",
        mobile: "+918072549842",
        email: "dgokulgk005@gmail.com",
        image: "FINAL/GOKUL BME.png"
    },
    {
        name: "Gowtham",
        role: "WEBSITE DESIGN",
        mobile: "+919003451226",
        email: "gowthamkpm72@gmail.com",
        image: "FINAL/GOWTHAM BME.png"
    },
    {
        name: "Harikrishnan",
        role: "SOFTWARE MENTORS",
        mobile: "+919894892896",
        email: "harikrishnanha7486@gmail.com",
        image: "FINAL/HARIKRISHNAN BME.png"
    },
    {
        name: "Indhuja", 
        role: "VOLUNTEERS",
        mobile: "+918300407553",
        email: "indujabme@gmail.com",
        image: "FINAL/INDHUJA BME.png"
    },
    {
        name: "Jahatheswaran", 
        role: "ACCOUNTS",
        mobile: "+918248664170",
        email: "jagathes2512@gmail.com",
        image: "FINAL/JAGA BME.png"
    },
    {
        name: "Janapriya", 
        role: "WEBSITE DESIGNERS,SOFTWARE MENTORS",
        mobile: "+919698279860",
        email: "janapriyae@gmail.com",
        image: "FINAL/JANAPRIYA BME.png"
    },
    {
        name: "Jayakarthikeyan", 
        role: "VOLUNTEERS",
        mobile: "+918056704168",
        email: "jeyakarthi755@gmail.com",
        image: "FINAL/JAYAKARTHI BME.png"
    },
    {
        name: "Kalaiselvan", 
        role: "ACCOUNTS,EVALUATION",
        mobile: "+919585907551",
        email: "kalaiselvanm975@gmail.com",
        image: "FINAL/KALAI BME.png"
    },
    {
        name: "Kamatchi", 
        role: "WEBSITE DESIGNERS,SOFTWARE MENTORS",
        mobile: "+919080779233",
        email: "kamuparamsu@gmail.com",
        image: "FINAL/KAMATCHI BME.png"
    },
    {
        name: "Kanimozhi", 
        role: "DECORATION",
        mobile: "+919148078971",
        email: "kanip6970@gmail.com",
        image: "FINAL/KANIMOZHI BME.png"
    },
    {
        name: "Kavya", 
        role: "SOFTWARE MENTORS",
        mobile: "+919894263590",
        email: "kavyamanivel28@gmail.com",
        image: "FINAL/KAVYA BME.png"
    },
    {
        name: "Kayalvizhy", 
        role: "FUNGAMES,EVALUATION", 
        mobile: "+919345680024",
        email: "kayalvizhy.sg@gmail.com",
        image: "FINAL/KAYAL_BME.png"
    },
    {
        name: "Kuberalakshmi", 
        role: "VOLUNTEERS",
        mobile: "+918438790131",
        email: "kuberalaksshmi2004@gmail.com",
        image: "FINAL/KUBERA BME.png"
    },
    {
        name: "Malaravan", 
        role: "VOLUNTEERS",
        mobile: "+916380485711",
        email: "malaravan120403@gmail.com",
        image: "FINAL/MALAR BME.png"
    },
    {
        name: "Malini", 
        role: "VOLUNTEERS",
        email: "muthuselvan1661976@gmail.com",
        image: "FINAL/MALINI BME.png"
    },
    {
        name: "Manikandan", 
        role: "HARDWARE MENTORS",
        mobile: "+917010361270",
        email: "manikandanramasamy2002@gmail.com",
        image: "FINAL/MANI BME.png"
    },
    {
        name: "Muralidharan", 
        role: "VOLUNTEERS",
        mobile: "+917010610798",
        email: "mrtmuralichandran445@gmail.com",
        image: "FINAL/MURALI BME.png"
    },
    {
        name: "Muthukumar", 
        role: "HARDWARE MENTORS",
        mobile: "+918122992027",
        email: "rmmuthu270104@gmail.com",
        image: "FINAL/muthu bme.png"
    },
    {
        name: "MythilI", 
        role: "HARDWARE MENTORS",
        mobile: "+916385307743",
        email: "mythiliraji651@gmail.com",
        image: "FINAL/MYTHILI BME.png"
    },
    {
        name: "Nandhini P", 
        role: "EVALUATION",
        mobile: "+919789221943",
        email: "nandhinikumar236@gmail.com",
        image: "FINAL/NANDHINI P BME (1).png"
    },
    {
        name: "Nandhini S", 
        role: "FUNGAMES",
        mobile: "+918122306995",
        email: "nandhinisivalingam02@gmail.com",
        image: "FINAL/NANDHINI S BME.png"
    },
    {
        name: "Naveenkumar", 
        role: "INCHARGES",
        mobile: "+916380668836",
        email: "snkmasssnk@gmail.com",
        image: "FINAL/NAVEEN BME.png"
    },
    {
        name: "Nithya", 
        role: "VOLUNTEERS",
        mobile: "+919363634882",
        email: "nithyas936363@gmail.com",
        image: "FINAL/NITHYA BME.png"
    },
    {
        name: "Pooja", 
        role: "VOLUNTEERS",
        mobile: "+916380616160",
        email: "poojasellaiyan@gmail.com",
        image: "FINAL/POOJA BME.png"
    },
    {
        name: "Prabakaran", 
        role: "DECORATION,CERTIFICATIONS",
        mobile: "+919578234831",
        email: "prabakaranreal2003@gmail.com",
        image: "FINAL/PRABA BME.png"
    },
    {
        name: "Prabhu", 
        role: "FUNGAMES",
        mobile: "+919384705607",
        email: "prabhuhockey0@gmail.com",
        image:"FINAL/PRABHU BME.png"
    },
    {
        name: "Prasanth", 
        role: "CERTIFICATIONS,HARDWARE MENTORS",
        mobile: "+919344872213",
        email: "sakthivelprasanth08@gmail.com",
        image: "FINAL/PRASANTH BME.png"
    },
    {
        name: "Premanth", 
        role: "VOLUNTEERS",
        mobile: "+918438533458",
        email: "premnathvensu@gmail.com",
        image: "FINAL/PREM BME.png"
    },
    {
        name: "Priyadharshini", 
        role: "CERTIFICATIONS,HARDWARE MENTORS",
        mobile: "+919361617304",
        email: "shivandharshi@gmail.com",
        image: "FINAL/PRIYA BME.png"
    },
    {
        name: "RAMANI", 
        role: "INCHARGES",
        mobile: "+918072019398",
        email: "dhanam2831892@gmail.com",
        image: "FINAL/RAMANI BME.png"
    },
    {
        name: "Risika", 
        role: "DECORATION",
        mobile: "+919500900128",
        email: "risikavadivel@gmail.com",
        image: "FINAL/RISIKA_BME.png"
    },
    {
        name: "Rubika", 
        role: "VOLUNTEERS",
        mobile: "+917397595594",
        email: "rrubikabme@gmail.com",
        image: "FINAL/RUBIKA BME.png"
    },
    {
        name: "Sabarivasan", 
        role: "FUNGAMES,POSTER",
        mobile: "+917708937376",
        email: "sabari.blue4@gmail.com",
        image: "FINAL/SABARI BME.png"
    },
    {
        name: "Sakthikumar",
        role: "VOLUNTEERS",
        mobile: "+918825476774",
        email: "sakthishan2002@gmail.com",
        image: "FINAL/SAKTHI BME.png"
    },
    {
        name: "Sangeetha", 
        role: "EVALUATION",
        mobile: "+917010619028",
        email: "madhusasi73@gmail.com",
        image: "FINAL/SANGEETHA BME.png"
    },
    {
        name: "Santhiya", 
        role: "VOLUNTEERS",
        mobile: "+918523964798",
        email: "amudhasanthiya@gmail.com",
        image: "FINAL/SANTHIYA BME.png"
    },
    {
        name: "Santhosh", 
        role: "DECORATION",
        mobile: "+917708064241",
        email: "santhoshsundar799@gmail.com",
        image: "FINAL/SANTHOSH BME.png"
    },
    {
        name: "Shamprakash", 
        role: "FUNGAMES",
        mobile: "+916380437739",
        email: "shamprakash2515@gmail.com",
        image: "FINAL/SHAM BME.png"
    },
    {
        name: "Shankhesh", 
        role: "SOFTWARE MENTORS",
        mobile: "+9189994012416",
        email: "rshankhesh5@gmail.com",
        image: "FINAL/SHANKHESH BME.png"
    },
    {
        name: "Shanmuganathan", 
        role: "VOLUNTEERS",
        mobile: "+919786411784",
        email: "saravanapandi1404@gmail.com",
        image: "FINAL/SHANMUGANATHAN BME.png"
    },
    {
        name: "Shanmugapriya", 
        role: "EVALUATION",
        mobile: "+919342312349",
        email: "akspri2002@gmail.com",
        image: "FINAL/SHNAMUGA PRIYA BME.png"
    },
    {
        name: "Sivadharshana",
        role: "POSTER",
        mobile: "+919994113865",
        email: "sivadharshana23@gmail.com",
        image: "FINAL/SIVA DHARSHANA BME.png"
    },
    {
        name: "Sivaranjani", 
        role: "HOSPITALITY",
        mobile: "+917448842171",
        email: "shivakarthibme@gmail.com",
        image: "FINAL/SIVARANJINI_BME.png"
    },
    {
        name: "Sonaligha",
        role: "ACCOUNTS",
        mobile: "+918220815872",
        email: "sonaligham18@gmail.com",
        image: "FINAL/SONALIGHA BME.png"
    },
    {
        name: "Soundarya", 
        role: "EVALUATION",
        mobile: "+919629169087",
        email: "sundarmmohan3088@gmail.com",
        image: "FINAL/SOUNDARYA BME.png"
    },
    {
        name: "Sritharan", 
        role: "HOSPITALITY",
        mobile: "+918778573065",
        email: "sritharansrithar143@gmail.com",
        image: "FINAL/SRI BME.png"
    },
    {
        name: "Sruthi", 
        role: "VOLUNTEERS",
        mobile: "+919345511856",
        email: "suruthikrishna19@gmail.com",
        image: "FINAL/SRUTHI BME.png"
    },
    {
        name: "Vignesh", 
        role: "VOLUNTEERS",
        mobile: "+919342783175",
        email: "vigneshbddng@gmail.com",
        image: "FINAL/VIGNESH BME.png"
    },
    {
        name: "VijaySakthi",
        role: "VOLUNTEERS",
        mobile: "+919600368319",
        email: "vijayshakthi2004@gmail.com",
        image: "FINAL/VIJAY BME.png"
    },
    {
        name: "Vinoth", 
        role: "FUNGAMES",
        mobile: "+918754723750",
        email: "starvinoth2004@gmail.com",
        image: "FINAL/VINOTH BME.png"
    },
    {
        name: "Vishnu", 
        role: "ACCOUNTS,EVALUATION,HARDWARE MENTORS",
        mobile: "+916381075528",
        email: "ganesavishnu@gmail.com",
        image: "FINAL/VISHNU BME.png"
    },
    {
        name: "Vishnuvarthan", 
        role: "FUNGAMES,HOSPITALITY",
        mobile: "+917604897797",
        email: "rockingstar06419@gmail.com",
        image: "FINAL/VISHNUVARTHAN BME.png"
    },
    {
        name: "Yuvaraj", 
        role: "HARDWARE MENTORS",
        mobile: "+918148098486",
        email: "myuvaraj22122003@gmail.com",
        image: "FINAL/YUVARAJ BME.png"
    },
  ];
  
  function showDetails(container) {
    const alt = container.querySelector("img").alt;
    const student = students.find((s) => s.name === alt);

    if (student) {
        // Modal and its content elements
        const modal = document.getElementById("detailsModal");
        const modalName = document.getElementById("modalName");
        const modalEmail = document.getElementById("modalEmail");
        const modalMobile = document.getElementById("modalMobile");
        const modalImage = document.getElementById("modalImage");

        // Clear previous modal content
        modalName.textContent = "";
        modalEmail.textContent = "";
        modalMobile.textContent = "";
        modalImage.src = "";
        modalImage.alt = "";

        const tempImage = new Image();
        tempImage.onload = () => {
            // Populate modal content
            modalName.textContent = `${student.name}`;
            modalEmail.textContent = `${student.email}`;
            modalMobile.textContent = `${student.mobile}`;
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

            // Make modal interactive
            modal.style.filter = "none";
            modal.style.pointerEvents = "auto";

            // Add event listener for closing the modal by clicking the image
            modalImage.addEventListener("click", closeModal);
        };

        tempImage.onerror = () => {
            alert("Failed to load the image. Please try again.");
        };

        tempImage.src = student.image;
    } else {
        alert("Student details not found.");
    }
}

function closeModal() {
    const modal = document.getElementById("detailsModal");
    const header = document.querySelector("h1");
    const buttonGrid = document.querySelector(".button-grid");
    const photoGrid = document.getElementById("photoGrid");
    const containers = photoGrid.querySelectorAll(".photo-container");

    modal.style.display = "none";

    header.classList.remove("blur");
    buttonGrid.classList.remove("blur");
    containers.forEach((container) => {
        container.classList.remove("dim");
        container.classList.remove("active-student");
    });

    const modalImage = document.getElementById("modalImage");
    modalImage.removeEventListener("click", closeModal);
}

// Close modal if clicked outside or Escape key is pressed
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