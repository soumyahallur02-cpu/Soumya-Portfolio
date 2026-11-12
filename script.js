
const projects = [
    {
        name: "PlayStore Nexus",
        description: "An interactive Google Play Store analytics application for exploring app performance and category insights.",
        technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
        live: "https://playstore-nexus-plv3ksltcgn2goyrf8zdtn.streamlit.app/"
    },
    {
        name: "Global Installs Dashboard",
        description: "A dashboard for analysing global app installation trends and comparing app category performance.",
        technologies: ["Python", "Streamlit", "Data Analytics"],
        live: "https://global-installs-dashboard-fksotrcqevrpafdudo8tet.streamlit.app/"
    },
    {
        name: "App Play Installs Dashboard",
        description: "An interactive dashboard for exploring Google Play Store app installation statistics.",
        technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
        live: "https://appplayinstallsdashboard-rfrjrvnt2pxmctpunsrjmn.streamlit.app/"
    },
    {
        name: "InstallScope – Growth Atlas",
        description: "An interactive category intelligence dashboard to discover app category performance through filtering and cumulative install analytics.",
        technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
        live: "https://installscope-play-store-growth-atlas-5em5dt9efhnhlfybtkqrah.streamlit.app/"
    },
    {
        name: "Play Store Analytics Dashboard",
        description: "A data analytics application for exploring Play Store data, app categories and installation trends.",
        technologies: ["Python", "Streamlit", "Data Visualization"],
        live: "https://playstore-analytics-dashboard-58u5wpnfpklzorwqudynfb.streamlit.app/"
    },
    {
        name: "PlayScope",
        description: "A Play Store analytics application for exploring application data and understanding installation patterns.",
        technologies: ["Python", "Streamlit", "Analytics"],
        live: "https://playscope-hafmsbytaowibf4svnn8gh.streamlit.app/"
    }
];

const container = document.getElementById("projectContainer");

projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const techHTML = project.technologies
        .map(tech => `<span>${tech}</span>`)
        .join("");

    card.innerHTML = `
        <div class="project-number">PROJECT 0${index + 1}</div>

        <h3>${project.name}</h3>

        <p>${project.description}</p>

        <div class="tech-stack">
            ${techHTML}
        </div>

        <div class="project-links">
            <a href="${project.live}"
               target="_blank"
               rel="noopener noreferrer"
               class="live-link">
               View Live Project ↗
            </a>
        </div>
    `;

    container.appendChild(card);
});
