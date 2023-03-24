import React, { useEffect, useState } from 'react';
import api from '../../../api/apiHandler';

import fakeUsers from '../../../assets/data/fakeUsers.json';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const UserAdmin = () => {
  const [users, setUsers] = useState([
    {id: 1, firstname: 'Lindy', lastname: 'Blaby', email: 'lblaby0@icq.com'},
    {id: 2, firstname: 'Enrika', lastname: 'Swiggs', email: 'eswiggs1@so-net.ne.jp'}, 
    {id: 3, firstname: 'Brig', lastname: 'Goulborn', email: 'bgoulborn2@marriott.com'},
    {id: 4, firstname: 'Brucie', lastname: 'Huonic', email: 'bhuonic3@imdb.com', actions:''},
    {id: 5, firstname: 'Carolina', lastname: 'Rudiger', email: 'crudiger4@sphinn.com'},
  ])

  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          
          {users.map((u, i) => {
            return <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstname}</td>
              <td>{u.lastname}</td>
              <td>{u.email}</td>
              <td>
                <Link to={`/admin/users/${u.id}`}>Show</Link>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default UserAdmin