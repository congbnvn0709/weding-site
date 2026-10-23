import React, { useState } from 'react';
import { WaxSealIntro } from './components/WaxSealIntro';
import { HeaderMusic } from './components/HeaderMusic';
import { HeroSection } from './components/HeroSection';
import { CoupleStory } from './components/CoupleStory';
import { EventTimeline } from './components/EventTimeline';
import { Gallery } from './components/Gallery';
import { RsvpSection } from './components/RsvpSection';
import { Guestbook } from './components/Guestbook';
import { GiftBox } from './components/GiftBox';
import { Footer } from './components/Footer';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicTrigger, setMusicTrigger] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setMusicTrigger(true);
  };

  return (
    <div className="min-h-screen bg-linen-100 font-sans text-charcoal-800">
      {/* 1. Wax Seal Envelope Intro Screen */}
      {!isOpen && <WaxSealIntro onOpen={handleOpenEnvelope} />}

      {/* Floating Audio Controller */}
      <HeaderMusic autoPlayTrigger={musicTrigger} />

      {/* Main Wedding Invitation Website */}
      <main className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero & Countdown */}
        <HeroSection />

        {/* Bride & Groom Story */}
        <CoupleStory />

        {/* Wedding Event Timeline & Location */}
        <EventTimeline />

        {/* Photo Gallery */}
        <Gallery />

        {/* RSVP Attendance Confirmation */}
        <RsvpSection />

        {/* Guestbook Wishing */}
        <Guestbook />

        {/* Wedding Gift Box (VietQR) */}
        <GiftBox />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
