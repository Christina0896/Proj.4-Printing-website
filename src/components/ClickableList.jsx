import { useState } from 'react';
import Image2 from '/src/assets/mainsection2-img2.png';
import Image3 from '/src/assets/mainsection2-img3.png';
import Image4 from '/src/assets/mainsection2-img4.png';
import Image5 from '/src/assets/mainsection2-img5.png';

const list = [
  {
    title: 'Premium quality custom t-shirts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur.',
    imageUrl: Image2,
  },
  {
    title: 'Easy to create & customize',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur.',
    imageUrl: Image3,
  },
  {
    title: 'Thousands of free templates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur.',
    imageUrl: Image4,
  },
  {
    title: 'Free standard shipping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur.',
    imageUrl: Image5,
  },
];

function ClickableList() {
  const [selectedList, setSelectedList] = useState(list[0]);
  const [openList, setOpenList] = useState(null);

  const toggleList = (index) => {
    if (openList === index) {
      setOpenList(null); // Closes the dropdown if clicking the same item
    } else {
      setOpenList(index); //// Opens the selected dropdown
      setSelectedList(list[index]); // Updates image
    }
  };
  return (
    <div className="mainSection2 flex ">
      {/* Left Side: List with Dropdown */}
      <div className="list-container w-124 h-136">
        {list.map((list, index) => (
          <div key={index} className="list-feature">
            <div className={`selected-item ${openList === index ? 'active' : ''}`} onClick={() => toggleList(index)}>
              {list.title}
            </div>

            {/* Collapsible Description */}
            {openList === index && (
              <div className="list-description">
                <p>{list.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Changing Image */}
      <div className="img-container w-230 h-136">
        <img src={selectedList.imageUrl} alt={selectedList.title} className="list-image" />
      </div>
    </div>
  );
}

export default ClickableList;
