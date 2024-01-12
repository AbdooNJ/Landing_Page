/**
 * Define Global Variables
 *
 */
const nav_list = document.querySelector("#navbar__list");
const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navListMaker() {
  for (const section of sections) {
    // cretae li and link
    const nav_element = document.createElement("li");
    const nav_link = document.createElement("a");
    //get each section name
    const section_name = section.getAttribute("data-nav");
    // crete the text and the link for a
    nav_link.className = "menu__link";
    nav_link.textContent = section_name;
    nav_link.href = `#${section.id}`;
    // append link to list
    nav_element.appendChild(nav_link);
    nav_list.appendChild(nav_element);
  }
}
//call the function
navListMaker();
// Add class 'active' to section when near top of viewport
function addActiveClass(element) {
  element.classList.add("active-class");
  element.style.cssText =
    "background:linear-gradient( 90deg,rgba(131, 58, 180, 1) 0%,rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);";
}
// return the top and height of the view view
function viewDiemnsion(element) {
  return [
    Math.floor(element.getBoundingClientRect().top),
    Math.floor(element.getBoundingClientRect().height),
  ];
}
// remove active class
function removeActiveClass(element) {
  element.classList.remove("active-class");
  element.style.cssText =
    "background: linear-gradient( 0deg,rgba(0, 0, 0, 0.1) 0%,rgba(0, 0, 0, 0) 100%);";
}
let navLinks = document.querySelectorAll(".menu__link");
//scroll event listener
window.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    //decleare section and link
    const section = sections[i];
    const link = navLinks[i];
    //get the top and height to decleare the middle of the view
    const [top, height] = viewDiemnsion(section);
    const middle = top + height / 2;
    //binary if the view is the in the middle of the section
    const in_view =
      middle >= 0 &&
      middle <= (window.innerHeight || document.documentElement.clientHeight);
    if (in_view) {
      addActiveClass(section);
      addActiveClass(link);
    } else {
      removeActiveClass(section);
      removeActiveClass(link);
    }
  }
});
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
// Get all the navigation links

// Add click event listener to each navigation link
for (const link of navLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // Get the target section from the link's href attribute
    const targetSection = document.querySelector(link.getAttribute("href"));
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
