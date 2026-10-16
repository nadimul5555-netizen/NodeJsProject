import { use } from "react";
import { UserShowType } from "../AllType";
export interface UserShowProps {
 UserDataPromies: Promise<UserShowType[]>
}

const UserShow = ({ UserDataPromies}: UserShowProps) => {
  const Data = use(UserDataPromies)
  return (
    <div>
      <h1>user in the components : {Data.length}</h1>
      {
        Data.map((user:UserShowType)=> <li key={user.id}>{user.name}:{user.email}</li>)
      }
    </div>
  )
}

export default UserShow;