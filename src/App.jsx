import { useState } from 'react';

import "./index.css"
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar.jsx';
import ImageList from './components/ImageList.jsx';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (term) => {
    unsplash.get('/search/photos', {
      params: {
        query: term,
        per_page: 30
      }
    })
      .then(response => {
        setImages(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setImages([])
      });
  };

  return (
    <div className="ui container" style={{ margin: "5vh" }}>
      <SearchBar whenSubmit={handleSearchSubmit} />
      {
        images.length > 0 ? (
          <ImageList images={images} />

        ) : <div className='w-full flex items-center justify-center mt-5 md:mt-20'>
          <img src='/giphy.webp' className='w-[400px]' />
        </div>
      }
    </div>
  );
};

export default App;
