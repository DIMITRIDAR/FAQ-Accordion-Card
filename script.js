let mainItems = document.querySelectorAll(".faq-item");
let faqAnswer = document.querySelectorAll(".faq-answer");
let active = null;

mainItems.forEach(function (mainItem) {
  mainItem.addEventListener("click", function (e) {
    let faqAnswer = mainItem.querySelector(".faq-answer");
    if (active) {
      active.style.display = "none";
      if (faqAnswer === active) {
        faqAnswer.style.display = "none";
        active = null;
        mainItem.querySelector(".arrow").style.transform = "rotate(0deg)";
        mainItem.querySelector(".faq-question").style.fontWeight = "400";
      } else {
        faqAnswer.style.display = "block";
        active = faqAnswer;
        mainItem.querySelector(".faq-question").style.fontWeight = "700";
        mainItem.querySelector(".arrow").style.transform = "rotate(180deg);";
      }
    }
  });
});
