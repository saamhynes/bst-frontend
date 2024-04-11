
import React from 'react';
import Tree from 'react-d3-tree';

const TreeVisualization = ({ data }) => {
  return (
    <div style={{ width: '800px', height: '600px' }}>
      <Tree data={data} orientation="vertical" />
    </div>
  );
};

export default TreeVisualization;
