import { Link as RLink } from 'react-router-dom';
import { Pane, Avatar, Menu, Popover, Link } from 'evergreen-ui';

import { theme } from 'config/theme';

function Navbar() {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX={32}
      height={64}
      borderBottom={`1px solid ${theme.colors.border.default}`}
      borderBottomColor=""
    >
      <Link is={RLink} to="/" color="neutral">
        Task Manager
      </Link>

      <Popover
        content={({ close }) => (
          <Menu>
            <Menu.Group>
              <Menu.Item onClick={close}>Settings</Menu.Item>
              <Menu.Item is={RLink} to="/groups" onClick={close}>
                Groups
              </Menu.Item>
            </Menu.Group>
            <Menu.Group>
              <Menu.Item intent="danger" onClick={close}>
                Logout
              </Menu.Item>
            </Menu.Group>
          </Menu>
        )}
      >
        <Avatar name="John Doe" size={40} cursor="pointer" />
      </Popover>
    </Pane>
  );
}

export default Navbar;
