import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';



import staticUsers from '../../../data/users';

function UserDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('Execting initial use efect')
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      console.log('Unmonting user detail component')
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    console.log('Finding user')
    const user = staticUsers.find(user => user.id === id);
    if (user) {
      setUser(user);
    } else {
      navigate('/users');
    }
  }, [id]);

  console.log('Rendering user detail')
  return (
    <div>{user?.name}: {moment(date).format('HH:mm:ss')}</div>
  )
}

export default UserDetail