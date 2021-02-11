import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from '../hoc';
import Spinner from "../spinner";

const UsersList = (props) => {

  const [usersArray, setUsersArray] = useStateIfMounted([]);

  useEffect(() => {
    props.jsonService.getAllUsers().then((usersArray) => {
      setUsersArray(usersArray)
    })
  }, [])

  return (
    <div>
      {usersArray.length > 0 ? (
        usersArray.map((user) => {
        return <li key={user.name}>{user.name}</li>
      })
      ) : (
        <Spinner />
      )}
    </div>
  );

}

export default withJsonService()(UsersList)