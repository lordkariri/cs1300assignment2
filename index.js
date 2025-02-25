document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const closeSidebar = document.getElementById("close-sidebar");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("hidden");
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.classList.add("hidden");
    });

    // Skills Tab Functionality
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

    // Setup tab functionality for both skill sections
    setupTabFunctionality(".skill-tab", ".skill-box");
    setupTabFunctionality(".skill-tab1", ".skill-box1");
});
