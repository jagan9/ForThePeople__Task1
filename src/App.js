import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Data from './data';

function App() {
  const [menu, setSetmenu] = React.useState("filter");
  const [menu1, setSetmenu1] = React.useState(null);

  useEffect(() => {
    if (window.innerWidth < 620) {
      setSetmenu1("block")
      setSetmenu("filter_dont")
    } else {
      setSetmenu("filter")
      setSetmenu1("none")
    }
  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 620) {
      setSetmenu("filter_dont")
      setSetmenu1("block")
    } else {
      setSetmenu("filter")
      setSetmenu1("none")
    }
  })

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className={menu}>
          <h3>Filter By</h3><hr />
          <p>Type  <span>+</span> </p><hr />
          <p>Topic  <span>+</span> </p><hr />
          <p>Region  <span>+</span> </p><hr />
        </div>
        <div className="Blogs">
          {
            Data.map(data => (
              <Blog key={data.id} data={data} />
            ))
          }
        </div>
      </div>
      <div>
        {
          menu1 === "block" && <i class="fa fa-filter" style={{
            fontSize: "24px",
            color: "white",
            backgroundColor: "black",
            borderTopRightRadius: "100%",
            cursor: "pointer",
            display: { menu1 },
            position: 'fixed',
            bottom: "0",
            left: "0",
            padding: "20px 20px 15px 15px"
          }}></i>
        }

      </div>
    </div>
  );
}

export default App;
