import { useState, useRef } from 'react';

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  const onImgLoad = () => {
    const height = imageRef.current.offsetHeight;
    const calculatedSpans = Math.ceil(height / 10 + 1);
    setSpans(calculatedSpans);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(urls.regular);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'image.jpg');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowStart: `span ${spans}` }} className='relative'>
      <img
        onLoad={onImgLoad}
        ref={imageRef}
        alt={description}
        src={urls.regular}
      />
      <img src="/download.svg" className='!w-8 h-8 absolute bottom-[20px] left-0 cursor-pointer' onClick={handleDownload} />
    </div>
  );
};

export default ImageCard;
