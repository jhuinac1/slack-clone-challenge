import React from "react";
import styled from "styled-components";
function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="user" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Dean George
          <span> 2/23/2021 11:13:55 AM</span>
        </Name>
        <Text>This is the best challenge</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  //   background: orange;
  padding: 8px 20px;
  display: flex;
  cursor: pointer;
  transition-duration: 0.1s;
  :hover {
    background: white;
    box-shadow: 0 0 3px #ccc;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 35px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 12px;
  img {
    width: 100%;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 1.4;
  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`;
const Text = styled.span``;
