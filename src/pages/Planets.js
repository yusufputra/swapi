import React from "react";
import { Typography, Card } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

const { Title } = Typography;

const styling = {
  color: "white",
};
const fetchPlanets = async () => {
  const res = await axios.get("planets");
  return res;
};
function Planets() {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);
  console.log(status);
  return (
    <div>
      <Title level={2}>Planets</Title>
      {status === "loading" && <div style={styling}> Loading Data</div>}
      {status === "error" && <div style={styling}> Error Fetching Data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Card type="inner" title={planet.name}>
              <p>Population - {planet.population}</p>
              <p>Climate - {planet.climate}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
