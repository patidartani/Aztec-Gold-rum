import React from 'react';
import {Routes, Route} from "react-router-dom"
import FetchNews from './Component/FetchNews';
import NewsDetail from './Component/NewsDetail';


const App = () => {
  return (
    <div>
         <Routes>
          <Route path='/'  element={<FetchNews/>}/>
          <Route path="/NewsDetail/:id" element={<NewsDetail />} />
         </Routes>
                   
    </div>
  )
}

export default App







































// import React, { useState } from 'react';

// function ImageUpload() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);

//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       {previewImage && <img src={previewImage} alt="Preview" />}
//     </div>
//   );
// }

// export default ImageUpload;






























