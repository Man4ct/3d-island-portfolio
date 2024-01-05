import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span>Fahmi</span>
    </h1>
  ),
  2: (
    <InfoBox
      text='Have been in the Industry of Web Development for 2 years and have picked up many skills along the way'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text='Have done some impactful project along the year, click to see more'
      link='/projects'
      btnText='Visit portfolio'
    />
  ),
  4: (
    <InfoBox
      text='Looking for a dev to solve your problem? Im just a few keystrokes away'
      link='/contact'
      btnText='Lets talk'
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;
