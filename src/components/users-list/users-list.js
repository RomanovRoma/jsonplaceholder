import React, { useState, useEffect } from 'react'
import { withJsonService } from '../hoc';

const UsersList = ({jsonService}) => {

  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    jsonService.getAllUsers().then((usersArray) => {
      setUsersArray(usersArray)
    })
  })

  return (
    <div>
      {usersArray.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  )

}

export default withJsonService()(UsersList)