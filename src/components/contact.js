import React from "react";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const ContactStyle = styled.div`

.box{
display:flex;
margin-top: 25px;
 width:100%;
 height: 250px;
 justify-content:center;
 font-family:Helvetica Neue;
 font-style: italic;
 font-weight: bold;
 background-color: #C1AFCA;
 border-top: 3px solid #666;

}


.inp-mail{
    display: flex;
    margin-top: 50px;
    width: 300px;
    text-align: center;
    height: 40px;
    border-radius: 35px;
    border: 6px solid #000;

}
.ins{
    margin-top: 150px;
    position: absolute;
    margin-right: 180px;
    
}
.send{
    margin-top: 58px;
    margin-left: 20px;
}
.mail{
    margin-top: 144px;
    position: absolute;
    margin-left: 80px;
}
`;


const Contact = () => {
    const handleInstagramClick = () => {
        window.location.href = "https://www.instagram.com/mertbilgerr/";
      };
      const handleMailClick = () => {
        const inputText = document.querySelector('.inp-mail').value;
        const mailtoUrl = `mailto:mertblgr0202@gmail.com?subject=${encodeURIComponent('Bize Ulaşmak İçin')}&body=${encodeURIComponent(inputText)}`;
        window.location.href = mailtoUrl;
      };
      
      
    return (
        <ContactStyle>
            <div className="box">
                <input onClick={handleMailClick} className="inp-mail" type="text" placeholder="Bize Ulaşmak İçin..." />
                <IoSend className="send" size="40px" color="white" />
                <BsInstagram onClick={handleInstagramClick} className="ins" size="50px" color="white" />
                <IoMdMail className="mail" size="60px" color="white" />

            </div>


        </ContactStyle>

    )
}

export default Contact