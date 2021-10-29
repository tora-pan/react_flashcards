import React, { useContext, useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../firebase/firebase";

// create the data context
const DataContext = React.createContext();

// create custom hook to access the data anywhere
export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [firebaseData, setFirebaseData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("flashcarda-data").get();
      setFirebaseData(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  // get the data from firebase
  async function getFirebaseData() {
    return await firebaseData;
  }

  const value = {
    firebaseData,
    getFirebaseData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
