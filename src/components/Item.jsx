const Item = ({ title, description }) => {
  return (
    <div>
      <h5>
        { title }
      </h5>
      <p className="max-w-md text-grayishBlue">
       { description }
      </p>
    </div>
  );
};

export default Item;
