import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backvid from "../assets/backvid.mp4";


import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";

import Slider from "../components/Slider";
function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
      <video src={backvid} autoPlay muted loop id="myVideo"/>
      </div>
      
      <Slider movies={[
        {id: 1,
         name: 'How Machine Learning works ',
         image: 'how machine learning work.jpeg',
         vid:'How Machine Learning works.mp4',
         genres:  ['Machine Learning']
       },
       {  id: 2,
         name: 'Internet of Things explained simply',
         image: 'iot.png',
         vid:'Internet of Things explained simply.mp4',
         genres:  ['Iot']
       },
       {  id: 3,
        name: 'What is Internet of Things',
        image: 'What is Internet of Things.webp',
        vid:'What is Internet of Things.mp4',
        genres:  ['Iot']
      },
      {  id: 4,
        name: 'What is html and css',
        image: 'What is html and css.webp',
        vid:'What is html and css.mp4',
        genres:  ['web dev','html','css']
      },
      {  id: 5,
        name: 'What is Python ',
        image: 'python.png',
        vid:'What is Python.mp4',
        genres:  ['web dev','python']
      },
      { id: 6,
        name:     'DeepLearning',
        image:   'Comprendre le DeepLearning.png',
        vid:     'DeepLearning.mp4',
        genres:  ['Machine Learning','Deep Learning']
      },
      { id: 7,
        name:     'learn react',
        image:   'learn react.png',
        vid:     'learn react.mp4',
        genres:  ['react','web dev']
      },
      { id: 8,
        name:     'html/css cours',
        image:   'html cours.jpg',
        vid:     'htmlcss cours.mp4',
        genres:  ['html/css','web dev']
      },
      { id: 9,
        name:     'react',
        image:   'react.png',
        vid:     'react.mp4',
        genres:  ['react','web dev']
      },
      {  id: 10,
        name: 'What is html and css',
        image: 'What is html and css.webp',
        vid:'What is html and css.mp4',
        genres:  ['web dev','html','css']
      },
      {  id: 10,
        name: 'Deep Learning',
        image: 'Deep Learning.jpg',
        vid:'Deep Learning.mp4',
        genres:  ['Machine Learning','Deep Learning']
      },
      {  id: 11,
        name: 'why learn python',
        image: 'why learn python.png',
        vid:'Why.mp4',
        genres:  ['python']
      },
      {id: 12,
        name: 'How Machine Learning works ',
        image: 'how machine learning work.jpeg',
        vid:'How Machine Learning works.mp4',
        genres:  ['Machine Learning']
      },
      {id: 13,
        name: 'ia',
        image: 'ia2.png',
        vid:'iaa.mp4',
        genres:  ['Machine Learning','ia']
      },
      {id: 14,
        name: 'ia',
        image: 'bd.jpg',
        vid:'bd.mp4',
        genres:  ['Machine Learning','ia']
      },


      {id: 15,
        name: 'ia',
        image: 'ia.png',
        vid:'ia.mp4',
        genres:  ['Machine Learning','ia']
      },















]} />
    
    
    
    
    
    
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    
    #myVideo {
     
      right: 0;
      bottom: 0;
     width: 100%;
      height: 100%;
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;
