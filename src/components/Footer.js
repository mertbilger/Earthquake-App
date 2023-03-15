import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
 display:flex;
 width:100%;
 justify-content:center;
 font-family:Helvetica Neue;
 border-top: 1px solid #666;
 font-style: italic;
 font-weight: bold;
 background-color: #C1AFCA;
 margin: 20px 0px;
`;

const Footer = () => {
    return (

        <StyledFooter>
            <p >® 2023 No1 Software Development  ® Mert Bilger</p>
        </StyledFooter>
    )
}
export default Footer;
