import React from 'react';
import User from './User';
import Suggestions from './Suggestions';
import useUser from '../../hooks/use-user';

export default function Sidebar() {
  const { user } = useUser();

  React.useEffect(() => {
    if (user) {
      console.log('fullName:', user.fullName);
      console.log('username:', user.username);
      console.log('userId:', user.userId);
      console.log('following:', user.following);
      console.log('docId:', user.docId);
    }
  }, [user]);

  return (
    <div className="p-4">
      {user && (
        <>
          <User fullName={user.fullName} username={user.username} />
          <Suggestions userId={user.userId} following={user.following} loggedInUserDocId={user.docId}/>
        </>
      )}
    </div>
  );
}