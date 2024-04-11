import React, { useState } from 'react';
import axios from 'axios';
import TreeVisualization from './TreeVisualization';
import { useNavigate } from 'react-router-dom';

const transformTreeData = (dto) => {
  return {
    name: String(dto.value),
    children: dto.leftChild || dto.rightChild ? [
      ...(dto.leftChild ? [transformTreeData(dto.leftChild)] : []),
      ...(dto.rightChild ? [transformTreeData(dto.rightChild)] : [])
    ] : [],
  };
};

const EnterNumbers = () => {
  const [numbers, setNumbers] = useState('');
  const [treeData, setTreeData] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/process-numbers',
        numbers.split(',').map(num => parseInt(num.trim(), 10)), 
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
      const transformedData = transformTreeData(response.data);
      setTreeData(transformedData); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Create a Binary Search Tree</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={numbers}
          onChange={(event) => setNumbers(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
      {treeData && <TreeVisualization data={treeData} />}
      <button onClick={() => navigate('/prev-trees')} style={{ marginTop: '20px' }}>
        Show Previous Trees
      </button>
    </div>
  );
};

export default EnterNumbers;
