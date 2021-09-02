import { useEffect, useContext } from 'react';
import './Table.css';
import provider from '../../api/TableApi/provider';
import { TableContext, SelectedTableRows } from '../../core/contexts';
import TableRow from './TableRow/TableRow';

const Table = () => {
  const { users, setUsers } = useContext(TableContext);
  const { amount } = useContext(SelectedTableRows);

  useEffect(() => {
    provider.getTasks().then(setUsers);
  }, [setUsers]);

  const getTableRows = () => (
    users.map((user) => <TableRow user={user} key={user.id} />)
  );

  return (
    <div className='section-table'>
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr className='table-header-row'>
              <th className='table-header id'>Id</th>
              <th className='table-header'>Name</th>
              <th className='table-header'>UserName</th>
              <th className='table-header'>Email</th>
              <th className='table-header'>Phone</th>
              <th className='table-header'>Website</th>
              <th className='table-header'>Street</th>
              <th className='table-header'>City</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {users && getTableRows()}
            {users && getTableRows()}
            {users && getTableRows()}
          </tbody>
        </table>
      </div>
      <p className='text'>Количество выделенных строк: <span className='text-bold'>{amount}</span></p>
      <p className='text'>Общее количество строк: <span className='text-bold'>{users ? users.length * 3 : 0}</span></p>
      <p className='text'>* Для выделения строки таблицы, нажмите на ее поле ID</p>
    </div>
  );
};

export default Table;
