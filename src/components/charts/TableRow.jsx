import React from "react";

export default function TableRow(props) {
  return (
    <tr key={props.person.PassengerId}>
      <td>{props.person.PassengerId}</td>
      <td>{props.person.Survived}</td>
      <td>{props.person.Pclass}</td>
      <td>{props.person.Name}</td>
      <td>{props.person.Sex}</td>
      <td>{props.person.Age}</td>
      <td>{props.person.SibSp}</td>
      <td>{props.person.Parch}</td>
      <td>{props.person.Ticket}</td>
      <td>{props.person.Fare}</td>
      <td>{props.person.Cabin}</td>
      <td>{props.person.Embarked}</td>
    </tr>
  );
}
