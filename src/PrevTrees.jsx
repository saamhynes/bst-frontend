// PrevTrees.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrevTrees = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/previous-trees');
        setTrees(response.data); 
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTrees();
  }, []);

  return (
    <div>
      <h2>Previous Trees</h2>
      <div>
        {trees.map((tree, index) => (
          // Display each tree. You might need to adjust based on how your tree data is structured
          <div key={index}>Tree {index + 1}: {JSON.stringify(tree)}</div>
        ))}
      </div>
    </div>
  );
};

export default PrevTrees;
