import React from "react";

const capitalize = text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

const Title = ({ title }) => (
  <div>
    {title.map(word => (
      <div key={word}>{capitalize(word.trim())}</div>
    ))}
  </div>
);

export const Geography = ({ query, city, street }) => {
  const title = city ? [city, street] : [query];
  return (
    <div>
      <Title title={title} />
    </div>
  );
};
