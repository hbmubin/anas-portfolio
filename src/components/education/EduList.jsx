const EduList = ({ title, des }) => {
  return (
    <article>
      <h2 className="subTitle text-white mb-4">{title}</h2>
      <p className="text-gray-300">{des}</p>
    </article>
  );
};

export default EduList;
