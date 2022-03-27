
const btnCategory = document.querySelector(".btn-category");
const dropdownContentItemArray = document.querySelectorAll(".dropdown-content-item");
const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
})

btnCategory.addEventListener("click", (e) => {
    e.preventDefault();
})

dropdownContentItemArray.forEach(
    (item) => {
        item.addEventListener("click", (e) => {
            btnCategory.innerText = item.textContent.trim();    
        })
    }
);

