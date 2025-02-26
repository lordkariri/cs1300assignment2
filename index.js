document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const closeSidebar = document.getElementById("close-sidebar");
    const actionButton = document.getElementById("action-button");
    const leftImages = document.getElementById("left-images");
    const rightImages = document.getElementById("right-images");
    const imageContainers = document.querySelectorAll(".image-container");

    // Hide left and right images on page load
    leftImages.style.display = "none";
    rightImages.style.display = "none";

    // Toggle sidebar visibility
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });

    closeSidebar.addEventListener("click", () => {
        sidebar.classList.add("hidden");
    });

    // Setup tab functionality for skills section
    function setupTabFunctionality(tabClass, boxClass) {
        const tabs = document.querySelectorAll(tabClass);
        const skillBoxes = document.querySelectorAll(boxClass);

        tabs.forEach(tab => {
            tab.addEventListener("click", function () {
                tabs.forEach(t => t.classList.remove("active"));
                this.classList.add("active");

                const category = this.getAttribute("data-category");

                skillBoxes.forEach(box => {
                    box.style.display = box.getAttribute("data-category") === category ? "block" : "none";
                });
            });
        });
    }

    setupTabFunctionality(".skill-tab", ".skill-box");
    setupTabFunctionality(".skill-tab1", ".skill-box1");

    // Event listener for "Click me for a demonstration" button
    actionButton.addEventListener("click", function () {
        leftImages.style.display = "flex";
        rightImages.style.display = "flex";

        // Restore ALL images (even those that were 'X'ed out)
        imageContainers.forEach(container => {
            container.style.visibility = "visible"; // Make visible again
            container.style.opacity = "1"; // Restore opacity
        });
    });

    // Close button functionality using event delegation
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("close-btn")) {
            const container = event.target.parentElement;
            container.style.opacity = "0"; // Smooth fade-out

            setTimeout(() => {
                container.style.visibility = "hidden"; // Hides but keeps space
            }, 300); // Smooth transition
        }
    });
});
