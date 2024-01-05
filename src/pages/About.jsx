const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I am{' '}
        <span className='blue-gradient_text font-semibold drop-shadow-sm'>
          Fahmi
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Indonesia, specializing in technical
          education by hands-on learning and building applications{' '}
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12"></div>
      </div>
    </section>
  );
};
export default About;
