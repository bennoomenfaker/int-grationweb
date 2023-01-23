import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate,useLocation } from "react-router-dom";



export default function Player(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={require(`../assets/vid/${location.state.selectedvid}`)} autoPlay loop controls muted />
      </div>
    </Container>
  );
}

const Container = styled.div`0
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;