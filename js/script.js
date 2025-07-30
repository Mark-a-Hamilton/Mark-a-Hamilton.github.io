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
    { src: "images/logging-legend.jpg", alt: "Logging Legend", title: "Logging Legend" },
    { src: "images/7-day-streak.jpg", alt: "7 Day Streak", title: "7 Day Streak" },
    { src: "images/www.jpg", alt: "World Wide Web", title: "World Wide Web" },
    // Add others here...
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


