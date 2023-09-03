var menu = [
  "Ramada plaza & Dar Tower",
  "Hampton by Hilton",
  "Sunrise",
  "Era Palace",
];

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination", // Use your custom pagination container
    clickable: true, // Make pagination buttons clickable
  },
});
