import { NavLink } from "react-router-dom";

const About: React.FC = () => {

  return (
    <ul>
      <li><NavLink to="/about">ABOUT</NavLink></li>
      <li><NavLink to="/skills">SKILLS</NavLink></li>
      <li><NavLink to="/works">WORKS</NavLink></li>
      <li><NavLink to="/contacts">CONTACTS</NavLink></li>
    </ul>
  );
};

export default About;
