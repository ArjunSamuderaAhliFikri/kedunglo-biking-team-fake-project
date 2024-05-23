const ImageCurrentProduct = ({ source, alternative }) => {
  return (
    <div className="w-[350px] h-[250px] ml-8 rounded-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={source}
        alt={alternative}
      />
    </div>
  );
};

export default ImageCurrentProduct;
