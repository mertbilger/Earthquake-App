import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const StyleCard = styled.div`
  padding: 20px; 
  margin: 20px;
  background-color: ${props => props.cardcolor};
  border: 6px solid #000;
  width: 65%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left:300px;
  border-radius: 30px;
  
  .p-mag{
    font-size: 40px;
    font-weight: bold;
    margin-left: 80px;
    padding-top: 20px;
    color: #756D6D;

  }
  .card-title{
   color: ${props => props.textColor};
   font-size: 25px;
  }
.p-date{
  padding-top:20px;
  font-size: 25px;
}
.p-depth{

  font-size: 25px;
  margin-left: 10px;

}

  @media (max-width: 768px) {
    width: 60%;
    margin-left: 60px;
  }
`;

function DisasterCard({ e }) {
  let cardColor;
  let textColor;
  if (e.mag > 6) {
    cardColor = "#FF5757";
    textColor = "red";
  } else if (e.mag > 4) {
    cardColor = "#F59494";
  } else if (e.mag >= 2) {
    cardColor = "#FFD99F";
  } else if (2 > e.mag > 0) {
    cardColor = "lightgray";
  }

  return (
    <StyleCard cardcolor={cardColor} textColor={textColor}>
      <div className="Card-Container">
        <h3 className="card-title">{e.title}</h3>
        <p className="p-date">{e.date}</p>
        <p className="p-mag">{e.mag}</p>
        <p className="p-depth">Derinlik : {e.depth} KM</p>
        <p className="" >{e.rev}</p>


      </div>
    </StyleCard>
  );
}



const Disaster = () => {
  const [disasters, setDisasters] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  const Scroll = () => {
    const intervalId = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(intervalId);
      }
      window.scrollTo(0, window.scrollY - 502);
    }, 16);
  };


  const TotalMoreFunction = () => {
    Scroll();
    handleMoreButtonClick();
  }

  const TotalBackFunction = () => {
    Scroll();
    handleBackButtonClick();
  }


  useEffect(() => {
    axios
      .get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live")
      .then((response) => {
        const Slice = response.data.result.slice(startIndex, endIndex);
        setDisasters(Slice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [startIndex, endIndex]);

  const handleMoreButtonClick = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 8);
  };


  const handleBackButtonClick = () => {
    if (startIndex - 8 < 0) {
      setStartIndex(0);
      setEndIndex(8);
      // console.log("başlangıç indexi 0 dan küçük olamaz");Buraya bir alert yazılabilir
    } else {
      setStartIndex(startIndex - 8);
      setEndIndex(startIndex);

    }
  };


  return (
    <div>


      {disasters.map((e) => (
        <DisasterCard key={e.id} e={e} />
      ))}

      <div className="more-btn-container">
        <IoChevronBackCircleOutline className="back-btn" onClick={TotalBackFunction} />
        <button className="more-btn" onClick={TotalMoreFunction}>
          Daha Fazla Göster
        </button>
      </div>

    </div>

  );
};

export default Disaster;