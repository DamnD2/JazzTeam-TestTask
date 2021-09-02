import { useState } from 'react';
import PropTypes from 'prop-types';
import './TableData.css';

const TableData = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(data);

  return (
    <td className='table-data'>
      <button
        className='table-edit'
        onClick={() => setIsEdit((prevState) => !prevState)}
      >
        {isEdit ? 'Save' : 'Edit'}
      </button>
      { isEdit
        ? (
          <input
            className='table-input'
            type='text'
            defaultValue={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        )
        : <span className='table__data-text'>{inputValue}</span>}
    </td>
  );
};

TableData.propTypes = { data: PropTypes.string.isRequired };

export default TableData;
