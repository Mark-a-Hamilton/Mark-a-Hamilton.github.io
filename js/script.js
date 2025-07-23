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

