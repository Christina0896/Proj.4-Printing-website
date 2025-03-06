import { useState, useEffect } from 'react';
import slide1 from '/src/assets/slideshow1.png';
import slide2 from '/src/assets/slideshow2.png';
import slide3 from '/src/assets/slideshow3.png';

function Slider() {
  // Array containing the image sources for the slideshow
  const images = [slide1, slide2, slide3];
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the current image index every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    // Container for the slideshow with max width and height
    <div className="w-[839px] h-[750px]">
      {/* Image element that displays the current slide */}
      <img src={images[currentIndex]} alt="Slide" className="transition-all duration-700 ease-in-out" />
    </div>
  );
}
export default Slider;
