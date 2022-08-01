import React from 'react'
import styled from 'styled-components'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`
const Description = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RAF GAMES</Logo>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          alias distinctio autem corporis explicabo porro, laboriosam nesciunt
          similique expedita placeat sunt nam incidunt quam error dicta
          excepturi tempore ratione optio!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center></Center>

      <Right></Right>
    </Container>
  );
}
