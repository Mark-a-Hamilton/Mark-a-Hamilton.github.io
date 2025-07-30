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
    { src: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4077834", alt: "  Current Status", title: "  Current Status" },
    { src: "Images/LoggingLegend.jpg", alt: "Logging Legend", title: "Logging Legend" },
    { src: "Images/7.jpg", alt: "7 Day Streak", title: "7 Day Streak" },
    { src: "Images/www.jpg", alt: "World Wide Web", title: "World Wide Web" },
    { src: "Images/Webbed.jpg", alt: "Webbed", title: "Webbed" },
    { src: "Images/Terminalled.jpg", alt: "CAT Linux.txt", title: "CAT Linux.txt" },
    { src: "Images/LinuxPrivEsc.jpg", alt: "Linux Privilege Escalation", title: "Linux Privilege Escalation" },
    { src: "Images/30.jpg", alt: "30 Day Streak", title: "30 Day Streak" },
    { src: "Images/SecurityAwareness.jpg", alt: "Security Awareness", title: "Security Awareness" },
    { src: "Images/Blue.jpg", alt: "Blue", title: "Blue" },
    { src: "Images/IntroToSecurityEngineering.jpg", alt: "Introduction to Security Engineering", title: "Introduction to Security Engineering" },
    { src: "Images/OWasp10.jpg", alt: "OWASP Top 10", title: "OWASP Top 10" },
    { src: "Images/CyberReady.jpg", alt: "Cyber Ready", title: "Cyber Ready" },
    { src: "Images/90.jpg", alt: "90 Day Streak", title: "90 Day Streak" },
    { src: "Images/SQLSlayer.jpg", alt: "SQL Slayer", title: "SQL Slayer" },
    { src: "Images/180.jpg", alt: "180 Day Streak", title: "180 Day Streak" }
];

document.addEventListener("DOMContentLoaded", function () { renderBadges(badges); });

function renderBadges(badges) {
    const container = document.getElementById("badge-container");
    container.innerHTML = "";

    badges.forEach(badge => {
        const listItem = document.createElement("li");
        listItem.className = "badge-wrapper";
        listItem.style.cursor = "pointer";

        const img = document.createElement("img");
        img.src = badge.src;
        img.alt = badge.alt;
        img.title = badge.title;
        img.className = "img-fluid rounded border shadow-sm";

        listItem.appendChild(img);
        container.appendChild(listItem);

        listItem.addEventListener("click", () => {
            document.getElementById("badgeModalLabel").innerText = badge.title;
            const modalImg = document.getElementById("modalBadgeImage");
            modalImg.src = badge.src;
            modalImg.alt = badge.alt;

            const modal = new bootstrap.Modal(document.getElementById("badgeModal"));
            modal.show();
        });
    });
};

/*
function renderBadges(badges) {
    const container = document.getElementById("badge-container");
    container.innerHTML = "";

    badges.forEach(badge => {
        const wrapper = document.createElement("div");
        wrapper.className = "badge-wrapper";
        wrapper.style.cursor = "pointer";

        const img = document.createElement("img");
        img.src = badge.src;
        img.alt = badge.alt;
        img.title = badge.title;
        img.className = "img-fluid rounded border shadow-sm";

        wrapper.appendChild(img);
        container.appendChild(wrapper);

        // Modal activation
        wrapper.addEventListener("click", () => {
            document.getElementById("badgeModalLabel").innerText = badge.title;
            const modalImg = document.getElementById("modalBadgeImage");
            modalImg.src = badge.src;
            modalImg.alt = badge.alt;

            const modal = new bootstrap.Modal(document.getElementById("badgeModal"));
            modal.show();
        });
    });
}
*/