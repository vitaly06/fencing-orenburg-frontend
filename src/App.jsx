import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Federation from "./pages/Federation/Federation";
import Club from "./pages/Club/Club";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="federation" element={<Federation/>} />
      <Route path="club" element={<Club/>}/>
    </Routes>
  )
}

