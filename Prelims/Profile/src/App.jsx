import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css'; 

const App = () => (
  <>
    <Header />
    <div className="container">
      <Body />
      <Body proffesion="Student"
    profile= "https://media1.tenor.com/images/0feea583d55e9cd03f2cc6dce194e66e/tenor.gif?itemid=16411939" 
    name= "Neliel"
    school= "Bleach Academy"
    course= "Bachelor of Science in Espada"
    hobby = {["Running", "Fighting", "Hitting", "Puzzles and Games", "Traveling", "Music", "Team Sports"]}
    age= {17}
    address= "Hueco Mundo"
    twitter= "https://youtu.be/dQw4w9WgXcQ?si=ZZL-uyTDHkHh8gzX"
    facebook= "https://youtu.be/dQw4w9WgXcQ?si=ZZL-uyTDHkHh8gzX"
    github= "https://youtu.be/dQw4w9WgXcQ?si=ZZL-uyTDHkHh8gzX"
    mail= "mailto:pasingjun@gmail.com"/>
    </div>

    <Footer />
  </>
);

export default App;
