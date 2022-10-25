import React from 'react'
import Header from './header'
import LeftSidebar from './leftSidebar';
import Results from './results';
import RightSidebar from './rightSidebar';

const Body = () => {
  return (
    <div>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Results />
    </div>
  );
}

export default Body