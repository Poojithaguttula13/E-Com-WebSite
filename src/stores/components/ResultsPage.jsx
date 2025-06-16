// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const ResultsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { results = [], term = '' } = location.state || {};

//   if (!location.state) {
//     return <p style={{ padding: '20px' }}>No search term provided. <button onClick={() => navigate('/')}>Go Back</button></p>;
//   }

//   return (
//     <>
//     <div>
//         <Navbar />
//     </div>
//         <div style={{ padding: '20px' }}>
//       <h2>Search Results for "{term}"</h2>
//       {results.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {results.map((item) => (
//             <li key={item.id} style={{ display: 'flex', marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
//               <img src={item.image} alt={item.title || item.model} style={{ width: '100px', marginRight: '10px' }} />
//               <div>
//                 <strong>{item.title || item.model || item.product}</strong><br />
//                 <span>{item.brand || item.author}</span><br />
//                 <span>${item.price}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </>
//   );
// };

// export default ResultsPage;




import React from 'react';
import { useLocation } from 'react-router-dom';
import { menData, booksData, acData, computerData, fridgeData, furnitureData, kitchenData, mobileData, speakerData, tvData, watchData, womanData } from '../data/proData';

const allData = [
  ...menData, ...booksData, ...acData, ...computerData, ...fridgeData,
  ...furnitureData, ...kitchenData, ...mobileData, ...speakerData, ...tvData,
  ...watchData, ...womanData
];

const ResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q')?.toLowerCase() || '';

  const filtered = allData.filter(item =>
    item.name?.toLowerCase().includes(query)
  );

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filtered.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsPage;
