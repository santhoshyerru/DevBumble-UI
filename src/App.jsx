import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import { BASE_URL } from "./utils/constants"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import Connections from "./components/Connections"
import Requests from "./components/Requests"

function App() {
  const user = useSelector((store) => store.user);
  const fetchUser = async () => {
    try{
      const res = await fetch(BASE_URL + "/profile");
      return res;
    }
    catch(err){
        console.log(err);
    }
  }
  useEffect(() => {
    if(user)
      fetchUser();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
