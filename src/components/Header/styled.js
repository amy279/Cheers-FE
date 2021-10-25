import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 114px;
  margin-left: 30px;
  cursor: pointer;
`;

export const ReturnButton = styled.button`
  width: 300px;
  height: 36px;
  background: #c4c4c4;
  border: transparent;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-right: 29px;
  cursor: pointer;

  &:hover {
    background: #aaaaaa;
  }
`;

export const UserInfo = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

export const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;