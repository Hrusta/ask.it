import LoginPage from "./components/LogInPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Home from "./Home";
import QuestionsPage from "./components/Questions/QuestionsPage";
import QuestionMore from "./components/Questions/QuestionMore";

function App(props) {
  const id = props.id;
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="login" element={<LoginPage />} ></Route>
        <Route path="" element={<Home />} ></Route>
        
        <Route path="questions" element={<QuestionsPage />} ></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
