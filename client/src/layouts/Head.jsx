import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Popover, Position, Menu, Icon } from "evergreen-ui";
import MyContext from "context/context";
import "styles/header.scss";

const Head = props => {
  const context = useContext(MyContext);

  const signouthandler = () => {
    console.log(props);
    context.logout();
    props.history.push("/");
  };

  return (
    <header id="topbar">
      <NavLink to="/" className="topbar-icon">
        My-Blog
      </NavLink>
      <nav className="topbar-left">
        <li className="topbar-left-item">
          <NavLink to="/home" activeClassName="selected">
            Home
          </NavLink>
        </li>
        {!context.token && (
          <li className="topbar-left-item">
            <NavLink exact to="/" activeClassName="selected">
              Signin
            </NavLink>
          </li>
        )}
        {!context.token && (
          <li className="topbar-left-item">
            <NavLink to="/signup" activeClassName="selected">
              Signup
            </NavLink>
          </li>
        )}
      </nav>
      <div className="topbar-divder" />
      <div className="topbar-right">
        <Popover
          position={Position.BOTTOM_LEFT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item icon="people">登录</Menu.Item>
              </Menu.Group>
              <Menu.Group>
                <Menu.Item icon="people">注册</Menu.Item>
              </Menu.Group>
              <Menu.Divider />
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
      </div>
    </header>
  );
};

export default withRouter(Head);
