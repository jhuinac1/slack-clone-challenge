import React from "react";
import styled from "styled-components";
import AccesssTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
  return (
    <Container>
      <Main>
        <AccesssTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        {/* name and image */}
        <Name>Johnny</Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="user-pic-profile" />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  // background: #350d36; //Original
  // background: #22223b; //Theme One (dark)
  background: rgb(8, 15, 28); //Theme 2 dark mode
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;
const Main = styled.div`
  display: flex;
  margin: 0 1em;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 1em;
`;
const Search = styled.div`
  width: 100%;
  // box-shadow: inset 0 0 0 1px rgb(104 74 104); //original theme
  box-shadow: inset 0 0 0 1px rgb(37, 64, 114); //Dark theme 2
  border-radius: 6px;

  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    outline: none;
    color: white;
    width: 90%;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 1em;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  img {
    width: 100%;
  }
`;
