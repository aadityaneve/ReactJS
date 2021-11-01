import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;

  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Angular",
    },
    {
      id: 4,
      name: "Aditya",
      age: 22,
      skill: "Vue",
    },
  ];

  const personList = persons.map((person) => <Person person={person} key={person.id} />);
  return <div>{personList}</div>;
  //   return (
  //       <div>{nameList}</div>
  //   )

  //   return (
  //     <div>
  //       {
  //           names.map((name) => <h2>{name}</h2>)
  //       }
  //     </div>
  //   );
}

export default NameList;
