import Image from "next/image";
import "./page.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileInfo from "./components/ProfileInfo";
import Experiences from "./components/Experiences";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="container">
        <Hero />
        <ProfileInfo />
        <Experiences />
      </div>
      
    </main>
  );
}
