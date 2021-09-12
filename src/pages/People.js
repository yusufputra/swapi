import React from "react";
import { Typography, Card } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

const { Title } = Typography;
const fetchPeople = async() =>{
    const res = await axios.get('people');
    return res;
}
const styling={
    color: "white"
}
function People() {
    const {data, status} = useQuery("people",fetchPeople);
    console.log(data)
    console.log(status)
  return (
    <div>
      <Title level={2}>People</Title>
      {status === "loading" && (<div style={styling}> Loading Data</div>)}
      {status === "error" && (<div style={styling}> Error Fetching Data</div>)}
      {status === "success" && (
        <div>
          {data.results.map((people) => (
            <Card type="inner" title={people.name}>
              <p>Birthyear - {people.birth_year}</p>
              <p>Gender - {people.gender}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
