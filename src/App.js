import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Label from './components/Label';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <Header />
      <Form
        data={data.locations}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <Label />
      <Cards data={filteredData.length > 0 ? filteredData : data.locations} />
      <Footer />

    </div>
  );
}

export default App;
