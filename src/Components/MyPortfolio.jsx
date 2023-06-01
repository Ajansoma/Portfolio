import fiverrImg from '../assets/fiverr.png';
import nasaImg from '../assets/nasa.png';
import accountsImg from '../assets/accounts.png';
import MyPortfolioItem from '../UI/MyPortfolioItem';

const MyPortfolio = () => {
  return (
    <div className="px-40 pb-16 mt-32">
      <h3 className="text-pink-400 text-xl font-bold pb-8">My Portfolio</h3>
      <MyPortfolioItem
        className="flex items-center gap-24"
        img={fiverrImg}
        githubLink="https://github.com/Ajansoma/freelance-app"
        demoLink="https://freelance-frontend-81f3.onrender.com"
        number="01"
        projectDetails="Hello! I'm Khadijah Abubakar, a passionate and dedicated coder with a thirst for learning and a love for creating meaningful digital experiences. With one year of coding experience under my belt, I am constantly seeking out new challenges and opportunities to expand my knowledge and skills."
      />
      <MyPortfolioItem
        img={nasaImg}
        className="flex justify-start items-center gap-24 flex-row-reverse mt-28"
        githubLink="https://github.com/Ajansoma/NASA"
        demoLink="https://nasa-9vxg.onrender.com/"
        number="02"
        projectDetails="Successfully built an application that utilises data from the NASA Exoplanet Archive to identify habitable planets in space. By presenting the data in a user-friendly interface, users can explore and gain insights into various planets, furthering their understanding of our universe. Built with the technologies of  React, NodeJs, Express, MongoDB."
      />
      <MyPortfolioItem
        className="flex items-center gap-24 mt-28"
        img={accountsImg}
        githubLink="https://github.com/Ajansoma/Acc-Expense"
        demoLink="https://acc-track.netlify.app/"
        number="03"
        projectDetails="Spearheaded the creation of an application that streamlines the order management process for businesses with automated profit and loss calculations. Users can efficiently track their financial performance and make data-driven decisions. Built with the  technologies of  React, CSS, Firebase."
      />
    </div>
  );
};

export default MyPortfolio;
