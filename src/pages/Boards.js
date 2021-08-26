import React from "react";
import Sidebar from '../components/sidebar/Sidebar'
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../images/logo.svg'

const Header = styled.section`
  height: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #ffffff ;
  padding: 3rem calc((100vw - 1300px) / 2);
  
`;

const Body = styled.div`
  display: flex;
  height: 100vh;
  padding: 10px 22px;
`;

const Image = styled(motion.img)`
 position: absolute;
 width: 100%;
  height: 150%;
  max-width: 250px;
  max-height: 300px;
`;

const Boards = () => {
  return (
    <div>
      <Sidebar />
      <Header>
        <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            Welcome to Twogather
        </motion.h1>
      </Header>
      <Body>
        Here we can explain the boards
        <Image
          src={logo}
          alt="globe"
          whileTap={{scale: 0.6}}
          drag={true}
          dragConstraints={{ left: 50, rigth: 0, top: 0, bottom: 50}}
          initial={{ opacity: 0, x: 100}}
          animate={{ opacity: 1, x: 0, transition: {duration: 1}}}
      />
      </Body>
      
    </div>
  )
}

export default Boards
