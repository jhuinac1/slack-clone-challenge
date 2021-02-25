// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import db from "./data/Firebase";
//import from firebase data after configuring;

function App() {
  const [rooms, setRooms] = useState([]);
  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  //example of getting daata from database;
  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/">
                <Chat />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  background: #ccc;
  display: grid;
  grid-template-columns: 260px auto;
`;
