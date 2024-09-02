document.querySelector(".btn.btn-secondary").addEventListener("click", function(e) {
    e.preventDefault();
    
    var moreContent = document.getElementById("moreContent");
    var readMoreBtn = this;  // Using 'this' to refer to the button that was clicked

    moreContent.style.display = moreContent.style.display === "none" || moreContent.style.display === "" ? "block" : "none";

    if (moreContent.style.display === "block") {
        readMoreBtn.textContent = "Read Less";
    } else {
        readMoreBtn.textContent = "Read More";
    }
});
