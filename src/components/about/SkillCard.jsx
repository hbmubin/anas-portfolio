const SkillCard = ({ img, title }) => {
  return (
    <article className="bg-white px-6 py-14">
      <div className="flex flex-col items-center h-full">
        <div className="flex-1 flex items-center">
          <img className="max-h-28 w-full opacity-50" src={img} alt="img" />
        </div>
        <div>
          <h2 className="grayTitle mt-4">{title}</h2>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
