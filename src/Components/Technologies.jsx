import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import mongoDB from '../assets/mongodb.png';
import TechIcons from '../UI/TechIcons';

const Technologies = () => {
  return (
    <div className="mt-24 px-40">
      <h3 className="text-pink-400 text-xl font-bold pb-10 uppercase">
        Technologies and Skills
      </h3>
      <div className="grid grid-cols-3 gap-10">
        <TechIcons src={html} name="html" />
        <TechIcons src={css} name="css" />
        <TechIcons src={tailwind} name="tailwind" />
        <TechIcons src={node} name="node" />
        <TechIcons src={mongoDB} name="mongoDB" />
      </div>
    </div>
  );
};

export default Technologies;
