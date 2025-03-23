import React from "react";

type UserPropsType = {
  name: string;
  age: number;
  hasMarried: boolean;
  minus: (a: number, b: number) => number;
  fatherName?: string; //optional props
  mother?: any;
};

const User = ({
  name,
  age,
  hasMarried,
  minus,
  fatherName,
  mother,
}: UserPropsType) => {
  return (
    <div>
      <hr />
      <br />
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Has Married: {hasMarried}</h2>
      <h2>Minus Function: {minus(5, 2)}</h2>
      <h2>Father Name: {fatherName ?? "---"}</h2>
      <h2>Mother: {mother}</h2>
    </div>
  );
};

export default User;
