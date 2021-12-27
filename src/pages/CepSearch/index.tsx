import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  postcode: string;
}

type Address = {
  logradouro: string;
  bairro: string;
  localidade: string;
}

const CepSearch = () => {

  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    postcode: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]:value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    axios.get(`https://viacep.com.br/ws/${formData.postcode}/json`)
    .then((response) => {
      setAddress(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      setAddress(undefined);
      console.log(error);
    });
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
            <button type="submit" className="btn btn-primary search-button">
              Search
            </button>
          </div>
        </form>
        {address &&
          <>
            <ResultCard title="Address" description={address.logradouro} />
            <ResultCard title="Location" description={address.bairro} />
            <ResultCard title="City" description={address.localidade} />
          </>
        }
      </div>
    </div>
  );
};

export default CepSearch;


