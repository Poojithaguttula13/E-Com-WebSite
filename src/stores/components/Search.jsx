import React, { useState } from 'react'
import { menData } from '../data/men' 
import { booksData } from '../data/books'
import { acData } from '../data/ac'
import { computerData } from '../data/computers'
import { fridgeData } from '../data/fridge'
import { furnitureData } from '../data/furniture'
import { kitchenData } from '../data/kitchen'
import { mobileData } from '../data/mobiles'
import { speakerData } from '../data/speaker'
import { tvData } from '../data/tv'
import { watchData } from '../data/watch'
import { womanData } from '../data/woman'

const Search = () => {

    
    const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

//   const allData = [...proData];
  const allData = [...menData, ...booksData, ...acData, ...computerData, ...fridgeData, ...furnitureData, ...kitchenData, ...mobileData, ...speakerData, ...tvData, ...watchData, ...womanData];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = allData.filter((item) => {
      return (
        item.product?.toLowerCase().includes(term) ||
        item.type?.toLowerCase().includes(term) ||
        item.brand?.toLowerCase().includes(term) ||
        item.model?.toLowerCase().includes(term) ||
        item.title?.toLowerCase().includes(term) ||
        item.author?.toLowerCase().includes(term) ||
        item.category?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term)
      );
    });

    setResults(filtered);
  };

  return (
    <>
        <div>
      <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />

      {searchTerm && (
        <div style={{ marginTop: '20px' }}>
          <h3>Search Results:</h3>
          {results.length === 0 && <p>No products found.</p>}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                <img src={item.image} alt={item.title || item.model} style={{ width: '100px', marginRight: '10px' }} />
                <div>
                  <strong>{item.title || item.model || item.type}</strong><br />
                  <span>{item.brand || item.author}</span><br />
                  <span>${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
    </>
  )
}

export default Search



// import React, { useState } from 'react';
// import { menData } from '../data/men';
// import { booksData } from '../data/books';
// import { acData } from '../data/ac';
// import { computerData } from '../data/computers';
// import { fridgeData } from '../data/fridge';
// import { furnitureData } from '../data/furniture';
// import { kitchenData } from '../data/kitchen';
// import { mobileData } from '../data/mobiles';
// import { speakerData } from '../data/speaker';
// import { tvData } from '../data/tv';
// import { watchData } from '../data/watch';
// import { womanData } from '../data/woman';

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   // Merging all the data into one array
//   const allData = [
//     ...menData,
//     ...booksData,
//     ...acData,
//     ...computerData,
//     ...fridgeData,
//     ...furnitureData,
//     ...kitchenData,
//     ...mobileData,
//     ...speakerData,
//     ...tvData,
//     ...watchData,
//     ...womanData
//   ];

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     // Filtering the merged data based on the search term
//     const filtered = allData.filter((item) => {
//       return (
//         (item.product && item.product.toLowerCase().includes(term)) ||
//         (item.type && item.type.toLowerCase().includes(term)) ||
//         (item.brand && item.brand.toLowerCase().includes(term)) ||
//         (item.model && item.model.toLowerCase().includes(term)) ||
//         (item.title && item.title.toLowerCase().includes(term)) ||
//         (item.author && item.author.toLowerCase().includes(term)) ||
//         (item.category && item.category.toLowerCase().includes(term)) ||
//         (item.description && item.description.toLowerCase().includes(term))
//       );
//     });

//     setResults(filtered);
//   };

//   return (
//     <>
//       <div style={{ padding: '20px' }}>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={handleSearch}
//           style={{ width: '300px', padding: '10px', fontSize: '16px' }}
//         />

//         {searchTerm && (
//           <div style={{ marginTop: '20px', maxHeight: '400px', overflowY: 'auto' }}>
//             <h3>Search Results:</h3>
//             {results.length === 0 && <p>No products found.</p>}
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               {results.map((item) => (
//                 <li
//                   key={item.id}
//                   style={{
//                     marginBottom: '10px',
//                     borderBottom: '1px solid #ddd',
//                     paddingBottom: '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title || item.model}
//                     style={{ width: '100px', marginRight: '10px' }}
//                   />
//                   <div>
//                     <strong>{item.title || item.model || item.type}</strong>
//                     <br />
//                     <span>{item.brand || item.author}</span>
//                     <br />
//                     <span>${item.price}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Search;
