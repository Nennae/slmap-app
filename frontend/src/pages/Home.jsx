import { useEffect, useState } from "react";
const Home = () => {
      const [data, setData] = useState(null);
      
      // useEffect(() => {
      //       fetch("/api")
      //         .then((res) => res.json())
      //         .then((data) => setData(data.message));
      //     }, []);
      return (
            <div className="App">
      <header className="App-header">
        
        <p className="loading">Welcome!</p>
      </header>
    </div>
      )
}

export default Home;