export default function Footer() {
    const footerStyle = {
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      padding: '10px',
    };
  
    const hrStyle = {
      margin: 0,
    };
  
    return (
      <footer style={footerStyle}>
        <hr style={hrStyle} />
        <p>&copy; {new Date().getFullYear()} Final Project || Written by: Jun Pasing & Ceolo Kanapi</p>
      </footer>
    );
  }
  