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
