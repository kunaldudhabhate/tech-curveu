//////////////////////// side nav bar start///////////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//////////////////////// side nav bar close///////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    const dataBody = document.getElementById("dataBody");

    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData"));

    if (storedData && storedData.length > 0) {
        for (const data of storedData) {
            const row = document.createElement("tr");
            const emailAddressCell = document.createElement("td");
            const firstNameCell = document.createElement("td");
            const lastNameCell = document.createElement("td");
            const phoneCell = document.createElement("td");
            const emailCategoryCell = document.createElement("td");
            const registerDateCell = document.createElement("td");

            firstNameCell.textContent = data.firstName;
            lastNameCell.textContent = data.lastName;
            phoneCell.textContent = data.phone;
            emailAddressCell.textContent = data.emailAddress;
            emailCategoryCell.textContent = data.emailCategory;
            registerDateCell.textContent = data.registerDate;

            emailCategoryCell.classList.add('ecategorry')
            // row.classList.add('user-row')

            row.appendChild(emailAddressCell);
            row.appendChild(firstNameCell);
            row.appendChild(lastNameCell);
            row.appendChild(phoneCell);
            row.appendChild(emailCategoryCell);
            row.appendChild(registerDateCell);
            dataBody.appendChild(row);
        }
    }
});


// popup
const userTable = document.getElementById('customers');
const userPopup = document.getElementById('userPopup');
const popupContent = document.getElementById('popupContent');

const userRows = document.querySelectorAll('.user-row');
userRows.forEach(row => {
    row.addEventListener('click', () => {
        const eaddress = row.cells[0].textContent;
        const name = row.cells[1].textContent;
        const lastName = row.cells[2].textContent;
        const pnumber = row.cells[3].textContent;
        const rdate = row.cells[5].textContent;

        popupContent.innerHTML = `
            <p><strong>Email address:</strong> ${eaddress}</p>
            <p><strong>name:</strong> ${name}</p>
            <p><strong>lastname:</strong> ${lastName}</p>
            <p><strong>Phone number:</strong> ${pnumber}</p>
            <p><strong>Register date:</strong> ${rdate}</p>
        `;

        userPopup.style.display = 'block';
    });
});

function closePopup() {
    userPopup.style.display = 'none';
}

// popup close
