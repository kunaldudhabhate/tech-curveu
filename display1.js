// const formData1 = document.getElementById('formData')
// formData1.addEventListener('submit',(e)=>{
//     e.preventDefault()
// })
function mynewfunc(e){
    e.preventDefault()
}

function saveFormData() {
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        emailAddress: document.getElementById("emailAddress").value,
        emailCategory: document.getElementById("emailCategory").value,
        registerDate: document.getElementById("registerDate").value,
    };

    // Get existing data from localStorage or initialize an empty array
    let existingData = JSON.parse(localStorage.getItem("formData")) || [];

    // Ensure that existingData is an array
    if (!Array.isArray(existingData)) {
        existingData = [];
    }

    // Add new data to the array
    existingData.push(formData);

    // Store the updated array in localStorage
    localStorage.setItem("formData", JSON.stringify(existingData));

    // Clear the form fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("emailCategory").value = "";
    document.getElementById("registerDate").value = "";


   

    // Redirect to the new page
    window.location.href = "index.html";
}
