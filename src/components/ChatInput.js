import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import MoodIcon from "@material-ui/icons/Mood";

import Picker from "emoji-picker-react";
function ChatInput() {
  const [isEmojiPickerRendered, setEmojiPickerRendered] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  // window.addEventListener("mouseup", (e) => {
  //   if (e.target !== document.getElementsByClassName("emoji-picker-react")) {
  //     if (
  //       e.currentTarget !==
  //       document.getElementsByClassName("emoji-picker-react")
  //     ) {
  //       setEmojiPickerRendered(false);
  //     }
  //   }
  // });
  const onEmojiClick = (event, emojiObject) => {
    setMessageInput(messageInput + emojiObject.emoji);
  };
  const renderEmojiPicker = (e) => {
    e.preventDefault();
    setEmojiPickerRendered(!isEmojiPickerRendered);
  };

  const setMessage = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setEmojiPickerRendered(false);
    if (messageInput === "") {
      return;
    }
    // console.log(messageInput);
    //reset the text input and hide emoji picker
    setMessageInput("");
  };

  return (
    <Container>
      {isEmojiPickerRendered && (
        <Emojis>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </Emojis>
      )}
      <InputContainer>
        <form>
          <input
            type="text"
            placeholder="Message here..."
            onChange={setMessage}
            value={messageInput}
          />
          <AdditionalButtons>
            <MoodIcon onClick={renderEmojiPicker} />
          </AdditionalButtons>

          <SendButton>
            <Send onClick={sendMessage} />
          </SendButton>
        </form>
      </InputContainer>
      {/* <Picker onEmojiClick={onEmojiClick} /> */}
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 0 1.5em 1.5em 1.5em;
  position: relative;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 1em;

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      background: transparent;
    }
    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.div`
  background: rgb(188, 171, 1888);
  border-radius: 2px;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;

  svg {
    width: 20px;
  }
`;

const Send = styled(SendIcon)`
  color: #22223b;
`;

const AdditionalButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  svg {
    cursor: pointer;
  }
`;

const EmojiPicker = styled(Picker)``;

const Emojis = styled.div`
  margin: 0;
  position: absolute;
  bottom: 4.3em;
  right: 1em;
`;
