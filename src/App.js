

import EnterNumbers from './EnterNumbers';
import PrevTrees from './PrevTrees';
import TreeVisualization from './TreeVisualization';

import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>

        <Routes>
          <Route path="/enter-numbers" exact element={<EnterNumbers />} />
          <Route path="/prev-trees" exact element={<PrevTrees />} />
          <Route path="/tree-visualization" exact element={<TreeVisualization />} />
        </Routes>

      </div>
    </Router>
   
  );
}

export default App;
