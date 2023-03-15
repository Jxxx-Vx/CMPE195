import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #072e59;
  padding: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  margin-right: 1rem;
  color: #212529;
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  color: white;
  &:hover {
    color: #007bff;
  }
`;

const ButtonLink = styled(Link)`
  margin-right: 1rem;
  color: #fff;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <Nav>
      <LogoWrapper>
        <LogoIcon
          src="https://cdn-icons-png.flaticon.com/512/1022/1022476.png"
          alt="Spartan Emergency Logo"
        />
        <NavLink to="/">Spartan Emergency</NavLink>
      </LogoWrapper>
      <NavLinks>
        {auth ? (
          <>
            <ButtonLink to="/alerts" bgColor="#28a745" hoverColor="#218838">Alerts</ButtonLink>
            <ButtonLink onClick={handleLogout} bgColor="#dc3545" hoverColor="#c82333">Logout</ButtonLink>
          </>
        ) : (
          <>
            <ButtonLink to="/login" bgColor="#007bff" hoverColor="#0069d9">Login</ButtonLink>
            <ButtonLink to="/register" bgColor="#dc3545" hoverColor="#c82333">Register</ButtonLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default TopNav;
