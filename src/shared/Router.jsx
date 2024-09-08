import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from './PrivateRouter';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Join from '../pages/Join';
import MyPage from '../pages/MyPage';
import Test from '../pages/Test';
import List from '../pages/List';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import Result from '../pages/Result';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/join" element={<PublicRouter page={<Join />} />} />
          <Route path="/login" element={<PublicRouter page={<Login />} />} />

          <Route path="/mypage" element={<PrivateRouter page={<MyPage />} />} />
          <Route path="/test" element={<PrivateRouter page={<Test />} />} />

          <Route path="/list" element={<List />} />
          <Route path="/result" element={<PrivateRouter page={<Result />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Router;
