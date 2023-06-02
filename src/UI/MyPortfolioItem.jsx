const MyPortfolioItem = (props) => {
  const { img, githubLink, demoLink, number, projectDetails, className } =
    props;
  return (
    <div className={className}>
      <img
        src={img}
        className="h-80 w-[30rem] object-cover rounded-2xl hover:scale-110 duration-300"
      />
      <div className="flex flex-col ">
        <span className="text-[4rem] font-bold text-pink-200">{number}</span>
        <span>{projectDetails}</span>
        <div className="flex gap-5">
          <a
            className="bg-pink-400 h-10 w-36 px-2 text-white text-sm rounded-2xl uppercase mt-6 hover:scale-110 hover:bg-purple-400 duration-300"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center mt-2 pl-1"> Github</div>
          </a>
          <a
            className="bg-pink-400 h-10 w-36 px-2 text-white text-sm rounded-2xl uppercase mt-6 hover:scale-110 hover:bg-purple-400 duration-300"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center mt-2 pl-1 ">Demo</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolioItem;
