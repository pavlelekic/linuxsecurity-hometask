import React from "react";
import { Icon, Menu, Container, Dropdown } from "semantic-ui-react";

const TopMenu = ({ setIsSidebarVisible }) => (
  <Menu fixed="top">
    <Container>
      <Menu.Item
        as="a"
        icon="bars"
        onClick={() => setIsSidebarVisible((x) => !x)}
        className="sidebar-menu-toggler"
      />
      <Menu.Item as="a" header>
        Linux Security
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>

      <Dropdown item simple text="Dropdown">
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default TopMenu;
