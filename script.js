
// Mock data for options
const optionSets = {
    initial: [
        { id: "option1", label: "Option 1", image: "path_to_image1.jpg" },
        { id: "option2", label: "Option 2", image: "path_to_image2.jpg" }
    ],
    option1: [
        { id: "subOption1", label: "Sub Option 1", image: "path_to_sub_image1.jpg" },
        { id: "subOption2", label: "Sub Option 2", image: "path_to_sub_image2.jpg" }
    ],
    option2: [
        { id: "subOption3", label: "Sub Option 3", image: "path_to_sub_image3.jpg" },
        { id: "subOption4", label: "Sub Option 4", image: "path_to_sub_image4.jpg" }
    ]
};

// Function to load options dynamically
function loadOptions(setKey) {
    const container = document.getElementById("options-container");
    container.innerHTML = ""; // Clear previous options

    optionSets[setKey].forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option-item");
        optionDiv.innerHTML = `
            <img src="${option.image}" alt="${option.label}" width="100">
            <p>${option.label}</p>
        `;
        optionDiv.onclick = () => loadOptions(option.id); // Load next options set
        container.appendChild(optionDiv);
    });
}

// Initial load
loadOptions("initial");
