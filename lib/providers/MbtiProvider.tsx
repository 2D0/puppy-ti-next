// contexts/MBTIContext.js
import React, { createContext, useContext, useState } from 'react';

const MbtiContext = createContext();

export const useMbti = () => useContext(MbtiContext);

export const MbtiProvider = ({ children }) => {
  const [mbtiScores, setMbtiScores] = useState({
    I: 0,
    E: 0,
    N: 0,
    S: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0,
  });
  const [invalidCounts, setInvalidCounts] = useState(0);

  // 로직 추가 예정

  return (
    <MbtiContext.Provider
      value={{ mbtiScores, setMbtiScores, invalidCounts, setInvalidCounts }}
    >
      {children}
    </MbtiContext.Provider>
  );
};
