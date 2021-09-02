import React from 'react';
import PropTypes from 'prop-types';
import { TableContext, SelectedTableRows } from '../contexts';

const Launcher = ({ children }) => {
  const [users, setUsers] = React.useState(null);
  const [amount, setAmount] = React.useState(0);

  return (
    <React.StrictMode>
      <TableContext.Provider value={{ users, setUsers }}>
        <SelectedTableRows.Provider value={{ amount, setAmount }}>
          {children}
        </SelectedTableRows.Provider>
      </TableContext.Provider>
    </React.StrictMode>
  );
};

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
