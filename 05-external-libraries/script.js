// Toastify popup for today's deal
document.getElementById("dealBtn").addEventListener("click", function() {
  Toastify({
    text: "2-for-1 Pizza Deal Today Only!",
    duration: 4000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #ff5f6d, #ffc371)"
    }
  }).showToast();
});

// Function to switch between tabs
function openTab(tabName) {
  let contents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
