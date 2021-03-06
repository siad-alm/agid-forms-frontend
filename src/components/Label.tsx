import * as React from "react";
import { Label as RSLabel, LabelProps as RSLabelProps } from "reactstrap";

interface LabelProps extends RSLabelProps {
  fieldName: string;
  title: string;
  isRequired?: boolean;
}

export const Label = ({
  fieldName,
  title,
  isRequired,
  ...props
}: LabelProps) => (
  <RSLabel
    for={fieldName}
    htmlFor={fieldName}
    check={true}
    style={{ lineHeight: "1.55", maxWidth: "34em" }}
    className="d-block font-weight-semibold neutral-2-color-a5 font-size-xs"
    {...props}
  >
    {isRequired && (
      <span>
        <small className="sr-only">campo richiesto</small>
      </span>
    )}
    {title}{" "}
    {isRequired === false && (
      <small style={{ fontSize: "14px" }}>(campo opzionale)</small>
    )}
  </RSLabel>
);
