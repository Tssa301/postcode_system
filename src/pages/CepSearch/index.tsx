import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

type FormData = {
  postcode: string;
  test: string;
}

const CepSearch = () => {

  const [formData, setFormData] = useState<FormData>({
    postcode: '',
    test: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]:value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Find or check a Postcode</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              className="search-input"
              placeholder="PostCode (Enter only number)"
              onChange={handleChange}
            />
             <input
              type="text"
              name="test"
              value={formData.test}
              className="search-input"
              placeholder="TEST"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Search
            </button>
          </div>
        </form>

        <ResultCard title="Address" description="Lalala" />
        <ResultCard title="Number" description="234" />

      </div>
    </div>
  );
};

export default CepSearch;
