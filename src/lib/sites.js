/*

Key:
☑️: Fully categorized
✔️: Categoried enough (all of the popular tags)

*/

export const sites = [
  { 
    name: "browsingmode.com",
    url: "https://browsingmode.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrowsingmode-1.png?alt=media",
    tags: ["Websites"],
    categories: { // ☑️
      pattern: "",
      list: ["type/agency", "/category/beauty", "/type/ecommerce", "/category/fashion", "/category/food-drink", "/category/home-living", "/category/media-publishing", "/type/portfolio", "/category/technology"],
      tags: ["Agency", "Beauty & Self-care", "E-commerce", "Fashion", "Food & Drink", "Home & Living", "Media & Publishing", "Portfolios", "Technology"]
    }
  },
  {
    name: "Design Spells",
    url: "https://www.designspells.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fdesign_spells.png?alt=media",
    tags: ["Small Details"],
    categories: { // ✔️
      pattern: "?tag=",
      list: ["mobile", "desktop", "404", "interaction", "button"],
      tags: ["Mobile", "Desktop", "404", "Effects & Animations", "Button"]
    }
  },
  {
    name: "Navbar Gallery",
    url: "https://www.navbar.gallery/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fnavbar_gallery-1.png?alt=media",
    tags: ["Desktop", "Navbar"],
    categories: { // ✔️
      pattern: "type/",
      list: ["search-bar"],
      tags: ["Search"]
    }
  },
  {
    name: "Godly",
    url: "https://godly.website",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fgodly.png?alt=media",
    tags: ["Websites", "Effects & Animations"],
    categories: { // ✖️
      pattern: "/websites/",
      list: ["finance", "web-app", "scrolling-animation", "single-page", "bento-grid", "mobile-app", "desktop-app", "ai", "startup", "education", "e-commerce", "fashion", "3d", "food-and-drink", "technology", "beauty", "portfolio"],
      tags: ["Finance", "Website", "Scrolling Animations", "Single Page", "Grid", "Mobile", "Desktop", "AI", "Startup", "Education", "E-commerce", "Fashion", "3D", "Food & Drink", "Technology", "Beauty & Self-care", "Portfolios"]
    }
  },
  {
    name: "Shape of AI",
    url: "https://www.shapeof.ai/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fshapeofai.png?alt=media",
    tags: ["User Experience", "AI"],
    categories: {} // ✔️
  },
  {
    name: "App Motion",
    url: "https://appmotion.design/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fappmotion.png?alt=media",
    tags: ["Mobile", "Effects & Animations"],
    categories: { // ✔️
      pattern: "tag/",
      list: ["search"],
      tags: ["Search"]
    }
  },
  {
    name: "Cofolios",
    url: "https://www.cofolios.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fcofolios.png?alt=media",
    tags: ["Websites", "Portfolios"],
    categories: {} // ☑️
  },
  {
    name: "Codrops",
    url: "https://tympanus.net/codrops/demos/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fcodrops.png?alt=media",
    tags: ["Websites", "Effects & Animations"],
    categories: { // ✔️
      pattern: "?tag=",
      list: ["scroll", "three-js", "grid", "hover"],
      tags: ["Scrolling Animations", "3D", "Grid", "Hover Effects"]
    }
  },
  {
    name: "Brutalist Websites",
    url: "https://brutalistwebsites.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fbrutalistwebsites.png?alt=media",
    tags: ["Websites", "Brutalist"],
    categories: {} // ☑️
  },
  {
    name: "HOVERSTAT.ES",
    url: "https://www.hoverstat.es/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fhoverstates.png?alt=media",
    tags: ["Websites", "Effects & Animations", "Hover Effects"],
    categories: {}
  },
  {
    name: "Pixelfika",
    url: "https://pixelfika.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fpixelfika.png?alt=media",
    tags: ["Websites", "Color Palettes"],
    categories: {} 
  },
  {
    name: "Refero",
    url: "https://refero.design/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Frefero.png?alt=media",
    tags: [],
    categories: {} // Fonts
  },
  {
    name: "Showcase",
    url: "https://www.showcase.supply/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fshowcase.png?alt=media",
    tags: ["Websites", "Portfolios"],
    categories: {}
  },
  {
    name: "Footer",
    url: "https://www.footer.design/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Ffooter.png?alt=media",
    tags: ["Websites", "Footer"],
    categories: {}
  },
  {
    name: "CallToInspiration",
    url: "https://calltoinspiration.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/tome-cf4b4.appspot.com/o/images%2Fcalltoinspiration.png?alt=media",
    tags: [],
    categories: {}
  },
]

/*
{
    name: "",
    url: "",
    image: "",
    tags: ["Website"],
    categories: {}
  },
*/