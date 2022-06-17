import React from 'react';
import './App.css';
import BlogContainer from './components/BlogContainer';
import ConceptContainer from './components/ConceptContainer';
import ExperienceContainer from './components/ExperienceContainer';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import UserData from './components/UserData';


function App() {
  return (
    <div className='App'>
      <UserData contactLink="#" headline="Welcome to my Portfolio" description="
      I’m Mete. I’m 24-year-old. I’m a Digital 
      Product Designer who prioritizes simplicity 
      and usability. Currently, I'm Digital Product
      Designer on Norma. Formerly Enrich Mobile, ASDC, 
      TalentMondo, and MobileUpp. I love working on side 
      projects, trying to improve myself on SwiftUI and Webflow."/>
      <BlogContainer/>
      <ConceptContainer/>
      <ExperienceContainer/>
      <FeedbackForm/>
      <Footer/>
    </div>
  );
}

export default App;
