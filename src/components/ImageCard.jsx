import { useState, useRef } from 'react';

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  const onImgLoad = () => {
    const height = imageRef.current.offsetHeight;
    const calculatedSpans = Math.ceil(height / 10 + 1);
    setSpans(calculatedSpans);
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }} className='relative'>
      <img
        onLoad={onImgLoad}
        ref={imageRef}
        alt={description}
        src={urls.regular}
      />
    </div>
  );
};

export default ImageCard;
