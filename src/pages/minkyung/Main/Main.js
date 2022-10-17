import React from 'react';
import '../Main/Main.scss';
import Nav from '../../../components/Nav/Nav';
import Contents from './Main_contents';
import SideBar from './Main_sidebar';

function Main() {
  return (
    <nav>
      <Nav />
      <div className="forNavTopBar">&nbsp;</div>
      <div className="mains">
        <Contents />
        <SideBar />
      </div>
    </nav>
  );
}

export default Main;
