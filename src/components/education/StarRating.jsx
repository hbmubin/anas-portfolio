const StarRating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="flex gap-[2px] text-xl text-amber-500">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index}>
            {starValue <= rating ? (
              <span>★</span> // Filled star
            ) : (
              <span>☆</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
