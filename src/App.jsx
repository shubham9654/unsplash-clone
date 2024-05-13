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
      });
  };

  return (
    <div className="ui container" style={{ margin: "5vh" }}>
      <SearchBar whenSubmit={handleSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
