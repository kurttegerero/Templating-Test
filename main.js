const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Deactivate all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });

    // Activate the clicked tab
    tab.classList.add("active");

    // Show the corresponding tab content
    const tabId = tab.dataset.tab;
    const tabContent = document.getElementById(tabId);
    tabContent.style.display = "block";
  });
});

const subTabs = document.querySelectorAll(".sub-tab");
const subTabContents = document.querySelectorAll(".sub-tab-content");

subTabs.forEach((subTab) => {
  subTab.addEventListener("click", () => {
    // Deactivate all sub tabs
    subTabs.forEach((subTab) => {
      subTab.classList.remove("sub-active");
    });

    // Hide all tab contents
    subTabContents.forEach((subTabContent) => {
      subTabContent.style.display = "none";
    });

    // Activate the clicked tab
    subTab.classList.add("sub-active");

    // Show the corresponding tab content
    const subTabId = subTab.dataset.tab;
    const subTabContent = document.getElementById(subTabId);
    subTabContent.style.display = "block";
  });
});



const radioButtons = document.querySelectorAll('input[name="radio"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    if (radioButton.checked) {
      console.log(radioButton.value);
    }
  });
});