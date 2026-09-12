/* =========================================
   PROJECT DATA
========================================= */

const projects = [

    {
        name: "Trinixa Robot"
    },

    {
        name: "Health Monitor"
    },

    {
        name: "Smart Voice Digital Clock"
    },

    {
        name: "Battery Capacity Tester"
    },

    {
        name: "DIY Glue Gun"
    },

    {
        name: "DC Variable Power Supply"
    }

];


/* =========================================
   SHOW PROJECTS
========================================= */

function displayProjects() {

    const container =
        document.getElementById("projectsContainer");

    container.innerHTML = "";

    projects.forEach((project, index) => {

        const card =
            document.createElement("div");

        card.className = "project-card";

        card.innerHTML = `
            <button
                class="project-name"
                onclick="viewProject(${index})">

                ${project.name}

            </button>
        `;

        container.appendChild(card);

    });

}


/* =========================================
   VIEW PROJECT
========================================= */

function viewProject(index) {

    window.location.href =
        "project-details.html?project=" + index;

}


/* =========================================
   ADD PROJECT
========================================= */

function addProject() {

    alert(
        "Admin Login + Add Project system will be added next."
    );

}


/* =========================================
   HOME
========================================= */

function goHome() {

    window.location.href =
        "index.html";

}


/* =========================================
   START
========================================= */

displayProjects();