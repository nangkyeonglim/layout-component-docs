import React from 'react';
import * as Layout from '@fine1012/react-layout-component';
import {
  AiOutlineInfoCircle,
  AiOutlineExport,
  AiOutlineHome,
} from 'react-icons/ai';

const BorderBox = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '1rem 2rem' }}>
      {children}
    </div>
  );
};
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...Layout,
  BorderBox,
  AiOutlineInfoCircle,
  AiOutlineExport,
  AiOutlineHome,
};
export default ReactLiveScope;
