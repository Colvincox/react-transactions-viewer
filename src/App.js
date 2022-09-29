import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transactions from "./components/Transactions";

import About from "./components/About";
import Pagination from "@mui/material/Pagination";

const App = () => {
  
  const [transactions, setTasks] = useState([]);
  const [userPage, setUserPage] = useState(0);
  const [userID, setUserID] = useState(0);
  const [userTotalPages, setUserTotalPages] = useState(0);

  useEffect(() => {
    //setUserID(1);
    const getTasks = async () => {
      const tasksFromServer = await fetchPage(1);
      setTasks(tasksFromServer);
    };

    getTasks();
  }, [userID]);

  const fetchPage = async (page) => {
    const res = await fetch(
      `https://jsonmock.hackerrank.com/api/transactions?userId=${userID}&page=${page}`
    );
    const data = await res.json();
    setUserTotalPages(data.total_pages);

    setTasks(data.data);
    return data.data;
  };

  const pageChange = (evalue, value) => {
    setUserPage(value);

    fetchPage(value);
  };

  const changeUser = (newUserID) => {
    setUserPage(1);

    setUserID(newUserID);
  };
  return (
    <Router>
      <div className="container">
        <Header onChangeUser={changeUser} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {transactions.length > 0 ? (
                  <Transactions transactions={transactions} />
                ) : (
                  "No Transactions To Show"
                )}

                <Pagination
                  className="centered"
                  variant="outlined"
                  shape="rounded"
                  count={userTotalPages}
                  page={userPage}
                  onChange={pageChange}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
