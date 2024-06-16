const ImageCurrentProduct = ({ source, alternative }) => {
  return (
    <div className="flex justify-center items-center xl:w-[350px] xl:h-[250px] h-[175px] w-[275px] xl:ml-8 rounded-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={source}
        alt={alternative}
      />
    </div>
  );
};

export default ImageCurrentProduct;
