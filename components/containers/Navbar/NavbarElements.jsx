import styled from "styled-components";

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: none;
  font-family: 'Montserrat', sans-serif;
`;

export const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  display: none;
  margin-top: 30px;
  
  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const Logo = styled.img`
padding: 2rem 0;
height 69px;
width: 69px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1000px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 15px;
  border-bottom: 2px solid transparent
  color: white;
background :
background : ackground: 
linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)),
linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
background-size: 100% 0.1em, 0 0.1em;
background-position: 100% 100%, 0 100%;
background-repeat: no-repeat;
transition: background-size 400ms;
  float:left;
&:hover {
    color: #f00946;
    transform: scale(1.2);
    transition: all 0.3s ease;
}
&:hover, &focus {
    background-size: 0 0.1em, 100% 0.1em;
}
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
@media(max-width: 750px) {
  height: 140px;
  transform: skew(-10deg) rotate(2deg);
  -webkit-transform: skew(-10deg) rotate(2deg);
  -moz-transform: skew(-10deg) rotate(2deg);
margin: 10px;
}
@media(min-width: 1500px) {
}
`;

export const MenuButton = styled.a`
  border-radius: 15px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: transparent;
  border: 1px solid gray;
  color: white;
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  .nav-buttons {
    color: white;
    text-decoration: none;
  }
 .nav-buttons:hover {
    color: red;
  }
`;