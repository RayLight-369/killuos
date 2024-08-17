// require( "dotenv" ).config();

export const NavLinks = [
  {
    name: "Home",
    path: "/"
  }, {
    name: "Contact",
    path: "/contact"
  }, {
    name: "Services",
    path: "/services"
  }
];

export const Credentials = {
  "template_id": process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  "user_id": process.env.REACT_APP_EMAILJS_USER_ID
};


export const services = {
  "Front-end Web Development": {
    tags: [ "UI", "UX", "Front-end Development", "Web Development", "Web Application" ],
    img: "/Imgs/circle.svg",
    desc: "Our website development service focuses on building responsive, high-quality websites tailored to your brand's needs. We ensure a seamless user experience and robust functionality, helping your business thrive online."
  },
  "Web Designing": {
    tags: [ "UI", "UX", "Front-end", "Web Design", "Designing" ],
    img: "/Imgs/design.svg",
    desc: "Our web design service creates beautiful, easy-to-use websites that fit your brand. We focus on simple navigation, great looks, and layouts that work on all devices to make sure your business stands out online."
  },
};
