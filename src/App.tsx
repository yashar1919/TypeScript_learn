import React from "react";
import User from "./components/User";

type BaseUserObject = { name: string; age: number; isMarried: boolean };
type BaseArray = (number | string)[];

function App() {
  let name: string = "yashar";
  let counter: number = 2;
  let flag: boolean = false;
  let array: number[] = [1, 2, 3, 4];
  let array2: (number | string)[] = [1, "salam"];

  let userObject: { name: string; age: number; isMarried: boolean } = {
    name: "Yashar",
    age: 24,
    isMarried: false,
  };

  let userObject2: BaseUserObject = {
    name: "Ali",
    age: 52,
    isMarried: true,
  };

  let array3: BaseArray = [1, 2, "coldcut"];

  const sum = (a: number, b: number): number => {
    return a + b;
  };

  const minus = (a: number, b: number): number => {
    return a - b;
  };

  console.log("name ===> ", name);
  console.log("counter ===> ", counter);
  console.log("flag ===> ", flag);
  console.log("array ===> ", array);
  console.log("array2 ===> ", array2);
  console.log("userObject ===> ", userObject);
  console.log("userObject2 ===> ", userObject2);
  console.log("array3 ===> ", array3);
  console.log("SUM ===> ", sum(2, 3));

  return (
    <div>
      <h1>Welcome to TypeScript Course</h1>
      <div>
        <User name="Arshia" age={15} hasMarried={true} minus={minus} fatherName="masoud" mother={22}/>
        <User name="Yashar" age={24} hasMarried={true} minus={minus} mother="I dont know!"/>
      </div>
    </div>
  );
}

export default App;
