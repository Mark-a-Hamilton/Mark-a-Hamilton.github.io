// My Javascript Library

function SwitchMode() {    // Function to switch between "light" and "dark" mode
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }
};

function showBadgeModal(title, imagePath) {
    document.getElementById('badgeModalLabel').textContent = title;
    const image = document.getElementById('badgeModalImage');
    image.src = imagePath;
    image.alt = `${title} Badge Full View`;
    const badgeModal = new bootstrap.Modal(document.getElementById('badgeModal'));
    badgeModal.show();
};
