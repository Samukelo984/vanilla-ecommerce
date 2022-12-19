const wrapper = document.querySelector(".slider-wrap");
const heroLink = document.querySelectorAll(".hero-link");

heroLink.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
