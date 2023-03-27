import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import api from '../../../api/apiHandler'
const UserDetail = () => {
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    const fetchUser = async () => {
      const dataUser = await api.getOne(id);
      console.log('dataUser', dataUser)
    }
    fetchUser();
  })
  return (
    <div>UserDetail</div>
  )
}

export default UserDetail