import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from './PrivateRouter';
import Main from '../pages/Main';
import Login from '../pages/login/Login';
import MyPage from '../pages/mypage/MyPage';
import Test from '../pages/test/Test';
import List from '../pages/list/List';
import Result from '../pages/Result';
import Layout from '../layout/Layout';
import Join from '../pages/join/Join';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />

            <Route path="/join" element={<PublicRouter page={<Join />} />} />
            <Route path="/login" element={<PublicRouter page={<Login />} />} />

            <Route path="/mypage" element={<PrivateRouter page={<MyPage />} />} />
            <Route path="/test" element={<PrivateRouter page={<Test />} />} />

            <Route path="/list" element={<List />} />
            <Route path="/result" element={<PrivateRouter page={<Result />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
