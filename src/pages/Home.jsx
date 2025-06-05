import { useState,useEffect } from "react";
import { Header } from "../Components/Header";
import Mainhome from "../Components/main/Mainhome";
import { Footer } from "../Components/Footer";
import data from "../data/config";

const Home = () => {
    const [datos,setdatos] = useState({})

    useEffect(()=>{
        setdatos(data)
    },[])
  return (
    <>
      <Header></Header>
      <Mainhome  datos={datos}></Mainhome>
      <Footer></Footer>
    </>
  );
};

export default Home;
