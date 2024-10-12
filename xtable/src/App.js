import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const HandleDate = () => {
    const sorteddate = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setdata(sorteddate);
  };
  const HandleViews = () => {
    const sort6edviews = [...data].sort((a, b) => b.views - a.views);
    setdata(sort6edviews);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>

      <div>
        <button onClick={HandleDate}>Sort by Date</button>
        <button onClick={HandleViews}>Sort by Views</button>
      </div>

      <table>
        <thead>
          <tr>
            <td>
              <h2>Date</h2>
            </td>
            <td>
              <h2>Views</h2>
            </td>
            <td>
              <h2>Article</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date} </td> <td>{item.views}</td>{" "}
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
