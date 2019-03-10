import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Popover, Position, Menu, Icon } from "evergreen-ui";
import MyContext from "context/context";
import "styles/header.scss";

import setAuthorizationHeader from "utils/setAuthorizationHeader";
import { useAuth } from "hooks/auth";


const Head = props => {
  setAuthorizationHeader(localStorage.getItem("token"));
  const context = useContext(MyContext);

  useAuth();

  const signouthandler = () => {
    context.authAction.logout();
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <header id="topbar">
      <NavLink to="/" className="topbar-icon">
        My-Blog
      </NavLink>
      <nav className="topbar-left">
        {!context.auth.name && (
          <li className="topbar-left-item">
            <NavLink exact to="/" activeClassName="selected">
              Signin
            </NavLink>
          </li>
        )}
        {!context.auth.name && (
          <li className="topbar-left-item">
            <NavLink to="/signup" activeClassName="selected">
              Signup
            </NavLink>
          </li>
        )}
        <li className="topbar-left-item">
          <NavLink to="/home" activeClassName="selected">
            Home
          </NavLink>
        </li>
      </nav>
      <div className="topbar-divder" />
      <div className="topbar-right">
        {context.auth.name && (
          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item
                    icon="trash"
                    intent="danger"
                    onSelect={signouthandler}
                  >
                    注销
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Icon icon="align-center" marginRight={20} size={20} />
          </Popover>
        )}
      </div>
    </header>
  );
};

export default withRouter(Head);
