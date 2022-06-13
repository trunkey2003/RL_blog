import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {user} from '../model/user';
import axios from "axios";
import Loading from "../components/Loading";

type Props = {
  children: React.ReactNode;
}

export default function IndexLayout({children}: Props) {
  const [user, setUser] = useState<user>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true);
    axios.get('/api/auth/get-user-through-cookie')
      .then(res => {
        const user = {
          name : res.data.name,
          username : res.data.username,
          avatar : res.data.avatar
        };
        setUser(user);
      })
      .catch(() =>{

      })
      .finally(() => setLoading(false));  
  }, []);


  return (
    <>
      {(loading)? <Loading/> : ''}
      <Nav user={user}/>
      <main className="min-h-[100vh]">{children}</main>
      <Footer/>
    </>
  )
};
