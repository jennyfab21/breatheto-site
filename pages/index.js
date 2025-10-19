export default function ComingSoon() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg,#111,#333)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{fontSize:'3rem',marginBottom:'1rem'}}>BreatheTo</h1>
      <p style={{fontSize:'1.25rem',opacity:.9}}>
        Our new experience is coming soon.<br/>Stay tuned.
      </p>
      <div style={{marginTop:'2rem'}}>
        <a href="mailto:hello@breatheto.com"
           style={{color:'#0ff',textDecoration:'none',fontWeight:'500'}}>
           Get notified →
        </a>
      </div>
      <footer style={{marginTop:'3rem',fontSize:'.75rem',opacity:.6}}>
        © {new Date().getFullYear()} BreatheTo
      </footer>
    </main>
  );
}
