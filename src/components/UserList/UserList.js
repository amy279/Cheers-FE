import React, { useEffect, useState } from 'react';
import {
  UserListContainer,
  Text,
  List,
  UserListHeader,
  TrashCan,
} from './styled';
import { trashcan } from '@/images/etc';
import UserBox from './UserBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');
socket.emit('init', { name: 'huikyeong' });

const UserList = () => {
  const _userList = useSelector(state => state.user.userList);
  const user1 = _userList[0];
  const user2 = _userList[1];
  const user3 = _userList[2];
  const dispatch = useDispatch();
  const [badUserList, setBadUserList] = useState([]);
  const addBadUser = badUserName => {
    setBadUserList(badUserList.concat(badUserName));
  };
  const deleteBadUser = badUserName => {
    setBadUserList(
      badUserList.filter(badUserList => badUserList != badUserName)
    );
  };

  const kickOut = () => {
    socket.emit('kickout-snd', { badUserList });
  };

  useEffect(() => {
    dispatch(getAllUser());
    console.log(_userList);
  }, []);
  return (
    <UserListContainer>
      <UserListHeader>
        <Text>UserList</Text>
        <TrashCan src={trashcan} onClick={kickOut} />
      </UserListHeader>
      <List>
        {_userList.map((char, index) => (
          <span key={index}>
            <UserBox
              userName={char[1]}
              character={char[3]}
              team={char[7]}
              add={addBadUser}
              del={deleteBadUser}
            />
          </span>
        ))}
      </List>
    </UserListContainer>
  );
};

export default UserList;
