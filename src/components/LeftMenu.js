import React from "react";
import { Menu, MenuItem, MenuHeader, MenuMenu } from "semantic-ui-react";

const LeftMenu = () => {
  const activeItem = "weather";
  return (
    <div
      style={{
        flex: "0 0 200px",
        padding: "1em",
      }}
      className="vertically-scrollable"
    >
      <Menu vertical fluid>
        <MenuItem>
          <MenuHeader>Products</MenuHeader>

          <MenuMenu>
            <MenuItem
              name="enterprise"
              active={activeItem === "enterprise"}
              onClick={() => {}}
            />
            <MenuItem
              name="weather"
              active={activeItem === "weather"}
              onClick={() => {}}
            />
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>CMS Solutions</MenuHeader>

          <MenuMenu>
            <MenuItem
              name="rails"
              active={activeItem === "rails"}
              onClick={() => {}}
            />
            <MenuItem
              name="python"
              active={activeItem === "python"}
              onClick={() => {}}
            />
            <MenuItem
              name="php"
              active={activeItem === "php"}
              onClick={() => {}}
            />
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>Hosting</MenuHeader>

          <MenuMenu>
            <MenuItem
              name="shared"
              active={activeItem === "shared"}
              onClick={() => {}}
            />
            <MenuItem
              name="dedicated"
              active={activeItem === "dedicated"}
              onClick={() => {}}
            />
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>Support</MenuHeader>

          <MenuMenu>
            <MenuItem
              name="email"
              active={activeItem === "email"}
              onClick={() => {}}
            >
              E-mail Support
            </MenuItem>

            <MenuItem
              name="faq"
              active={activeItem === "faq"}
              onClick={() => {}}
            >
              FAQs
            </MenuItem>
          </MenuMenu>
        </MenuItem>
      </Menu>{" "}
    </div>
  );
};

export default LeftMenu;
