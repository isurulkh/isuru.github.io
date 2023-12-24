import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 0)
  return (
      <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue  py-4 px-8 text-white mx-5 '>
      Hi, I am <span className="font-semibold text-yellow-500">Isuru</span> 👋
      <br/>
      A Machine Learning/AI Engineer 🤖 and a digital marketing specialist 📈 From Sri Lanka 🇱🇰.
      </h1>
  );

  if (currentStage === 1)
    return (
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue  py-4 px-8 text-white mx-5 '>
        Hi, I am <span className="font-semibold text-yellow-500">Isuru</span> 👋
        <br/>
        A Machine Learning/AI Engineer 🤖 and a digital marketing specialist 📈 From Sri Lanka 🇱🇰.
        </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Worked with many clients and companies  <br /> to help them grow their business.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Learned and worked on many projects to learn new technologies and improve my skills.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Want to work with me or just want to say hi? Feel free to contact me.
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;