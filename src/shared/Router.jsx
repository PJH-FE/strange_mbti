import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Join from '../pages/Join';
import MyPage from '../pages/MyPage';
import Test from '../pages/Test';
import List from '../pages/List';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<PrivateRouter page={<MyPage />} />} />

          <Route path="/test" element={<PrivateRouter page={<Test />} />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
