document.addEventListener("DOMContentLoaded", function () {
  let mainItems = document.querySelectorAll(".faq-item");
  mainItems.forEach(function (mainItem) {
    mainItem.addEventListener("click", function (e) {
      let faqAnswer = mainItem.querySelector(".faq-answer");
      if (faqAnswer.style.display === "block") {
        faqAnswer.style.display === "none";
        mainItem.querySelector(".arrow").style.transform = "rotate(0deg)";
        mainItem.querySelector(".faq-question").style.fontWeight = "400";
      } else {
        faqAnswer.style.display = "block";
        mainItem.querySelector(".arrow").style.transform = "rotate(180deg)";
        mainItem.querySelector(".faq-question").style.fontWeight = "700";
      }
    });
  });
});
