const BlacklistItem = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <img src={image} alt="Blacklist Icon" className="mb-6" />
      <h5>{title}</h5>
      <p className="max-w-md text-grayishBlue text-center">
        { description }
      </p>
    </div>
  );
};

export default BlacklistItem;
