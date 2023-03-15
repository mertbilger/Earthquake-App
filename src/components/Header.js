import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import photo from "../assets/header-photo.jpg"


const StyleHeader = styled.div`
  background-image: url(${photo});
  height:15vh;
  padding:0px 80px;
  display: flex;
  align-items: center;
  justify-items: center;

 .menu-container {
flex: 1;
}
nav{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
ul{
  list-style: none;
}
ul li{
      color: #fff;
      text-decoration: none;
      font-size: 26px;
}
ul li:not(:first-child) {
  margin-top:20px
  }
ul li a{
  color: #fff; 
  text-decoration: none;
  list-style: none;
  border-bottom: none;
  transition: font-size 0.4s, border-bottom 2s;

}
ul li a:hover{
  font-size: 28px;
  border-bottom: 2px solid black;
}
    
`;

const Header = () => {
  return (
    <StyleHeader>
      <nav className="menu-container">
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/hakkimizda" >Hakkımızda</Link></li>
        </ul>
      </nav>
    </StyleHeader>

  )
}
export default Header;