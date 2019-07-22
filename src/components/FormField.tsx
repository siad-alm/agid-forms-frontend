import * as parser from "expression-eval";
import * as memoize from "memoizee";
import * as React from "react";

import { FormikProps, getIn } from "formik";

import { Input } from "reactstrap";

import { FieldT, FormValuesT } from "../utils/forms";
import { CheckboxField } from "./CheckboxField";
import { CheckboxMultipleField } from "./CheckboxMultipleField";
import { HtmlField } from "./HtmlField";
import { RadioField } from "./RadioField";
import { SelectField } from "./SelectField";
import { TextFormField } from "./TextFormField";

/**
 * Wrap inputs in bootstrap input
 */
export const CustomInputComponent = ({
  field,
  form,
  ...props
}: {
  field: readonly JSX.Element[];
  form: FormikProps<FormValuesT>;
}) => <Input {...field} {...props} />;

/**
 * Parse and cache compiled javascript expressions.
 */
export const getExpression = (name: keyof FieldT, field: FieldT) =>
  field[name] ? parser.compile(field[name] as string) : null;

export const getExpressionMemoized = memoize(getExpression, {
  normalizer: ([name, field]: Parameters<typeof getExpression>) =>
    `${name}_${field.name}`
});

export const Formfield = ({
  field,
  form
}: {
  field: FieldT;
  form: FormikProps<FormValuesT>;
}): JSX.Element | null => {
  const showIfExpression = getExpressionMemoized("show_if", field);
  const valueExpression = getExpressionMemoized("computed_value", field);
  const validationExpression = getExpressionMemoized("valid_if", field);
  const requiredExpression = getExpressionMemoized("required_if", field);

  const isHidden = showIfExpression ? !showIfExpression(form.values) : false;

  // clear field value if is hidden but not empty
  if (isHidden && getIn(form.values, field.name!) !== "") {
    form.setFieldValue(field.name!, "");
  }

  const isRequired =
    !isHidden &&
    (requiredExpression ? requiredExpression({ Math, ...form.values }) : false);

  const widgetOpts = {
    field,
    form,
    validationExpression,
    valueExpression,
    isHidden,
    isRequired
  };

  switch (field.widget) {
    case "text":
      return TextFormField(widgetOpts);
    case "checkbox":
      return widgetOpts.field.options
        ? CheckboxMultipleField(widgetOpts)
        : CheckboxField(widgetOpts);
    case "radio":
      return RadioField(widgetOpts);
    case "select":
      return SelectField(widgetOpts);
    case "html":
      return HtmlField({ field, form, isHidden, valueExpression });
    default:
      return <></>;
  }
};
