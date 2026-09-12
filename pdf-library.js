/* =========================================
   PDF DATA
========================================= */

const pdfs = [

    {
        name: "Trinixa Robot Documentation",

        link:
            "https://drive.google.com/file/d/YOUR_PDF_ID/view?usp=sharing"
    },

    {
        name: "Health Monitor Documentation",

        link:
            "#"
    },

    {
        name: "Smart Voice Digital Clock Documentation",

        link:
            "#"
    },

    {
        name: "Battery Capacity Tester Documentation",

        link:
            "#"
    },

    {
        name: "DIY Glue Gun Documentation",

        link:
            "#"
    },

    {
        name: "DC Variable Power Supply Documentation",

        link:
            "#"
    }

];


/* =========================================
   SHOW PDF LIST
========================================= */

function displayPDFs() {

    const container =
        document.getElementById("pdfContainer");

    container.innerHTML = "";


    pdfs.forEach((pdf) => {

        const card =
            document.createElement("div");

        card.className = "pdf-card";


        card.innerHTML = `
            
            <a
                class="pdf-link"
                href="${pdf.link}"
                target="_blank">

                <span class="pdf-icon">
                    📄
                </span>

                <span>
                    ${pdf.name}
                </span>

            </a>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   HOME BUTTON
========================================= */

function goHome() {

    window.location.href =
        "index.html";

}


/* =========================================
   START
========================================= */

displayPDFs();