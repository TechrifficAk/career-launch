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

const addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", function () {
    console.log(" add button clicked ");

    const appliedCount = document.querySelector(".stat-card h3");
    appliedCount.textContent = Number(appliedCount.textContent) +1;

    const newItem = document.createElement("div");
    // newItem.textContent = "New Application";

    newItem.className = "application-item";

    const recentApplications = document.querySelector(".recent-applications");
    recentApplications.appendChild(newItem); /*createElement() = MAKE it.  textContent = PUT TEXT inside it. appendChild() = PUT IT INTO THE PAGE*/   
    
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

});



