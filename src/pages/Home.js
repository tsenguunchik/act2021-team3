import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import globe from  '../images/globe.svg'
import Saly from  '../images/Saly.svg'
import sully from  '../images/sully.svg'
import Ellipse from  '../images/Ellipse.svg'
import {Link} from "react-router-dom"

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #282c34 ;
  
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  color: #FFFFFF;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 2rem;
    line-height: 1.1;
  }
`;
const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #F76C6C;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #FFFFFF;
`;
const Image = styled(motion.img)`
 position: absolute;
 width: 100%;
  height: 150%;
  max-width: 250px;
  max-height: 300px;
`;
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1){
    top: 270px;
    left: 100px;
  }
  ${Image}:nth-child(2){
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(3){
    top: 430px;
    left: 300px;
  }
  ${Image}:nth-child(4){
    top: 5px;
    left: 10px;
  }
`;

const Home = () => {
  const fadeLeft = {
      hidden: { opacity: 0, x: -100},
      visible: { opacity: 1,x: 0}
  };
  return (
      <Section>
          <Container>
              <ColumnLeft>

                  <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  >
                      Welcome to GerGather
                  </motion.h1>
                  <motion.p
                  variant={fadeLeft}
                  initial='hidden'
                  animate='visible'
                  transition={{duration: 1}}
                  >
                      GerGather is the way to build a community – of Mongolian students and professionals.
                  </motion.p>
                  <Link to="/sign-up">
                  <Button
                  whileHover={{ scale: 1.05}}
                  whileTap={{
                      scale: 0.95,
                      backgroundColor: '#F76C6C',
                      border: 'none',
                      color: '#000'
                  }}
                  initiale={{ opacity: 0}}
                  animate={{ opacity: 1, transition: { duration: 1.5}}}
                  >
                      Get Started
                  </Button>
                  </Link>
              </ColumnLeft>
              <ColumnRight>
                  <Image
                      src={globe}
                      alt="globe"
                      whileTap={{scale: 0.6}}
                      drag={true}
                      dragConstraints={{ left: 50, rigth: 0, top: 0, bottom: 50}}
                      initial={{ opacity: 0, x: 100}}
                      animate={{ opacity: 1, x: 0, transition: {duration: 1}}}
                  />
                  <Image
                      src={Ellipse}
                      alt="globe"
                      whileTap={{scale: 0.9}}
                      drag={true}
                      dragConstraints={{ left: 0, rigth: 250, top: 0, bottom: 50}}
                      initial={{ opacity: 0, y: -100}}
                      animate={{ opacity: 1, y: 0, transition: {duration: 1}}}
                  />

                  <Image
                      src={sully}
                      alt="globe"
                      whileTap={{scale: 0.9}}
                      drag={true}
                      dragConstraints={{ left: 0, rigth: 0, top: 0, bottom: 50}}
                      initial={{ opacity: 0, y: 100}}
                      animate={{ opacity: 1, y: 0, transition: {duration: 1}}}
                  />
                  <Image
                      src={Saly}
                      alt="globe"
                      whileTap={{scale: 0.8}}
                      drag={true}
                      dragConstraints={{ left: 0, rigth: 250, top: 0, bottom: 50}}
                      initial={{ opacity: 0, x: -100}}
                      animate={{ opacity: 1, x: 0, transition: {duration: 1}}}
                  />


              </ColumnRight>
          </Container>
      </Section>


  );
}

export default Home;