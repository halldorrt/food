import React from 'react';

type InstructionsProps = {
  instructions: { fields?: { title: string; text: string }[] };
};

export default function Instructions(props: InstructionsProps) {
  const { fields } = props.instructions;
  return (
    <section>
      {fields?.map((field, idx) => {
        return (
          <div key={idx}>
            <h2>{field.title}</h2>
            <p>{field.text}</p>
          </div>
        );
      })}
    </section>
  );
}
