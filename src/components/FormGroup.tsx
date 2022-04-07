import React from 'react';

export default function FormGroup(
  props: JSX.IntrinsicAttributes & React.HTMLAttributes<HTMLDivElement>
) {
  return <div className="form-group">{props.children}</div>;
}
