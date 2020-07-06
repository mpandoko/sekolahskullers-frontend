// Coba button
const btn = document.querySelector("nav .btn span");

btn.addEventListener("click", () => {
  btn.innerHTML = "Ucup Surucup";
});

// Pindah bagian aktif
const items = document.querySelectorAll(".nav-item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((e) => {
      e.classList.remove("active");
    });
    item.classList.add("active");
  });
});
