// HeroIntro.jsx
import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-royalGradient">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-48 h-48 rounded-full bg-futureBlue shadow-blueGlow"
      />

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-6xl font-display mt-8"
      >
        Future Tech. Pocket Sized Power.
      </motion.h1>

      <div className="mt-8 flex gap-6">
        <button className="bg-white text-futureBlue px-6 py-3 rounded-full hover:shadow-goldGlow transition-all">
          Deploy Gadget
        </button>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-futureBlue transition">
          Enter Gadget Lab
        </button>
      </div>
    </section>
  );
}
// GadgetCard.jsx
import { motion } from "framer-motion";

export default function GadgetCard({ name, image }) {
  return (
    <motion.div
      whileHover={{ rotateY: 8, rotateX: 8, scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
    >
      <img src={image} alt={name} className="mb-4 rounded-xl" />
      <h3 className="text-xl font-display">{name}</h3>
      <button className="mt-4 bg-futureBlue px-4 py-2 rounded-full hover:shadow-goldGlow">
        Retrieve from Pocket
      </button>
    </motion.div>
  );
}
// GadgetGrid.jsx
import GadgetCard from "./GadgetCard";

const gadgets = [
  { name: "CyberFan 2099", image: "/images/fan.png" },
  { name: "Nano Cooler X", image: "/images/cooler.png" },
  { name: "Pocket Drone", image: "/images/drone.png" },
];

export default function GadgetGrid() {
  return (
    <section className="py-24 px-12 grid md:grid-cols-3 gap-8">
      {gadgets.map((gadget, i) => (
        <GadgetCard key={i} {...gadget} />
      ))}
    </section>
  );
}
// MysteryBox.jsx
import { useState } from "react";

const rewards = [
  "10% Discount Code",
  "Free Shipping",
  "Secret Gadget Unlock",
  "Limited Edition Skin",
];

export default function MysteryBox() {
  const [reward, setReward] = useState(null);
  const openBox = () => setReward(rewards[Math.floor(Math.random() * rewards.length)]);

  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-display mb-6">Open Future Capsule</h2>
      <button
        onClick={openBox}
        className="bg-bellGold text-black px-8 py-3 rounded-full shadow-goldGlow"
      >
        Reveal Surprise
      </button>
      {reward && <p className="mt-6 text-xl text-bellGold">🎉 {reward}</p>}
    </section>
  );
}
// DoraHelper.jsx
import { useState } from "react";

export default function DoraHelper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-futureBlue shadow-blueGlow text-white text-2xl flex items-center justify-center"
      >
        🤖
      </button>
      {open && (
        <div className="fixed bottom-24 right-8 w-80 bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-black">
          <h3 className="font-display text-lg mb-2">Hello Explorer 👋</h3>
          <p>I am Dora-Helper from the 22nd Century. What gadget are we deploying today?</p>
        </div>
      )}
    </>
  );
        }
// FloatingDock.jsx
export default function FloatingDock() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex gap-6 shadow-lg">
      <button className="hover:scale-125 transition">🏠</button>
      <button className="hover:scale-125 transition">🧪</button>
      <button className="hover:scale-125 transition">🎁</button>
      <button className="hover:scale-125 transition">🛒</button>
      <button className="hover:scale-125 transition">🤖</button>
    </div>
  );
}
// ReviewsCarousel.jsx
import { motion } from "framer-motion";

const reviews = [
  "Purchased in 2026. Still ahead of my timeline. — Tokyo Beta User",
  "My room feels like a sci-fi anime now. — Neo Kyoto",
  "Cooling module is insane. — Future-Explorer 77",
];

export default function ReviewsCarousel() {
  return (
    <section className="py-24 bg-royalDark text-white">
      <h2 className="text-3xl font-display text-center mb-8">Reviews from the Future</h2>
      <motion.div
        className="flex gap-8 overflow-x-auto px-12"
        animate={{ x: [-10, 0, -10] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        {reviews.map((r, i) => (
          <div key={i} className="min-w-[300px] bg-white/10 p-6 rounded-2xl shadow-lg">
            {r}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-royalDark py-12 text-center text-white">
      <p className="text-lg">The Future is Already in Your Pocket. 🚀</p>
    </footer>
  );
}
import React from "react";
import HeroIntro from "./components/HeroIntro";
import GadgetGrid from "./components/GadgetGrid";
import MysteryBox from "./components/MysteryBox";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FloatingDock from "./components/FloatingDock";
import DoraHelper from "./components/DoraHelper";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroIntro />
      <GadgetGrid />
      <MysteryBox />
      <ReviewsCarousel />
      <FloatingDock />
      <DoraHelper />
      <Footer />
    </div>
  );
}

export default App;
