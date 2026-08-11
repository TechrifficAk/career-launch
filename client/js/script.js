const menu = document.querySelector(".menu-toggle");
menu.addEventListener("click", function () {
    console.log("Menu clicked!");

    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("mobile-open"); /*it'll display */

    const navActions = document.querySelector(".nav-actions");
    navActions.classList.toggle("mobile-open");
    /*querySelector() → grab HTML elements
    addEventListener() → react to user actions
    classList.toggle() → add/remove a class*/

});

const jobTitleInput = document.querySelector("#job-title");
const companyNameInput = document.querySelector("#company-name");
const addButton = document.querySelector(".add-btn");
const addForm = document.querySelector(".add-application-form");

addButton.addEventListener("click", function () {

    addForm.style.display = "flex";

});
const saveButton = document.querySelector("#save-application")
saveButton.addEventListener("click", function () {
    console.log(" add button clicked ");

    const jobTitle = jobTitleInput.value;
    const companyName = companyNameInput.value;

    if (jobTitle === "" || companyName === "") {
        alert("Please fill both fields.");
        return;
    }
    const companyLetter = companyName.charAt(0);

    const appliedCount = document.querySelector(".stat-card h3");
    appliedCount.textContent = Number(appliedCount.textContent) + 1;

    const recentApplications = document.querySelector(".recent-applications");

    const newItem = document.createElement("div");
    newItem.className = "application-item";

    newItem.innerHTML = `
        <div class="company-icon">${companyLetter}</div>

        <div class="application-info">
            <h4>${jobTitle}</h4>
            <p>${companyName}</p>
        </div>

        <span class="status applied">Applied</span>
        `;
    recentApplications.appendChild(newItem);
    jobTitleInput.value = "";
    companyNameInput.value = "";
});
/*                 OR
createElement() = MAKE it.  textContent = PUT TEXT inside it. appendChild() = PUT IT INTO THE PAGE*/
/*const newItem = document.createElement("div");
newItem.textContent = "New Application";

newItem.className = "application-item";

const recentApplications = document.querySelector(".recent-applications");
recentApplications.appendChild(newItem);

const companyIcon = document.createElement("div");
companyIcon.className = "company-icon";
companyIcon.textContent = "N";

newItem.appendChild(companyIcon);

const applicationInfo = document.createElement("div");
applicationInfo.className = "application-info";

const jobTitle = document.createElement("h4");
jobTitle.textContent = "New Application";

applicationInfo.appendChild(jobTitle);
newItem.appendChild(applicationInfo);

const companyName = document.createElement("p");
companyName.textContent = "New Company";

applicationInfo.appendChild(companyName);

const status = document.createElement("span");
status.className = "status applied";
status.textContent = "Applied";

newItem.appendChild(status);*/


