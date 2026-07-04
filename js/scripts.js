const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("last-modified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}
