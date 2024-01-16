const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionDescription = this.nextElementSibling;
    const plusicon = this.querySelector(".plus-icon");
    const minusicon = this.querySelector(".minus-icon");

    if (accordionDescription.style.maxHeight) {
      accordionDescription.style.maxHeight = null;
      plusicon.style.display = "block";
      minusicon.style.display = "block";
    } else {
      accordionDescription.style.maxHeight =
        accordionDescription.scrollHeight + "px";
      plusicon.style.display = "none";
      minusicon.style.display = "block";
    }
  });
});
