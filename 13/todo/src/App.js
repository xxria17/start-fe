import React, { userState } from 'react';
import Header from './Header';

function App() {
  const [countNumber, setCountNumber] = userState(0);

  function addCountNumber() {
    setCountNumber(countNumber + 1);
  }
  
  return (
    <div className="App">
      <Header />
      <div>{countNumber}</div>
      <button onClicl={addCountNumber}>플러스</button>
    </div>
  );
}

export default App;
