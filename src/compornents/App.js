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
import { CheckRecruit } from "./CheckRecruit";
import { About } from "./About";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/about/:itemID" element={<About />}/>
          {/* --- 募集関連 */}
          <Route path="/form" element={<Checking />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/check" element={<CheckRecruit />} />
          <Route path="/recruitform" element={<RecruitForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/send" element={<Send />} />
          {/* ---  ログイン関係*/}
          <Route path="/login" element={<Login />} />
          <Route path="/newAccount" element={<NewAccount />} />
          <Route path="/newnewUser" element={<New />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
