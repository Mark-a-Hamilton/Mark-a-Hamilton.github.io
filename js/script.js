// My Javascript Library

function SwitchMode() {    // Function to switch between "light" and "dark" mode
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }
};

function showBadgeModal(title, imagePath) {
    const badgeModal = new bootstrap.Modal(document.getElementById('badgeModal'));
    const image = document.getElementById('badgeModalImage');

    image.src = ''; // Clear previous src to avoid ghosting
    image.alt = `${title} Badge Full View`;
    image.src = imagePath;
    document.getElementById('badgeModalLabel').textContent = title;

    badgeModal.show();
};

const badges = [
    { src: "Images/logging-legend.jpg", alt: "Logging Legend", title: "Logging Legend" },
    { src: "Images/7-day-streak.jpg", alt: "7 Day Streak", title: "7 Day Streak" },
    { src: "Images/WorldWideWeb.jpg", alt: "World Wide Web", title: "World Wide Web" },
    { src: "Images/Webbed.jpg", alt: "Webbed", title: "Webbed" },
    { src: "Images/Terminalled.jpg", alt: "CAT Linux", title: "CAT Linux" },
    { src: "Images/LinuxPrivEsc.jpg", alt: "Linux Privilege Escalation", title: "Linux Privilege Escalation" },
    { src: "Images/30DayStreak.jpg", alt: "30 Day Streak", title: "30 Day Streak" },
    { src: "Images/SecurityAwareness.jpg", alt: "Security Awareness", title: "Security Awareness" },
    { src: "Images/Blue.jpg", alt: "Blue", title: "Blue" },
    { src: "Images/IntroToSecurityEngineering.jpg", alt: "Introduction to Security Engineering", title: "Introduction to Security Engineering" },
    { src: "Images/OWasp10.jpg", alt: "OWASP Top 10", title: "OWASP Top 10" },
    { src: "Images/CyberReady.jpg", alt: "Cyber Ready", title: "Cyber Ready" },
    { src: "Images/90DayStreak.jpg", alt: "90 Day Streak", title: "90 Day Streak" },
    { src: "Images/SQL_Slayer.jpg", alt: "SQL Slayer", title: "SQL Slayer" },
    { src: "Images/180DayStreak.jpg", alt: "180 Day Streak", title: "180 Day Streak" }
];

function renderBadges(badges) {
    const container = document.getElementById("badge-container");
    badges.forEach(badge => {
        const img = document.createElement("img");
        img.src = badge.src;
        img.alt = badge.alt;
        img.title = badge.title;
        img.className = "img-fluid rounded border shadow-sm";
        container.appendChild(img);
    });
};


