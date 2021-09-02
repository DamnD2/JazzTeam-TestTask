/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { SelectedTableRows } from '../../../core/contexts';
import './TableRow.css';
import TableData from '../TableData/TableData';

const TableRow = ({ user }) => {
  const { id, name, username, email, phone, website, street, city } = user;
  const [selected, setSelected] = useState(false);
  const { setAmount } = useContext(SelectedTableRows);

  const selectRow = () => {
    setSelected((prevState) => !prevState);

    if (!selected) setAmount((prevState) => prevState + 1);

    if (selected) setAmount((prevState) => prevState - 1);
  };

  return (
    <tr className={`table-row ${selected ? 'selected' : ''}`}>
      <td className='table__data-id' onClick={selectRow} onKeyDown={selectRow}>{id}</td>
      <TableData data={name} />
      <TableData data={username} />
      <TableData data={email} />
      <TableData data={phone} />
      <TableData data={website} />
      <TableData data={street} />
      <TableData data={city} />
    </tr>
  );
};

TableRow.propTypes = { user: PropTypes.objectOf(PropTypes.string).isRequired };

export default TableRow;
