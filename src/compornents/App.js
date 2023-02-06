// import "../scss/_develop/asset.scss";
// ---
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { RecruitForm } from "./RecruitForm";
import { Detail } from "./Detail";
import { Send } from "./Send";
import { Login } from "./Login";
import { New } from "./New";
import { Recruitment } from "./Recruitment";
import { Confirmation } from "./Confirmation";
import { Checking } from "./Checking";
// ---
import {Route, Routes } from "react-router-dom";
import { NewAccount } from "./NewAccount";
import { MyPage } from "./MyPage";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<Detail />} />
          {/* --- 募集関連 */}
          <Route path="/Checking" element={<Checking />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/recruitform" element={<RecruitForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/send" element={<Send />} />
          {/* ---  ログイン関係*/}
          <Route path="/login" element={<Login />} />
          <Route path="/newAccount" element={<NewAccount />} />
          <Route path="/new" element={<New />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
