import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css'; 



const App = () => (
  <>
    <Header />
    <div className="container">
    <Body 
    name="KB X1000" 
    profile="https://images.app.goo.gl/KLL1WyYRSLXKkWQV9"
    description="The KB-X1000 is..."
    specifications={["Switch Type: Cherry MX Red", "Key Layout: Full-size..."]}
    features={["Customizable RGB Backlighting", "Mechanical Switches..."]}
    setupInstructions={["Carefully remove...", "Plug the USB cable..."]}
    troubleshooting={["Ensure the USB connection...", "Try connecting..."]}
    maintenance={["Disconnect for cleaning...", "Use a soft cloth..."]}
    warranty="Warranty Period: 2 years from purchase."
    contact="For support, contact 1-800-555-1234."
/>

    </div>

    <Footer />
  </>
);

export default App;
