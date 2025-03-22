const blockHome = () => {
  document.getElementById("about-section").style.display = "none";
  document.getElementById("projects-section").style.display = "none";
  document.getElementById("blog-section").style.display = "none";
  document.getElementById("contact-section").style.display = "none";
  document.getElementById("banner-section").style.display = "block";
  document.getElementById("banner-section").style.display = "flex";
}
const blockAbout = () => {
  document.getElementById("banner-section").style.display = "none";
  document.getElementById("projects-section").style.display = "none";
  document.getElementById("blog-section").style.display = "none";
  document.getElementById("contact-section").style.display = "none";
  document.getElementById("about-section").style.display = "block";
  document.getElementById("about-section").style.marginTop = "70px";
  document.getElementById("about-section").style.marginBottom = "200px";
}
const blockProjects = () => {
  document.getElementById("banner-section").style.display = "none";
  document.getElementById("about-section").style.display = "none";
  document.getElementById("projects-section").style.display = "block";
  document.getElementById("blog-section").style.display = "none";
  document.getElementById("contact-section").style.display = "none";
}
const blockBlog = () => {
  document.getElementById("banner-section").style.display = "none";
  document.getElementById("about-section").style.display = "none";
  document.getElementById("projects-section").style.display = "none";
  document.getElementById("blog-section").style.display = "block";
  document.getElementById("contact-section").style.display = "none";
}
const blockContact = () => {
  document.getElementById("banner-section").style.display = "none";
  document.getElementById("about-section").style.display = "none";
  document.getElementById("projects-section").style.display = "none";
  document.getElementById("blog-section").style.display = "none";
  document.getElementById("contact-section").style.display = "block";
}