import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ListComponent from './ListComponent'

const ParentComponent = () => {
    const [items, setItems] = useState([]);      
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);     

  
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);   
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []); 

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

   
    return (
    <div>
        <ol>
            {items.map((item) => (
             <li key={item.id}>
               <strong>{item.title}</strong>
               <p>{item.body}</p>
             </li>
      ))}
        </ol>
        <ListComponent/>

    </div>
  )
}
export default ParentComponent