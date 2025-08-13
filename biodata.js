
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("main-content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 1500); 
});
