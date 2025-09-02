'use client'

export default function StarfieldWrapper() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -10,
      background: 'linear-gradient(to bottom, #000011, #000033, #000066)'
    }}>
      {/* Basit yıldızlar */}
      <div style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: '100px',
        left: '100px',
        boxShadow: '0 0 4px white'
      }}></div>
      
      <div style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: '200px',
        left: '200px',
        boxShadow: '0 0 4px white'
      }}></div>
      
      <div style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: '300px',
        left: '300px',
        boxShadow: '0 0 4px white'
      }}></div>
      
      <div style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: '150px',
        left: '400px',
        boxShadow: '0 0 6px white'
      }}></div>
      
      <div style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: '250px',
        left: '500px',
        boxShadow: '0 0 6px white'
      }}></div>
    </div>
  );
} 