import React from "react";
import Sidebar from '../components/sidebar/Sidebar'
import styled from "styled-components";
import { motion } from "framer-motion";

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
  align-items: center;
`;

const Boards = () => {
  return (
    <div>
      <Sidebar />
      <Body className="welcome">
        <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            Welcome to GerGather
        </motion.h1>
      </Body>
      
    </div>
  )
}

export default Boards
