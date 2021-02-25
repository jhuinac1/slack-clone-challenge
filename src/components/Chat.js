import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
function Chat() {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Title># clever</Title>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Header>

        <Details>
          <Name>Details</Name>
          <Info />
        </Details>
      </HeaderContainer>

      <MessageContainer>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </MessageContainer>
      <ChatInput></ChatInput>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  // background: white; //Original theme
  // background: #4a4e69; //Theme 1 Dark mode
  // background: #081527; //Theme 2 Dark Mode
  background: rgb(201, 216, 242); //Theme 2 Dark Mode
  color: #333333;
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const HeaderContainer = styled.div`
  border-bottom: 1px solid #f0efeb;
  // border-bottom: 1px solid rgb(83, 32, 23);
  border-bottom: 1px solid rgb(37, 64, 114);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;
const Header = styled.div``;
const Title = styled.h3`
  margin: 0;
`;

const Info = styled(InfoIcon)`
  margin-left: 10px;
`;
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #545454;
`;
const Details = styled.div`
  display: flex;

  // svg {
  //   fill: white;
  //   background: black;
  //   border-radius: 50%;
  // }
`;
const Name = styled.div`
  padding-right: 10px;
`;

const MessageContainer = styled.div``;
