import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.scss';
import './styles/common.scss';

import Nav from './components/Nav/Nav';

//최현님의 컴포넌트
import LoginHyun from './pages/choihyun/Login/Login';
import MainHyun from './pages/choihyun/Main/Main';

//동선님의 컴포넌트
import LoginSeon from './pages/dongseon/Login/Login';
import MainSeon from './pages/dongseon/Main/Main';

//민경님의 컴포넌트
import LoginMin from './pages/minkyung/Login/Login';
import MainMin from './pages/minkyung/Main/Main';

//윤수의 컴포넌트
import LoginSue from './pages/yoonsue/Login/Login';
import MainSue from './pages/yoonsue/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={</Nav>}
        <Route path="/LoginHyun" element={<LoginHyun />} />
        <Route path="/MainHyun" element={<MainHyun />} />
        <Route path="/LoginSeon" element={<LoginSeon />} />
        <Route path="/MainSeon" element={<MainSeon />} />
        <Route path="/LoginMin" element={<LoginMin />} />
        <Route path="/MainMin" element={<MainMin />} />
        <Route path="/LoginSue" element={<LoginSue />} />
        <Route path="/MainSue" element={<MainSue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
