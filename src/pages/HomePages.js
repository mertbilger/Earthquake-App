import React from 'react'
import Disaster from '../components/Disaster';
import styled from 'styled-components';
import video from "../assets/bg-video.mp4";





const StyleHomePages = styled.div`
.more-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;

}
.video {
  position: absolute;
  top: 3.7%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 20%;
 }


.more-btn{
    
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    border: 4px solid #000;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 20%;
    height: auto;

}

@media (max-width: 768px) {
  .more-btn {
    width: 50%;
  }
}
.back-btn{
  height: 60px;
  width: 3%;
  margin-right: 15px;
  color: #000;
}

@media (max-width: 768px) {
  .back-btn {
    width: 20%;
    left: 0;

  }
}


    
`;


const HomePages = () => {

  return (
    <StyleHomePages>
      <video id="video-bg" className="video" preload="auto" autoplay="" loop="true" poster="images/banner-bg.jpg" src={video} type="video/mp4"></video>

      <Disaster />
      

    </StyleHomePages>


  )
}

export default HomePages;