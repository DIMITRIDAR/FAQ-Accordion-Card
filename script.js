document.addEventListener("DOMContentLoaded", function () {
  let active = null;
  let mainItems = document.querySelectorAll(".faq-item");
  mainItems.forEach(function (mainItem) {
    mainItem.addEventListener("click", function (e) {
      let faqAnswer = mainItem.querySelector(".faq-answer");
      if (active !== null) {
        active.querySelector(".faq-answer").style.display = "none";
        active.querySelector(".arrow").style.transform = "rotate(0deg)";
        active.querySelector(".faq-question").style.fontWeight = "400";
      }
      if (active !== mainItem) {
        faqAnswer.style.display = "block";
        mainItem.querySelector(".arrow").style.transform = "rotate(180deg)";
        mainItem.querySelector(".faq-question").style.fontWeight = "700";
        active = mainItem;
      } else {
        faqAnswer.style.display = "none";
        mainItem.querySelector(".arrow").style.transform = "rotate(0deg)";
        mainItem.querySelector(".faq-question").style.fontWeight = "400";
        active = null;
      }
    });
  });
});
