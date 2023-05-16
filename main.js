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

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    if (radioButton.checked) {
      console.log(radioButton.value);
    }
  });
});

const addRowBtn = document.getElementById("addRowBtn");

addRowBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const gridContainer = document.createElement("div");
  gridContainer.className =
    "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative";

  const formControl1 = document.createElement("div");
  formControl1.className = "form-control";

  const label1 = document.createElement("label");
  label1.setAttribute("for", "product");
  label1.textContent = "Product";

  const select1 = document.createElement("select");
  select1.name = "product";
  select1.id = "product";

  const option1 = document.createElement("option");
  option1.value = "example product";
  option1.textContent = "Example Product";

  select1.appendChild(option1);
  formControl1.appendChild(label1);
  formControl1.appendChild(select1);
  gridContainer.appendChild(formControl1);

  const formControl2 = document.createElement("div");
  formControl2.className = "form-control";

  const label2 = document.createElement("label");
  label2.setAttribute("for", "sort");
  label2.textContent = "Sort";

  const select2 = document.createElement("select");
  select2.name = "sort";
  select2.id = "sort";

  const option2 = document.createElement("option");
  option2.value = "carton";
  option2.textContent = "Carton";

  select2.appendChild(option2);
  formControl2.appendChild(label2);
  formControl2.appendChild(select2);
  gridContainer.appendChild(formControl2);

  const formControl3 = document.createElement("div");
  formControl3.className = "form-control";

  const label3 = document.createElement("label");
  label3.setAttribute("for", "Quantity");
  label3.textContent = "Quantity";

  const rightLabel3 = document.createElement("div");
  rightLabel3.className = "right-label";

  const input3 = document.createElement("input");
  input3.type = "text";
  input3.className = "w-full";

  const rightLabelText3 = document.createElement("p");
  rightLabelText3.textContent = "tonnes";
  rightLabelText3.className = "right-label-text";

  rightLabel3.appendChild(input3);
  rightLabel3.appendChild(rightLabelText3);
  formControl3.appendChild(label3);
  formControl3.appendChild(rightLabel3);
  gridContainer.appendChild(formControl3);

  const formControl4 = document.createElement("div");
  formControl4.className = "form-control";

  const label4 = document.createElement("label");
  label4.setAttribute("for", "length");
  label4.textContent = "Length";

  const inputSelect4 = document.createElement("div");
  inputSelect4.className = "input-select";

  const input4 = document.createElement("input");
  input4.type = "text";

  const select4 = document.createElement("select");

  const option4 = document.createElement("option");
  option4.value = "metres";
  option4.textContent = "metres";

  inputSelect4.appendChild(input4);
  inputSelect4.appendChild(select4);
  
  select4.appendChild(option4);

  formControl4.appendChild(label4);
  formControl4.appendChild(inputSelect4);
  gridContainer.appendChild(formControl4);

  const deleteBtnContainer = document.createElement("div");
  deleteBtnContainer.className = "delete-btn";

  const deleteBtn = document.createElement("i");
  deleteBtn.setAttribute("data-feather", "x-circle");
  deleteBtn.className="w-5"

  deleteBtnContainer.addEventListener("click", () => {
    gridContainer.remove(); // Remove the corresponding grid container
  });

  deleteBtnContainer.appendChild(deleteBtn);

  gridContainer.appendChild(deleteBtnContainer);

  const addButton = document.getElementById("addRowBtnWrapper");
  addButton.parentNode.insertBefore(gridContainer, addButton);

  feather.replace();
});

feather.replace();
