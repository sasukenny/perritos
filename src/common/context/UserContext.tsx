import { nullToString } from '../utils/isNull';
import React, { createContext, useState } from 'react';
import { User } from '../Types/UserTypes/Usertypes';

export type UserType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const initialUserData = localStorage.getItem('user');
let initialUserDataObject: User;

if (initialUserData === null) {
  initialUserDataObject = {
    id: 0,
    username: '',
    email: '',
  };
} else {
  initialUserDataObject = JSON.parse(nullToString(initialUserData));
}

export const UserContext = createContext<UserType>({
  user: initialUserDataObject,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(initialUserDataObject);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
