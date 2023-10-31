const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.querySelector("ul");

if (menu) {
  menu.addEventListener("click", () => {
    // console.log("heool");
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    // console.log("hello");
    nav.classList.remove("active");
  });
}
