const projects = [

    {
        name: "Trinixa Robot",

        pdf:
            "https://drive.google.com/file/d/1BYR2_HirSYF_XW3zeqcccyMgBoYIRjsv/view?usp=drivesdk",

        images:
            "#",

        github:
            "#",

        video:
            "#"
    },


    {
        name: "Health Monitor",

        pdf:
            "#",

        images:
            "#",

        github:
            "#",

        video:
            "#"
    },


    {
        name: "Smart Voice Digital Clock",

        pdf:
            "#",

        images:
            "#",

        github:
            "#",

        video:
            "#"
    },


    {
        name: "Battery Capacity Tester",

        pdf:
            "#",

        images:
            "#",

        github:
            "#",

        video:
            "#"
    },


    {
        name: "DIY Glue Gun",

        pdf:
            "#",

        images:
            "#",

        github:
            "#",

        video:
            "#"
    },


    {
        name: "DC Variable Power Supply",

        pdf:
            "#",

        images:
            "#",

        github:
            "#",

        video:
            "#"
    }

];


/* =========================================
   GET PROJECT NUMBER
========================================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const projectIndex =
    Number(
        params.get("project")
    );


/* =========================================
   SHOW PROJECT
========================================= */

if (
    Number.isNaN(projectIndex) ||
    !projects[projectIndex]
) {

    document.getElementById("projectName")
        .textContent =
        "Project Not Found";

} else {

    const project =
        projects[projectIndex];


    document.getElementById("projectName")
        .textContent =
        project.name;


    document.getElementById("pdfLink")
        .href =
        project.pdf;


    document.getElementById("imagesLink")
        .href =
        project.images;


    document.getElementById("githubLink")
        .href =
        project.github;


    document.getElementById("videoLink")
        .href =
        project.video;

}


/* =========================================
   BACK BUTTON
========================================= */

function goBack() {

    window.location.href =
        "projects.html";

}