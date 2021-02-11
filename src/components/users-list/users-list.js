import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from '../hoc';

const UsersList = (props) => {

  const [usersArray, setUsersArray] = useStateIfMounted([]);

  useEffect(() => {
    props.jsonService.getAllUsers().then((usersArray) => {
      setUsersArray(usersArray)
    })
  }, [])

  return (
    <div>
      {usersArray.map((user) => {
        return <li key={user.name}>{user.name}</li>;
      })}
    </div>
  )

}

export default withJsonService()(UsersList)