import React from 'react';

export default function SearchBar({ clickSearchBtn, inputOnChange, inputValue, validInputLength }) {
  return (
    <form style={formStyle}>
      <div style={inputContainerStyle}>
        <i className='fa fa-search'></i>
        <input
          style={inputStyle}
          type='text'
          placeholder=' Search City ...'
          onChange={e => inputOnChange(e)}
          value={inputValue}
          required
        />
      </div>

      <button style={btnStyle} onClick={clickSearchBtn} disabled={validInputLength()}>
        Search
      </button>
    </form>
  );
}

const formStyle = {
  width: '600px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '5% auto',
};

const inputContainerStyle = {
  width: '70%',
  margin: '0',
  border: '2px solid #aaa',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  padding: '0 0 0 7px',
};

const inputStyle = {
  border: 'none',
  fontSize: '1.2rem',
  paddingLeft: '5px',
  borderRadius: '40%',
  padding: '5% 10% 5% 1%',
  width: '350px',
  outline: 'none',
};

const btnStyle = {
  background: '#ccc',
  fontSize: '1.5rem',
  border: '2px solid #444',
  borderRadius: '10px',
  padding: '2% 4%',
};
