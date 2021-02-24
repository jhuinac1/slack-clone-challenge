import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
function Chat() {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Title># clever</Title>
          <Subtitle>Company-wide announcements and work-based matters</Subtitle>
        </Header>

        <Details>
          <Name>Details</Name>
          <InfoIcon />
        </Details>
      </HeaderContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  // background: white; //Original theme
  background: #4a4e69; //Theme 1 Dark mode
  color: #f2e9e4;
`;

const HeaderContainer = styled.div`
  height: 64px;
  border-bottom: 1px solid #f0efeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;
const Header = styled.div``;
const Title = styled.h3`
  margin: 0;
`;
const Subtitle = styled.div``;
const Details = styled.div`
  display: flex;

  svg {
    fill: white;
    background: black;
    border-radius: 50%;
  }
`;
const Name = styled.div`
  padding-right: 10px;
`;
