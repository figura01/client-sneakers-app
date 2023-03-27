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

  useEffect(() => {
    let resFetch = async () => {
      await fetch('http://localhost:8000/auth/login', 
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'admin@mail.com',
            password: 'admin'
          }),
          headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors'
          },
        })
        .then((res) => res.json())
        .then(res => console.log(res))
      }
      resFetch() 
    }, [])
  
    useEffect(() => {
      const loggIn = async () => {
        let response = await api.login('http://localhost:8000/auth/login', {
          email: 'admin@mail.com',
          password: 'admin'
        })
        console.log('response apiHandler', response)
      }
      loggIn();
    }, [])

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