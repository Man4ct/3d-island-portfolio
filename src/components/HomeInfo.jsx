import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ title, text, link, btnText }) => (
  <div className='info-box'>
    {title && <h1 className='info-title text-2xl font-bold mb-2 text-center'>{title}</h1>}
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' alt='Arrow' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      title='Welcome!'
      text="Hi, I am Fahmi"
    />
  ),
  2: (
    <InfoBox
      title='Web Development Journey'
      text='Have been in the Industry of Web Development for 2 years and have picked up many skills along the way'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      title='Impactful Projects'
      text='Have done some impactful projects along the year, click to see more'
      link='/projects'
      btnText='Visit portfolio'
    />
  ),
  4: (
    <InfoBox
      title='Let’s Discuss'
      text='Looking for a developer to solve your problem? I’m just a few keystrokes away'
      link='/contact'
      btnText='Let’s talk'
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
