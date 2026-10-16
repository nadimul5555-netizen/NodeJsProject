
import React, { Suspense } from 'react';
import UserShow from '../components/UserShow';
const UserDataPromies= async()=>{
   const res = await fetch("http://localhost:5000/Users");
  const Data = await res.json();
  return Data

}

const UserPage = () => {
 
  return (
    <div>
      <Suspense fallback={<p>Loadding ...</p>}>
       <UserShow UserDataPromies={UserDataPromies()}></UserShow>
      </Suspense>
    </div>
  );
};

export default UserPage;