import React from "react";
import TableRow from "./TableRow";
import { TableStyles } from "../styles/Table.styled";
import data from "../../assets/titanic.json";

export default function Table() {
  return (
    <div>
      <TableStyles>
        <thead>
          <tr>
            <th>PassengerId</th>
            <th>Survived</th>
            <th>Pclass</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>SibSp</th>
            <th>Parch</th>
            <th>Ticket</th>
            <th>Fare</th>
            <th>Cabin</th>
            <th>Embarked</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => {
            return <TableRow person={person} key={person.PassengerId} />;
          })}
        </tbody>
      </TableStyles>
    </div>
  );
}
