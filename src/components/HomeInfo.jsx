import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ title, text, link, btnText }) => (
  <div className='info-box'>
    {title && <h1 className='info-title text-2xl font-bold mb-2 text-center'>{title}</h1>}
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    {link && (
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' alt='Arrow' />
      </Link>
    )}
  </div>
);

const renderContent = {
    1: (
      <InfoBox
        title='Welcome Aboard!'
        text="Hey, I'm Fahmi, ready for a digital journey with you!"
      />
    ),
    2: (
      <InfoBox
        title='My Web Odyssey'
        text="With 2 years of web development experience, I've gathered a treasure trove of skills for our adventure!"
        link='/about'
        btnText='Discover more'
      />
    ),
    3: (
      <InfoBox
        title='Projects that Echo'
        text="Behold the echoes of impactful projects! Navigate to my portfolio and witness the resonance."
        link='/projects'
        btnText='Visit portfolio'
      />
    ),
    4: (
      <InfoBox
        title='Let’s Unleash Creativity'
        text="In search of a developer to unravel your challenges? Let's chat and weave the tapestry of solutions!"
        link='/contact'
        btnText='Chat with me'
      />
    ),
  };
  

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
