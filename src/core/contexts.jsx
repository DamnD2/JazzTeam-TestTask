import React from 'react';

export const TableContext = React.createContext({ users: {}, setUsers: () => {} });

export const SelectedTableRows = React.createContext({ amount: 0, setAmount: () => {} });
