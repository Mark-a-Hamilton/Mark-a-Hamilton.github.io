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
    { src: "/img/3.jpg", alt: "3 Day Streak", title: "3 Day Streak" },
    { src: "/img/7.jpg", alt: "7 Day Streak", title: "7 Day Streak" },
    { src: "/img/30.jpg", alt: "30 Day Streak", title: "30 Day Streak" },
    { src: "/img/90.jpg", alt: "90 Day Streak", title: "90 Day Streak" },
    { src: "/img/180.jpg", alt: "180 Day Streak", title: "180 Day Streak" },
    { src: "/img/100_truePositive.jpg", alt: "100% True Positive", title: "100% True Positive" },
    { src: "/img/Blue.jpg", alt: "Blue", title: "Blue" },
    { src: "/img/CatLinux.jpg", alt: "CAT Linux.txt", title: "CAT Linux.txt" },
    { src: "/img/Course-Awakens.jpg", alt: "Course Awakens", title: "Course Awakens" },
    { src: "/img/CyberReady.jpg", alt: "Cyber Ready", title: "Cyber Ready" },
    { src: "/img/FirstAlertClosed.jpg", alt: "First Alert Closed", title: "First Alert Closed" },
    { src: "/img/FirstScenario.jpg", alt: "First Scenario", title: "First Scenario" },
    { src: "/img/IntroToSecurityEngineering.jpg", alt: "Introduction to Security Engineering", title: "Introduction to Security Engineering" },
    { src: "/img/Investigations.jpg", alt: "Investigations", title: "Investigations" },
    { src: "/img/LinuxPrivEsc.jpg", alt: "Linux Privilege Escalation", title: "Linux Privilege Escalation" },
    { src: "/img/LoggingLegend.jpg", alt: "Logging Legend", title: "Logging Legend" },
    { src: "/img/OWasp10.jpg", alt: "OWASP Top 10", title: "OWASP Top 10" },
    { src: "/img/Raffle-Royalty.jpg", alt: "Raffle Royalty", title: "Raffle Royalty" },
    { src: "/img/SecurityAwareness.jpg", alt: "Security Awareness", title: "Security Awareness" },
    { src: "/img/SQLSlayer.jpg", alt: "SQL Slayer", title: "SQL Slayer" },
    { src: "/img/Terminated.jpg", alt: "Terminated!", title: "Terminated!" },
    { src: "/img/Terminalled.jpg", alt: "Terminalled", title: "Terminalled" },
    { src: "/img/Webbed.jpg", alt: "Webbed", title: "Webbed" },
    { src: "/img/www.jpg", alt: "World Wide Web", title: "World Wide Web" }
];

document.addEventListener("DOMContentLoaded", function () { renderBadges(badges); });

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
        img.className = "img-fluid rounded border shadow-sm badge-thumb";

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
};
