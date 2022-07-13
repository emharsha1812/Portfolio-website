import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-between h-screen ">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
