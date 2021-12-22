import './styles.css';

import ResultCard from 'components/ResultCard';

const CepSearch = () => {
  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Find or check a Postcode</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="PostCode (Enter only number)"
              onChange={() => {}}
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
