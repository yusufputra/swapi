import React from "react";
import { Typography, Button, Space } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
function Navbar() {
  return (
    <div>
      <Title>Starwars Info</Title>
      <Space size={20}>
        <Link to="/planets">
          <Button shape="round" size="large">
            Planets
          </Button>
        </Link>
        <Link to="/people">
          <Button shape="round" size="large">
            People
          </Button>
        </Link>
      </Space>
    </div>
  );
}

export default Navbar;
