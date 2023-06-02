const AboutMe = () => {
  return (
    <div className="mt-24 px-40">
      <div className="mt-10 flex items-center justify-between">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1655635949384-f737c5133dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
            className="w-[22rem] h-[32rem] rounded-[10rem] object-cover"
          />
          <div className="w-[22rem] h-[32rem] bg-purple-200 rounded-[10rem] -top-10 left-12 absolute -z-50 rotate-[10deg]"></div>
        </div>
        <div>
          <h3 className="text-pink-400 text-lg font-bold uppercase mb-2">
            About Me
          </h3>
          <span className="text-base">
            Hello! I'm Khadijah Abubakar, a passionate and dedicated coder with
            a <br />
            thirst for learning and a love for creating meaningful digital{' '}
            <br />
            experiences. With one year of coding experience under my belt, I am{' '}
            <br />
            constantly seeking out new challenges and opportunities to expand my{' '}
            <br />
            knowledge and skills...
            <br />
          </span>
          <button className="bg-pink-400 h-10 w-36 px-2 text-white text-sm rounded-2xl uppercase mt-6">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
