'use client'

import Typewriter from './Typewriter'

export default function Hero() {
  const typewriterStrings = [
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder",
    "Problem Solver"
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Yıldız Arka Planı */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #000011, #000033, #000066)'
      }}>
        {/* Sol taraftaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '50px', left: '100px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '120px', left: '150px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '80px', left: '200px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '200px', left: '80px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '300px', left: '120px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '180px', left: '180px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '250px', left: '220px', boxShadow: '0 0 4px white'}}></div>
        
        {/* Orta taraftaki yıldızlar */}
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '90px', left: '400px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '220px', left: '500px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '150px', left: '450px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', top: '280px', left: '550px', boxShadow: '0 0 6px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '320px', left: '480px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '100px', left: '520px', boxShadow: '0 0 4px white'}}></div>
        
        {/* Sağ taraftaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '70px', left: '700px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '180px', left: '800px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '250px', left: '750px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '350px', left: '850px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '130px', left: '780px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '290px', left: '720px', boxShadow: '0 0 4px white'}}></div>
        
        {/* Çok sağ taraftaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '110px', left: '950px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '240px', left: '1000px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '170px', left: '1050px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '310px', left: '1100px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '90px', left: '1150px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '200px', left: '1200px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '280px', left: '1250px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', top: '150px', left: '1300px', boxShadow: '0 0 6px white'}}></div>
        
        {/* En sağ taraftaki yıldızlar - Çok geniş ekranlar için */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '80px', left: '1400px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '190px', left: '1500px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '260px', left: '1450px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '330px', left: '1550px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '140px', left: '1600px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '210px', left: '1650px', boxShadow: '0 0 4px white'}}></div>
        
        {/* Ultra sağ taraftaki yıldızlar - Çok çok geniş ekranlar için */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '60px', left: '1700px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '130px', left: '1750px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '220px', left: '1800px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '290px', left: '1850px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '100px', left: '1900px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '180px', left: '1950px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '250px', left: '2000px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', top: '320px', left: '2050px', boxShadow: '0 0 6px white'}}></div>
        
        {/* Ekstra ultra sağ yıldızlar */}
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '70px', left: '2100px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '160px', left: '2150px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '240px', left: '2200px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '300px', left: '2250px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '110px', left: '2300px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '200px', left: '2350px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '270px', left: '2400px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '340px', left: '2450px', boxShadow: '0 0 5px white'}}></div>
        
        {/* Üst taraftaki yıldızlar */}
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '20px', left: '300px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '30px', left: '600px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '15px', left: '900px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '25px', left: '1100px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '18px', left: '1400px', boxShadow: '0 0 2px white'}}></div>
        
        {/* Alt taraftaki yıldızlar */}
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '500px', left: '200px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '550px', left: '400px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '480px', left: '700px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '520px', left: '900px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '490px', left: '1100px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '530px', left: '1200px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '510px', left: '1400px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '540px', left: '1500px', boxShadow: '0 0 2px white'}}></div>
        
        {/* Daha alt kısımlardaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '600px', left: '100px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '650px', left: '300px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '580px', left: '500px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '620px', left: '700px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '670px', left: '900px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '590px', left: '1100px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '640px', left: '1300px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', top: '680px', left: '1500px', boxShadow: '0 0 6px white'}}></div>
        
        {/* En alt kısımlardaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '700px', left: '150px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '750px', left: '400px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '720px', left: '600px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '780px', left: '800px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '730px', left: '1000px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '760px', left: '1200px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '710px', left: '1400px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '790px', left: '1600px', boxShadow: '0 0 5px white'}}></div>
        
        {/* Çok alt kısımlardaki yıldızlar - Scroll için */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '800px', left: '200px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '850px', left: '450px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '820px', left: '700px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '880px', left: '950px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '830px', left: '1150px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '860px', left: '1350px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '810px', left: '1550px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', top: '890px', left: '1700px', boxShadow: '0 0 6px white'}}></div>
        
        {/* Sağ alt kısımlardaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '800px', left: '1800px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '850px', left: '2000px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '820px', left: '2200px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '880px', left: '2400px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '830px', left: '2600px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '860px', left: '2800px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '810px', left: '3000px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', top: '890px', left: '3200px', boxShadow: '0 0 6px white'}}></div>
        
        {/* En sağ alt kısımlardaki yıldızlar */}
        <div className="star-twinkle" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '900px', left: '1900px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '950px', left: '2100px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle-fast" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '920px', left: '2300px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '980px', left: '2500px', boxShadow: '0 0 5px white'}}></div>
        <div className="star-twinkle-slow" style={{position: 'absolute', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%', top: '930px', left: '2700px', boxShadow: '0 0 3px white'}}></div>
        <div className="star-pulse-glow" style={{position: 'absolute', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', top: '960px', left: '2900px', boxShadow: '0 0 4px white'}}></div>
        <div className="star-twinkle" style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: 'white', borderRadius: '50%', top: '910px', left: '3100px', boxShadow: '0 0 2px white'}}></div>
        <div className="star-float" style={{position: 'absolute', width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', top: '990px', left: '3300px', boxShadow: '0 0 5px white'}}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="block">Legendary</span>
          <span className="block text-purple-400">Portfolio</span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 min-h-[2rem]">
          <Typewriter
            strings={typewriterStrings}
            speed={100}
            delay={2000}
            className="font-mono"
          />
        </div>

        {/* CTA Button */}
        <button className="btn btn-primary btn-lg text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          View Work
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none"></div>
    </section>
  )
} 