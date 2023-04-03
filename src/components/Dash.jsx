import React, { Suspense,useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 900px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

function Home (){
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);
 


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyCaSJ8Jzr6OZasuUnn-g7_hqH9vuphV4Xk&strategy=mobile`
      );
     console.log(response);

      setAnalysisResults(response.data.lighthouseResult);
  
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Welcome to speedester</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Optimize your website's performance and unleash its full potential with our lightning-fast speed test</Subtitle>
          </WhatWeDo>
          <Desc>
          Thanks for puting the website link to analyze          </Desc>

          <form onSubmit={handleSubmit}>
          <p className="wb">website Link</p>
          <input type="text" className="input" placeholder="Entrez le lien ici" value={url} onChange={(e) => setUrl(e.target.value)} />
          <button className="button-one ">Analyser</button>
        </form>
        {loading && <p>Loading...</p>}

{error && <p>Error: {error}</p>}

{analysisResults && (
  <div>
    <h2>Performance Analysis</h2>
    <ul>
            <li>
              <strong>First Contentful Paint:</strong>{" "}
              {analysisResults.audits["first-contentful-paint"].displayValue}
            </li>
            <li>
              <strong>Speed Index:</strong>{" "}
              {analysisResults.audits["speed-index"].displayValue}
            </li>
            <li>
              <strong>Total Blocking Time:</strong>{" "}
              {analysisResults.audits["total-blocking-time"].displayValue}
            </li>
            <li>
              <strong>Largest Contentful Paint:</strong>{" "}
              {analysisResults.audits["largest-contentful-paint"].displayValue}
            </li>
            <li>
              <strong>Cumulative Layout Shift:</strong>{" "}
              {analysisResults.audits["cumulative-layout-shift"].displayValue}
            </li>
          </ul>
    
  </div>
)}


        </Left>
        
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          
        </Right>
        </Container>
    </Section>
  );
};

export default Home;
