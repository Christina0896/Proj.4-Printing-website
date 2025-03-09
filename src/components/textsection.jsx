function TextSection({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-center  text-[40px] leading-12 pb-4"> {title}</h1>
      <p className="w-150 text-center text-[18px] ">{subtitle}</p>
    </div>
  );
}

export default TextSection;
