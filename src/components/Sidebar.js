import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItemsData } from "../data/sidebarData";

//firebase
import db from "../data/Firebase";
function Sidebar(props) {
  const addChannel = () => {
    const channelName = prompt("Enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <Container className="dark-mode">
      <WorkSpaceContainer>
        <Name>Clever Programmer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => {
          return (
            <MainChannelItem key={item.text}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          );
        })}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((channel) => {
            return <Channel key={channel.id}># {channel.name}</Channel>;
          })}
        </ChannelsList>
      </ChannelsContainer>
      <ThemesContainer>
        <ThemesTitle> Themes</ThemesTitle>
        <AllThemes>
          <OriginalTheme></OriginalTheme>
          <ThemeOne></ThemeOne>
        </AllThemes>
      </ThemesContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  // background: #3f0e40; //Original theme
  // background: #22223b; //theme 1 Dark
  background: rgb(8, 15, 28); //Theme 2 dark
  color: white;
  border-right: 1px solid rgb(37, 64, 114);
`;
const WorkSpaceContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 1.2em;
  justify-content: space-between;
  // border-bottom: 1px solid #532753; //original theme
  border-bottom: 1px solid #4a4e69; // theme 1 dark mode
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1.5em;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 1888);
  display: grid;
  grid-template-columns: 15% auto;
  text-align: left;
  height: 28px;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    // background: #350d36; //Original Theme
    background: #f4978e; //Theme 1 Dark mode
    color: #22223b;
  }
`;

const ChannelsContainer = styled.div`
  margin-top: 10px;
  color: rgb(188, 171, 1888);
`;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
  svg {
    cursor: pointer;
  }
  svg:hover {
    color: white;
    fill: white;
  }
`;

const ChannelsList = styled.div``;
const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 19px;

  :hover {
    // background: #350d36; //Original Theme
    background: #f4978e; //Theme 1 Dark mode
    color: #22223b;
  }
`;

const ThemesContainer = styled.div`
  padding: 19px;
`;

const ThemesTitle = styled.div`
  color: rgb(188, 171, 1888);
`;
const AllThemes = styled.div`
  margin-top: 1em;

  button {
    height: 20px;
    width: 20px;
    border: 1px solid #8d99ae;
    border-radius: 3px;
    margin-right: 1em;
  }
`;

const ThemeOne = styled.button`
  background: #22223b;
`;
const OriginalTheme = styled.button`
  background: #3f0e40;
`;
