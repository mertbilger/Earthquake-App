import React from "react";
import styled from "styled-components";
import video from "../assets/bg-video.mp4";


const StyleAboutPages = styled.div`
 .video {
  position: absolute;
  top: 3.7%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 20%;
 }
 .p-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 120px;
}

p {
  font-size: 16px;
  font-weight: bolder;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.5;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
}

 
`;

const AboutPages = () => {
  return (
    <StyleAboutPages>
      <div >
        <video id="video-bg" className="video" preload="auto" autoplay="" loop="true" poster="images/banner-bg.jpg" src={video} type="video/mp4"></video>
        <div className="p-container">
          <p>Bir hata olasılığı daima mevcuttur; bu nedenle, kodlama yaratıcılıktır ve sorun çözmedir.</p>
        </div>
      </div>
    </StyleAboutPages>

  );
};

export default AboutPages;