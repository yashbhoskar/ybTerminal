import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  return (
    <div className='about'>
      <h3>About Me</h3>
      <p>
        ~👋 Hi, I'm <span className='commands'>Yash Bhoskar</span>,from Pune, India.
      </p>
      <p>
        ~🎓 I'm recet BTech graguate from College of Engineering Pune.
      </p>
      <p>
        ~💻 Currently, I'm working as Software Engineer at Automaton Ai Infosystem.</p>
      {/* <p>
        ~🌟 Feel free to explore more by typing the "
        <span className='commands'>github</span>",
        "<span className='commands'>skils</span>",
        "<span className='commands'>projects</span>"
        command in the terminal.
      </p> */}
      <p>
        ~📫 You can reach out to me through my social media profiles. Just type the "<span className='commands'>socials</span>" command to find my contact details.
      </p>
      {/* <p>
        ~⚡️ Let's connect and build something amazing together!
      </p> */}
      <br />
      <p>Days I <span className='commands mb-3'>Code</span>.</p>
      <GitHubCalendar
        username="yashbhoskar"
        blockSize={10}
        blockMargin={3}
        color="#c084f5"
        fontSize={15}
      />
    </div>
  );
};

export default About;
