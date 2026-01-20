// src/Form/Form.tsx
import { forwardRef } from "react";
import { withTheme } from "@rjsf/core";
import { Form as AriaForm } from "react-aria-components";

// src/AddButton/AddButton.tsx
import {
  TranslatableString
} from "@rjsf/utils";
import { Button as AriaButton } from "react-aria-components";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function createSyntheticMouseEvent(e) {
  return {
    preventDefault: () => {
    },
    stopPropagation: () => e.continuePropagation?.(),
    target: e.target,
    currentTarget: e.target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey
  };
}
function AddButton({ registry, disabled, onClick, id }) {
  const { translateString } = registry;
  const handlePress = useCallback(
    (e) => {
      onClick?.(createSyntheticMouseEvent(e));
    },
    [onClick]
  );
  return /* @__PURE__ */ jsxs(
    AriaButton,
    {
      id,
      className: "react-aria-Button react-aria-AddButton",
      isDisabled: disabled,
      onPress: handlePress,
      type: "button",
      children: [
        /* @__PURE__ */ jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-AddButton-icon", children: /* @__PURE__ */ jsx("path", { d: "M9 3 L9 15 M3 9 L15 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }),
        translateString(TranslatableString.AddItemButton)
      ]
    }
  );
}

// src/ArrayFieldItemTemplate/ArrayFieldItemTemplate.tsx
import {
  getTemplate,
  getUiOptions
} from "@rjsf/utils";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function ArrayFieldItemTemplate(props) {
  const {
    children,
    buttonsProps,
    displayLabel,
    hasDescription,
    hasToolbar,
    uiSchema,
    registry
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const ArrayFieldItemButtonsTemplate = getTemplate("ArrayFieldItemButtonsTemplate", registry, uiOptions);
  return /* @__PURE__ */ jsx2("div", { className: "react-aria-array-item", children: /* @__PURE__ */ jsxs2("div", { className: "react-aria-array-item-inner", children: [
    /* @__PURE__ */ jsx2("div", { className: "react-aria-array-item-content", children }),
    /* @__PURE__ */ jsx2("div", { className: "react-aria-array-item-buttons", children: hasToolbar && /* @__PURE__ */ jsx2(
      "div",
      {
        className: "react-aria-array-item-buttons-inner",
        style: {
          marginTop: displayLabel ? hasDescription ? "-6px" : "22px" : void 0
        },
        children: /* @__PURE__ */ jsx2(ArrayFieldItemButtonsTemplate, { ...buttonsProps })
      }
    ) })
  ] }) });
}

// src/ArrayFieldTemplate/ArrayFieldTemplate.tsx
import {
  buttonId,
  getTemplate as getTemplate2,
  getUiOptions as getUiOptions2
} from "@rjsf/utils";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ArrayFieldTemplate(props) {
  const {
    canAdd,
    disabled,
    fieldPathId,
    uiSchema,
    items,
    optionalDataControl,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title
  } = props;
  const uiOptions = getUiOptions2(uiSchema);
  const ArrayFieldDescriptionTemplate = getTemplate2("ArrayFieldDescriptionTemplate", registry, uiOptions);
  const ArrayFieldTitleTemplate = getTemplate2("ArrayFieldTitleTemplate", registry, uiOptions);
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  return /* @__PURE__ */ jsx3("div", { className: "react-aria-array-field", children: /* @__PURE__ */ jsx3("div", { className: "react-aria-array-field-inner", children: /* @__PURE__ */ jsxs3("div", { className: "react-aria-array-field-content", children: [
    /* @__PURE__ */ jsx3(
      ArrayFieldTitleTemplate,
      {
        fieldPathId,
        title: uiOptions.title || title,
        schema,
        uiSchema,
        required,
        registry,
        optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
      }
    ),
    /* @__PURE__ */ jsx3(
      ArrayFieldDescriptionTemplate,
      {
        fieldPathId,
        description: uiOptions.description || schema.description,
        schema,
        uiSchema,
        registry
      }
    ),
    /* @__PURE__ */ jsxs3(
      "div",
      {
        className: "react-aria-array-item-list",
        children: [
          !showOptionalDataControlInTitle ? optionalDataControl : void 0,
          items,
          canAdd && /* @__PURE__ */ jsx3("div", { className: "react-aria-array-item-add-wrapper", children: /* @__PURE__ */ jsx3(
            AddButton2,
            {
              id: buttonId(fieldPathId, "add"),
              className: "react-aria-array-item-add",
              onClick: onAddClick,
              disabled: disabled || readonly,
              uiSchema,
              registry
            }
          ) })
        ]
      },
      `array-item-list-${fieldPathId.$id}`
    )
  ] }) }) });
}

// src/BaseInputTemplate/BaseInputTemplate.tsx
import {
  ariaDescribedByIds,
  examplesId,
  getInputProps
} from "@rjsf/utils";
import { useCallback as useCallback2 } from "react";
import { Input, TextField as AriaTextField } from "react-aria-components";

// src/components/Form.tsx
import {
  Form as RACForm,
  Label as RACLabel,
  FieldError as RACFieldError,
  Button,
  Text
} from "react-aria-components";
import { jsx as jsx4 } from "react/jsx-runtime";
function Label(props) {
  return /* @__PURE__ */ jsx4(RACLabel, { ...props, className: "react-aria-Label" });
}
function FieldError(props) {
  return /* @__PURE__ */ jsx4(RACFieldError, { ...props, className: "react-aria-FieldError" });
}
function Description(props) {
  return /* @__PURE__ */ jsx4(Text, { slot: "description", ...props, className: "react-aria-Description" });
}
function FieldButton(props) {
  return /* @__PURE__ */ jsx4(Button, { ...props, className: "react-aria-FieldButton" });
}

// src/BaseInputTemplate/BaseInputTemplate.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function BaseInputTemplate({
  id,
  htmlName,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  value,
  onChange,
  onChangeOverride,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors = [],
  children,
  extraProps,
  registry,
  label,
  hideLabel
}) {
  const { ClearButton: ClearButton2 } = registry.templates.ButtonTemplates;
  const inputProps = {
    ...extraProps,
    ...getInputProps(schema, type, options)
  };
  const _onChange = ({ target: { value: value2 } }) => onChange(value2 === "" ? options.emptyValue : value2);
  const _onBlur = ({ target }) => onBlur(id, target && target.value);
  const _onFocus = ({ target }) => onFocus(id, target && target.value);
  const _onClear = useCallback2(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(options.emptyValue ?? "");
    },
    [onChange, options.emptyValue]
  );
  const hasError = rawErrors.length > 0;
  return /* @__PURE__ */ jsxs4(
    AriaTextField,
    {
      className: "react-aria-TextField",
      isRequired: required,
      isDisabled: disabled,
      isReadOnly: readonly,
      isInvalid: hasError,
      children: [
        !hideLabel && label && /* @__PURE__ */ jsxs4(Label, { children: [
          label,
          required ? /* @__PURE__ */ jsx5("span", { className: "react-aria-required", children: "*" }) : null
        ] }),
        /* @__PURE__ */ jsx5(
          Input,
          {
            id,
            name: htmlName || id,
            className: "react-aria-Input",
            type,
            placeholder,
            autoFocus: autofocus,
            list: schema.examples ? examplesId(id) : void 0,
            ...inputProps,
            value: value || value === 0 ? value : "",
            onChange: onChangeOverride || _onChange,
            onBlur: _onBlur,
            onFocus: _onFocus,
            "aria-describedby": ariaDescribedByIds(id, !!schema.examples)
          }
        ),
        options.allowClearTextInputs && !readonly && !disabled && value && /* @__PURE__ */ jsx5(ClearButton2, { onClick: _onClear, registry }),
        children,
        Array.isArray(schema.examples) ? /* @__PURE__ */ jsx5("datalist", { id: examplesId(id), children: schema.examples.concat(
          schema.default && !schema.examples.includes(schema.default) ? [schema.default] : []
        ).map((example) => {
          return /* @__PURE__ */ jsx5("option", { value: example }, example);
        }) }) : null
      ]
    }
  );
}

// src/DescriptionField/DescriptionField.tsx
import { RichDescription } from "@rjsf/core";
import { jsx as jsx6 } from "react/jsx-runtime";
function DescriptionField({ id, description, registry, uiSchema }) {
  if (!description) {
    return null;
  }
  return /* @__PURE__ */ jsx6("div", { id, className: "react-aria-description-field", children: /* @__PURE__ */ jsx6(
    RichDescription,
    {
      description,
      registry,
      uiSchema
    }
  ) });
}

// src/ErrorList/ErrorList.tsx
import {
  TranslatableString as TranslatableString2
} from "@rjsf/utils";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function ErrorList({ errors, registry }) {
  const { translateString } = registry;
  return /* @__PURE__ */ jsxs5("div", { className: "react-aria-error-list", role: "alert", children: [
    /* @__PURE__ */ jsx7("div", { className: "react-aria-error-list-title", children: translateString(TranslatableString2.ErrorsLabel) }),
    /* @__PURE__ */ jsx7("ul", { className: "react-aria-error-list-items", children: errors.map((error, i) => {
      return /* @__PURE__ */ jsx7("li", { className: "react-aria-error-list-item", children: error.stack }, i);
    }) })
  ] });
}

// src/FieldErrorTemplate/FieldErrorTemplate.tsx
import {
  errorId
} from "@rjsf/utils";
import { jsx as jsx8 } from "react/jsx-runtime";
function FieldErrorTemplate(props) {
  const { errors = [], fieldPathId } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = errorId(fieldPathId);
  return /* @__PURE__ */ jsx8("div", { className: "react-aria-field-errors", id, children: errors.map((error, i) => {
    return /* @__PURE__ */ jsx8("span", { className: "react-aria-field-error", children: error }, i);
  }) });
}

// src/FieldHelpTemplate/FieldHelpTemplate.tsx
import {
  helpId
} from "@rjsf/utils";
import { RichHelp } from "@rjsf/core";
import { jsx as jsx9 } from "react/jsx-runtime";
function FieldHelpTemplate(props) {
  const { fieldPathId, help, uiSchema, registry, hasErrors } = props;
  if (!help) {
    return null;
  }
  return /* @__PURE__ */ jsx9(
    "span",
    {
      className: `react-aria-field-help ${hasErrors ? "react-aria-field-help-error" : ""}`,
      id: helpId(fieldPathId),
      children: /* @__PURE__ */ jsx9(RichHelp, { help, registry, uiSchema })
    }
  );
}

// src/FieldTemplate/FieldTemplate.tsx
import {
  getTemplate as getTemplate3,
  getUiOptions as getUiOptions3
} from "@rjsf/utils";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function FieldTemplate({
  id,
  children,
  displayLabel,
  errors,
  help,
  description,
  rawDescription,
  classNames,
  style,
  disabled,
  label,
  hidden,
  onKeyRename,
  onKeyRenameBlur,
  onRemoveProperty,
  readonly,
  required,
  schema,
  uiSchema,
  registry
}) {
  const uiOptions = getUiOptions3(uiSchema);
  const WrapIfAdditionalTemplate2 = getTemplate3("WrapIfAdditionalTemplate", registry, uiOptions);
  if (hidden) {
    return /* @__PURE__ */ jsx10("div", { className: "react-aria-hidden", children });
  }
  const isCheckbox = uiOptions.widget === "checkbox";
  return /* @__PURE__ */ jsxs6(
    WrapIfAdditionalTemplate2,
    {
      classNames,
      style,
      disabled,
      id,
      label,
      displayLabel,
      onKeyRename,
      onKeyRenameBlur,
      onRemoveProperty,
      rawDescription,
      readonly,
      required,
      schema,
      uiSchema,
      registry,
      children: [
        children,
        displayLabel && rawDescription && !isCheckbox && /* @__PURE__ */ jsx10("span", { className: "react-aria-description", children: description }),
        errors,
        help
      ]
    }
  );
}

// src/GridTemplate/GridTemplate.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function GridTemplate(props) {
  const { children, column, className, ...rest } = props;
  return /* @__PURE__ */ jsx11("div", { className: `react-aria-grid ${className || ""}`, ...rest, children });
}

// src/IconButton/IconButton.tsx
import {
  TranslatableString as TranslatableString3
} from "@rjsf/utils";
import { Button as AriaButton2 } from "react-aria-components";
import { useCallback as useCallback3 } from "react";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
function createSyntheticMouseEvent2(e) {
  return {
    preventDefault: () => {
    },
    stopPropagation: () => e.continuePropagation?.(),
    target: e.target,
    currentTarget: e.target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey
  };
}
function IconButton(props) {
  const { icon, disabled, onClick, title, id } = props;
  const handlePress = useCallback3(
    (e) => {
      onClick?.(createSyntheticMouseEvent2(e));
    },
    [onClick]
  );
  return /* @__PURE__ */ jsx12(
    AriaButton2,
    {
      id,
      className: "react-aria-Button react-aria-IconButton",
      isDisabled: disabled,
      onPress: handlePress,
      "aria-label": title,
      type: "button",
      children: icon
    }
  );
}
function CopyButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx12(
    IconButton,
    {
      title: translateString(TranslatableString3.CopyButton),
      ...props,
      icon: /* @__PURE__ */ jsxs7("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: [
        /* @__PURE__ */ jsx12("rect", { x: "6", y: "6", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx12("rect", { x: "2", y: "2", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" })
      ] })
    }
  );
}
function MoveDownButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx12(
    IconButton,
    {
      title: translateString(TranslatableString3.MoveDownButton),
      ...props,
      icon: /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsx12("path", { d: "M4 7 L9 12 L14 7", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  );
}
function MoveUpButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx12(
    IconButton,
    {
      title: translateString(TranslatableString3.MoveUpButton),
      ...props,
      icon: /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsx12("path", { d: "M4 11 L9 6 L14 11", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  );
}
function RemoveButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx12(
    IconButton,
    {
      title: translateString(TranslatableString3.RemoveButton),
      ...props,
      icon: /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsx12("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
    }
  );
}
function ClearButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx12(
    IconButton,
    {
      title: translateString(TranslatableString3.ClearButton),
      ...props,
      icon: /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsx12("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
    }
  );
}

// src/MultiSchemaFieldTemplate/MultiSchemaFieldTemplate.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
function MultiSchemaFieldTemplate({ selector, optionSchemaField }) {
  return /* @__PURE__ */ jsxs8("div", { className: "react-aria-multi-schema-field", children: [
    /* @__PURE__ */ jsx13("div", { className: "react-aria-multi-schema-selector", children: selector }),
    optionSchemaField
  ] });
}

// src/ObjectFieldTemplate/ObjectFieldTemplate.tsx
import {
  buttonId as buttonId2,
  canExpand,
  descriptionId,
  getTemplate as getTemplate4,
  getUiOptions as getUiOptions4,
  titleId
} from "@rjsf/utils";
import { Fragment, jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function ObjectFieldTemplate({
  description,
  title,
  properties,
  required,
  uiSchema,
  fieldPathId,
  schema,
  formData,
  optionalDataControl,
  onAddProperty,
  disabled,
  readonly,
  registry
}) {
  const uiOptions = getUiOptions4(uiSchema);
  const TitleFieldTemplate = getTemplate4(
    "TitleFieldTemplate",
    registry,
    uiOptions
  );
  const DescriptionFieldTemplate = getTemplate4("DescriptionFieldTemplate", registry, uiOptions);
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  return /* @__PURE__ */ jsxs9(Fragment, { children: [
    title && /* @__PURE__ */ jsx14(
      TitleFieldTemplate,
      {
        id: titleId(fieldPathId),
        title,
        required,
        schema,
        uiSchema,
        registry,
        optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
      }
    ),
    description && /* @__PURE__ */ jsx14(
      DescriptionFieldTemplate,
      {
        id: descriptionId(fieldPathId),
        description,
        schema,
        uiSchema,
        registry
      }
    ),
    /* @__PURE__ */ jsxs9("div", { className: "react-aria-object-properties", children: [
      !showOptionalDataControlInTitle ? optionalDataControl : void 0,
      properties.map((element, index) => /* @__PURE__ */ jsx14(
        "div",
        {
          className: element.hidden ? "react-aria-hidden" : "react-aria-object-property",
          children: element.content
        },
        index
      )),
      canExpand(schema, uiSchema, formData) ? /* @__PURE__ */ jsx14(
        AddButton2,
        {
          id: buttonId2(fieldPathId, "add"),
          onClick: onAddProperty,
          disabled: disabled || readonly,
          uiSchema,
          registry
        }
      ) : null
    ] })
  ] });
}

// src/OptionalDataControlsTemplate/OptionalDataControlsTemplate.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function OptionalDataControlsTemplate(props) {
  const { id, registry, label, onAddClick, onRemoveClick } = props;
  if (onAddClick) {
    return /* @__PURE__ */ jsx15(
      IconButton,
      {
        id,
        registry,
        className: "react-aria-add-optional-data",
        onClick: onAddClick,
        title: label,
        icon: /* @__PURE__ */ jsx15("span", { "aria-hidden": "true", children: "+" })
      }
    );
  } else if (onRemoveClick) {
    return /* @__PURE__ */ jsx15(
      RemoveButton,
      {
        id,
        registry,
        className: "react-aria-remove-optional-data",
        onClick: onRemoveClick,
        title: label
      }
    );
  }
  return /* @__PURE__ */ jsx15("em", { id, className: "react-aria-no-data", children: label });
}

// src/SubmitButton/SubmitButton.tsx
import {
  getSubmitButtonOptions
} from "@rjsf/utils";
import { Button as AriaButton3 } from "react-aria-components";
import { jsx as jsx16 } from "react/jsx-runtime";
function SubmitButton(props) {
  const {
    submitText,
    norender,
    props: submitButtonProps
  } = getSubmitButtonOptions(props.uiSchema);
  if (norender) {
    return null;
  }
  return /* @__PURE__ */ jsx16(
    AriaButton3,
    {
      className: "react-aria-Button react-aria-SubmitButton",
      type: "submit",
      ...submitButtonProps,
      children: submitText
    }
  );
}

// src/TitleField/TitleField.tsx
import {
  getUiOptions as getUiOptions5
} from "@rjsf/utils";
import { Separator } from "react-aria-components";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function TitleField({ id, title, uiSchema, optionalDataControl }) {
  const uiOptions = getUiOptions5(uiSchema);
  let heading = /* @__PURE__ */ jsx17("h5", { className: "react-aria-title-heading", children: uiOptions.title || title });
  if (optionalDataControl) {
    heading = /* @__PURE__ */ jsxs10("div", { className: "react-aria-title-with-control", children: [
      /* @__PURE__ */ jsx17("div", { className: "react-aria-title-heading-wrapper", children: heading }),
      /* @__PURE__ */ jsx17("div", { className: "react-aria-title-control", children: optionalDataControl })
    ] });
  }
  return /* @__PURE__ */ jsxs10("div", { id, className: "react-aria-title-field", children: [
    heading,
    /* @__PURE__ */ jsx17("div", { className: "react-aria-title-separator", children: /* @__PURE__ */ jsx17(Separator, {}) })
  ] });
}

// src/WrapIfAdditionalTemplate/WrapIfAdditionalTemplate.tsx
import {
  ADDITIONAL_PROPERTY_FLAG,
  buttonId as buttonId3,
  TranslatableString as TranslatableString4
} from "@rjsf/utils";
import { Input as Input2, Separator as Separator2 } from "react-aria-components";
import { Fragment as Fragment2, jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
function WrapIfAdditionalTemplate({
  classNames,
  style,
  children,
  disabled,
  id,
  label,
  displayLabel,
  onRemoveProperty,
  onKeyRenameBlur,
  rawDescription,
  readonly,
  required,
  schema,
  uiSchema,
  registry
}) {
  const { templates, translateString } = registry;
  const { RemoveButton: RemoveButton2 } = templates.ButtonTemplates;
  const keyLabel = translateString(TranslatableString4.KeyLabel, [label]);
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;
  if (!additional) {
    return /* @__PURE__ */ jsx18(Fragment2, { children });
  }
  const keyId = `${id}-key`;
  return /* @__PURE__ */ jsxs11(Fragment2, { children: [
    /* @__PURE__ */ jsxs11(
      "div",
      {
        className: `react-aria-additional-property ${classNames || ""}`,
        style,
        children: [
          /* @__PURE__ */ jsx18("div", { className: "react-aria-additional-property-key", children: /* @__PURE__ */ jsxs11("div", { className: "react-aria-additional-property-key-wrapper", children: [
            displayLabel && /* @__PURE__ */ jsx18(
              "label",
              {
                htmlFor: keyId,
                className: "react-aria-additional-property-label",
                children: keyLabel
              }
            ),
            /* @__PURE__ */ jsx18("div", { className: "react-aria-input-wrapper", children: /* @__PURE__ */ jsx18(
              Input2,
              {
                required,
                defaultValue: label,
                disabled: disabled || readonly,
                id: keyId,
                name: keyId,
                onBlur: !readonly ? onKeyRenameBlur : void 0,
                type: "text"
              }
            ) }),
            !!rawDescription && /* @__PURE__ */ jsx18("span", { className: "react-aria-additional-property-spacer", children: "\xA0" })
          ] }) }),
          /* @__PURE__ */ jsx18("div", { className: "react-aria-additional-property-value", children }),
          /* @__PURE__ */ jsx18("div", { className: "react-aria-additional-property-remove", children: /* @__PURE__ */ jsx18(
            RemoveButton2,
            {
              id: buttonId3(id, "remove"),
              iconType: "block",
              className: "react-aria-object-property-remove",
              disabled: disabled || readonly,
              onClick: onRemoveProperty,
              uiSchema,
              registry
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx18("div", { className: "react-aria-separator-wrapper", children: /* @__PURE__ */ jsx18(Separator2, {}) })
  ] });
}

// src/Templates/Templates.ts
function generateTemplates() {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    BaseInputTemplate,
    ButtonTemplates: {
      AddButton,
      CopyButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
      ClearButton
    },
    DescriptionFieldTemplate: DescriptionField,
    ErrorListTemplate: ErrorList,
    FieldErrorTemplate,
    FieldHelpTemplate,
    FieldTemplate,
    GridTemplate,
    MultiSchemaFieldTemplate,
    ObjectFieldTemplate,
    OptionalDataControlsTemplate,
    TitleFieldTemplate: TitleField,
    WrapIfAdditionalTemplate
  };
}
var Templates_default = generateTemplates();

// src/CheckboxWidget/CheckboxWidget.tsx
import {
  ariaDescribedByIds as ariaDescribedByIds2,
  descriptionId as descriptionId2,
  getTemplate as getTemplate5,
  labelValue,
  schemaRequiresTrueValue
} from "@rjsf/utils";

// src/components/Checkbox.tsx
import {
  Checkbox as AriaCheckbox
} from "react-aria-components";
import { Fragment as Fragment3, jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
function Checkbox({ children, ...props }) {
  return /* @__PURE__ */ jsx19(AriaCheckbox, { ...props, className: "react-aria-Checkbox", children: ({ isIndeterminate }) => /* @__PURE__ */ jsxs12(Fragment3, { children: [
    /* @__PURE__ */ jsx19("div", { className: "react-aria-Checkbox-indicator", children: /* @__PURE__ */ jsx19(
      "svg",
      {
        viewBox: "0 0 18 18",
        "aria-hidden": "true",
        children: isIndeterminate ? /* @__PURE__ */ jsx19("rect", { x: 1, y: 7.5, width: 16, height: 3 }) : /* @__PURE__ */ jsx19("polyline", { points: "2 9 7 14 16 4" })
      },
      isIndeterminate ? "indeterminate" : "check"
    ) }),
    children
  ] }) });
}

// src/CheckboxWidget/CheckboxWidget.tsx
import { jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
function CheckboxWidget(props) {
  const {
    id,
    htmlName,
    value,
    disabled,
    readonly,
    label,
    hideLabel,
    schema,
    autofocus,
    options,
    onChange,
    onBlur,
    onFocus,
    registry,
    uiSchema
  } = props;
  const required = schemaRequiresTrueValue(schema);
  const DescriptionFieldTemplate = getTemplate5("DescriptionFieldTemplate", registry, options);
  const _onChange = (isSelected) => onChange(isSelected);
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);
  const description = options.description || schema.description;
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      className: "react-aria-CheckboxWidget",
      "aria-describedby": ariaDescribedByIds2(id),
      "data-disabled": disabled || readonly || void 0,
      children: [
        !hideLabel && description && /* @__PURE__ */ jsx20(
          DescriptionFieldTemplate,
          {
            id: descriptionId2(id),
            description,
            schema,
            uiSchema,
            registry
          }
        ),
        /* @__PURE__ */ jsx20(
          Checkbox,
          {
            id,
            name: htmlName || id,
            isSelected: typeof value === "undefined" ? false : Boolean(value),
            isRequired: required,
            isDisabled: disabled || readonly,
            autoFocus: autofocus,
            onChange: _onChange,
            onBlur: _onBlur,
            onFocus: _onFocus,
            "aria-label": hideLabel || !label ? label || id : void 0,
            children: labelValue(label, hideLabel || !label)
          }
        )
      ]
    }
  );
}

// src/CheckboxesWidget/CheckboxesWidget.tsx
import {
  ariaDescribedByIds as ariaDescribedByIds3,
  optionId
} from "@rjsf/utils";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import { jsx as jsx21 } from "react/jsx-runtime";
function CheckboxesWidget({
  id,
  htmlName,
  disabled,
  options,
  value,
  autofocus,
  readonly,
  required,
  label,
  onChange,
  onBlur,
  onFocus
}) {
  const { enumOptions, enumDisabled, inline } = options;
  const selectedValues = Array.isArray(value) ? value.map((v) => String(v)) : value !== void 0 ? [String(value)] : [];
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);
  const handleChange = (newValues) => {
    const result = newValues.map((strVal) => {
      const option = enumOptions?.find((opt) => String(opt.value) === strVal);
      return option?.value;
    }).filter((v) => v !== void 0);
    onChange(result);
  };
  return /* @__PURE__ */ jsx21(
    AriaCheckboxGroup,
    {
      className: "react-aria-CheckboxGroup",
      "aria-describedby": ariaDescribedByIds3(id),
      "aria-label": label || id,
      "data-orientation": inline ? "horizontal" : "vertical",
      value: selectedValues,
      onChange: handleChange,
      isDisabled: disabled || readonly,
      isRequired: required,
      children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
        const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
        const indexOptionId = optionId(id, index);
        return /* @__PURE__ */ jsx21(
          Checkbox,
          {
            id: indexOptionId,
            name: htmlName || id,
            value: String(option.value),
            isDisabled: itemDisabled,
            autoFocus: autofocus && index === 0,
            onBlur: _onBlur,
            onFocus: _onFocus,
            children: option.label
          },
          indexOptionId
        );
      })
    }
  );
}

// src/RadioWidget/RadioWidget.tsx
import {
  ariaDescribedByIds as ariaDescribedByIds4,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  optionId as optionId2
} from "@rjsf/utils";
import { RadioGroup as AriaRadioGroup2 } from "react-aria-components";

// src/components/RadioGroup.tsx
import {
  RadioGroup as AriaRadioGroup,
  Radio as AriaRadio,
  composeRenderProps
} from "react-aria-components";
import { Fragment as Fragment4, jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxs14(AriaRadioGroup, { ...props, className: "react-aria-RadioGroup", "data-orientation": orientation, children: [
    label && /* @__PURE__ */ jsx22(Label, { children: label }),
    /* @__PURE__ */ jsx22("div", { className: "react-aria-RadioGroup-items", children }),
    description && /* @__PURE__ */ jsx22(Description, { children: description }),
    /* @__PURE__ */ jsx22(FieldError, { children: errorMessage })
  ] });
}
function Radio(props) {
  return /* @__PURE__ */ jsx22(AriaRadio, { ...props, className: "react-aria-Radio", children: composeRenderProps(props.children, (children) => /* @__PURE__ */ jsxs14(Fragment4, { children: [
    /* @__PURE__ */ jsx22("div", { className: "react-aria-Radio-indicator" }),
    children
  ] })) });
}

// src/RadioWidget/RadioWidget.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function RadioWidget({
  id,
  options,
  label,
  value,
  required,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus
}) {
  const { enumOptions, enumDisabled, emptyValue } = options;
  const _onChange = (newValue) => {
    onChange(enumOptionsValueForIndex(newValue, enumOptions, emptyValue));
  };
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);
  const inline = Boolean(options && options.inline);
  const selectedIndex = enumOptionsIndexForValue(value, enumOptions);
  const selectedValue = selectedIndex !== void 0 ? String(selectedIndex) : void 0;
  return /* @__PURE__ */ jsx23(
    AriaRadioGroup2,
    {
      className: "react-aria-RadioGroup",
      value: selectedValue ?? null,
      isRequired: required,
      isDisabled: disabled || readonly,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
      "aria-describedby": ariaDescribedByIds4(id),
      "aria-label": label || id,
      orientation: inline ? "horizontal" : "vertical",
      "data-orientation": inline ? "horizontal" : "vertical",
      children: /* @__PURE__ */ jsx23("div", { className: "react-aria-RadioGroup-items", children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
        const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
        return /* @__PURE__ */ jsx23(
          Radio,
          {
            value: String(index),
            isDisabled: itemDisabled,
            children: option.label
          },
          optionId2(id, index)
        );
      }) })
    }
  );
}

// src/RangeWidget/RangeWidget.tsx
import {
  ariaDescribedByIds as ariaDescribedByIds5,
  rangeSpec
} from "@rjsf/utils";
import {
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from "react-aria-components";
import { Fragment as Fragment5, jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";
function RangeWidget({
  value,
  readonly,
  disabled,
  schema,
  onChange,
  label,
  id
}) {
  const { min = 0, max = 100, step } = rangeSpec(schema);
  const currentValue = value ?? min;
  return /* @__PURE__ */ jsxs15(
    AriaSlider,
    {
      className: "react-aria-Slider",
      value: currentValue,
      onChange,
      minValue: min,
      maxValue: max,
      step,
      isDisabled: disabled || readonly,
      "aria-describedby": ariaDescribedByIds5(id),
      "aria-label": label || id,
      children: [
        label && /* @__PURE__ */ jsx24(Label, { children: label }),
        /* @__PURE__ */ jsx24(SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" \u2013 ") }),
        /* @__PURE__ */ jsx24(SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => /* @__PURE__ */ jsxs15(Fragment5, { children: [
          /* @__PURE__ */ jsx24(
            "div",
            {
              className: "react-aria-SliderTrack-rail",
              "data-disabled": isDisabled || void 0,
              children: state.values.length === 1 ? /* @__PURE__ */ jsx24(
                "div",
                {
                  className: "react-aria-SliderTrack-fill",
                  style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" }
                }
              ) : state.values.length === 2 ? /* @__PURE__ */ jsx24(
                "div",
                {
                  className: "react-aria-SliderTrack-fill",
                  style: {
                    "--fill-start": state.getThumbPercent(0) * 100 + "%",
                    "--fill-size": (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + "%"
                  }
                }
              ) : null
            }
          ),
          state.values.map((_, i) => /* @__PURE__ */ jsx24(SliderThumb, { index: i, className: "react-aria-SliderThumb" }, i))
        ] }) })
      ]
    }
  );
}

// src/SelectWidget/SelectWidget.tsx
import {
  ariaDescribedByIds as ariaDescribedByIds6,
  enumOptionsIndexForValue as enumOptionsIndexForValue2,
  enumOptionsValueForIndex as enumOptionsValueForIndex2
} from "@rjsf/utils";
import {
  Button as Button2,
  ListBox,
  ListBoxItem,
  Select as AriaSelect,
  SelectValue
} from "react-aria-components";

// src/components/Popover.tsx
import {
  OverlayArrow,
  Popover as AriaPopover
} from "react-aria-components";
import { Fragment as Fragment6, jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
function Popover({ children, hideArrow, className, ...props }) {
  return /* @__PURE__ */ jsx25(AriaPopover, { ...props, className: `react-aria-Popover ${className || ""}`, children: ({ trigger }) => /* @__PURE__ */ jsxs16(Fragment6, { children: [
    !hideArrow && trigger !== "MenuTrigger" && trigger !== "SubmenuTrigger" && /* @__PURE__ */ jsx25(OverlayArrow, { className: "react-aria-OverlayArrow", children: /* @__PURE__ */ jsx25("svg", { width: 12, height: 12, viewBox: "0 0 12 12", children: /* @__PURE__ */ jsx25("path", { d: "M0 0 L6 6 L12 0" }) }) }),
    children
  ] }) });
}

// src/SelectWidget/SelectWidget.tsx
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
function SelectWidget({
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  defaultValue,
  placeholder,
  rawErrors = []
}) {
  const { enumOptions, enumDisabled, emptyValue: optEmptyValue } = options;
  const _onFocus = () => {
    onFocus(id, enumOptionsValueForIndex2(value, enumOptions, optEmptyValue));
  };
  const _onBlur = () => {
    onBlur(id, enumOptionsValueForIndex2(value, enumOptions, optEmptyValue));
  };
  const hasError = rawErrors.length > 0;
  if (multiple) {
    return /* @__PURE__ */ jsxs17("div", { className: "react-aria-Select", "data-multiple": true, children: [
      label && /* @__PURE__ */ jsx26(Label, { children: label }),
      /* @__PURE__ */ jsx26(
        "select",
        {
          id,
          multiple: true,
          required,
          disabled: disabled || readonly,
          autoFocus: autofocus,
          value: Array.isArray(value) ? value.map(
            (v) => enumOptionsIndexForValue2(v, enumOptions, false)?.toString() || ""
          ).filter(Boolean) : [],
          onChange: (e) => {
            const selectedOptions = Array.from(e.target.selectedOptions).map(
              (opt) => opt.value
            );
            onChange(
              enumOptionsValueForIndex2(
                selectedOptions,
                enumOptions,
                optEmptyValue
              )
            );
          },
          onFocus: _onFocus,
          onBlur: _onBlur,
          className: "react-aria-Select-native",
          "aria-describedby": ariaDescribedByIds6(id),
          "data-invalid": hasError || void 0,
          children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
            const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.includes(option.value);
            return /* @__PURE__ */ jsx26(
              "option",
              {
                value: index.toString(),
                disabled: itemDisabled,
                children: option.label
              },
              index
            );
          })
        }
      )
    ] });
  }
  const selectedIndex = enumOptionsIndexForValue2(
    value ?? defaultValue,
    enumOptions,
    false
  );
  return /* @__PURE__ */ jsxs17(
    AriaSelect,
    {
      className: "react-aria-Select",
      id,
      isRequired: required,
      isDisabled: disabled || readonly,
      isInvalid: hasError,
      autoFocus: autofocus,
      selectedKey: selectedIndex !== void 0 ? selectedIndex.toString() : null,
      onSelectionChange: (key) => {
        onChange(
          enumOptionsValueForIndex2(
            key,
            enumOptions,
            optEmptyValue
          )
        );
      },
      onFocus: _onFocus,
      onBlur: _onBlur,
      "aria-describedby": ariaDescribedByIds6(id),
      children: [
        label && /* @__PURE__ */ jsx26(Label, { children: label }),
        /* @__PURE__ */ jsxs17(Button2, { className: "react-aria-Select-button", children: [
          /* @__PURE__ */ jsx26(SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }),
          /* @__PURE__ */ jsx26(
            "svg",
            {
              viewBox: "0 0 12 12",
              "aria-hidden": "true",
              className: "react-aria-Select-chevron",
              children: /* @__PURE__ */ jsx26("path", { d: "M2 4 L6 8 L10 4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx26(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: /* @__PURE__ */ jsx26(ListBox, { className: "react-aria-ListBox", children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
          const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.includes(option.value);
          return /* @__PURE__ */ jsx26(
            ListBoxItem,
            {
              id: index.toString(),
              isDisabled: itemDisabled,
              className: "react-aria-ListBoxItem",
              children: option.label
            },
            index
          );
        }) }) })
      ]
    }
  );
}

// src/TextareaWidget/TextareaWidget.tsx
import {
  ariaDescribedByIds as ariaDescribedByIds7
} from "@rjsf/utils";
import { TextArea, TextField as AriaTextField2 } from "react-aria-components";
import { jsx as jsx27, jsxs as jsxs18 } from "react/jsx-runtime";
function TextareaWidget({
  id,
  htmlName,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  label,
  hideLabel,
  rawErrors = []
}) {
  const _onChange = ({ target: { value: value2 } }) => onChange(value2 === "" ? options.emptyValue : value2);
  const _onBlur = ({ target }) => onBlur(id, target && target.value);
  const _onFocus = ({ target }) => onFocus(id, target && target.value);
  const hasError = rawErrors.length > 0;
  return /* @__PURE__ */ jsxs18(
    AriaTextField2,
    {
      className: "react-aria-TextField",
      isRequired: required,
      isDisabled: disabled,
      isReadOnly: readonly,
      isInvalid: hasError,
      children: [
        !hideLabel && label && /* @__PURE__ */ jsxs18(Label, { children: [
          label,
          required ? /* @__PURE__ */ jsx27("span", { className: "react-aria-required", children: "*" }) : null
        ] }),
        /* @__PURE__ */ jsx27(
          TextArea,
          {
            id,
            name: htmlName || id,
            className: "react-aria-TextArea",
            placeholder,
            value: value ?? "",
            autoFocus: autofocus,
            rows: options.rows || 5,
            onChange: _onChange,
            onBlur: _onBlur,
            onFocus: _onFocus,
            "aria-describedby": ariaDescribedByIds7(id)
          }
        )
      ]
    }
  );
}

// src/Widgets/Widgets.ts
function generateWidgets() {
  return {
    CheckboxWidget,
    CheckboxesWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    TextareaWidget
  };
}
var Widgets_default = generateWidgets();

// src/Theme/Theme.tsx
function generateTheme() {
  return {
    templates: generateTemplates(),
    widgets: generateWidgets()
  };
}
var Theme_default = generateTheme();

// src/Form/Form.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var ReactAriaFormWrapper = forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx28("div", { className, children: /* @__PURE__ */ jsx28(AriaForm, { ...props, ref }) });
});
ReactAriaFormWrapper.displayName = "ReactAriaFormWrapper";
function generateForm() {
  const ThemedForm = withTheme(generateTheme());
  const AriaThemedForm = forwardRef((props, ref) => {
    return /* @__PURE__ */ jsx28(ThemedForm, { ...props, ref, tagName: ReactAriaFormWrapper });
  });
  AriaThemedForm.displayName = "AriaThemedForm";
  return AriaThemedForm;
}
var Form_default = generateForm();

// src/ReactAriaFrameProvider.tsx
import { UNSAFE_PortalProvider } from "@react-aria/overlays";
import { jsx as jsx29 } from "react/jsx-runtime";
var __createReactAriaFrameProvider = (props) => ({ document }) => {
  return /* @__PURE__ */ jsx29(UNSAFE_PortalProvider, { getContainer: () => document?.body ?? null, children: props.children });
};

// src/components/Button.tsx
import { Button as RACButton, composeRenderProps as composeRenderProps2 } from "react-aria-components";
import { Fragment as Fragment7, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
function Button3(props) {
  return /* @__PURE__ */ jsx30(
    RACButton,
    {
      ...props,
      className: "react-aria-Button",
      "data-variant": props.variant || "primary",
      children: composeRenderProps2(props.children, (children, { isPending }) => /* @__PURE__ */ jsxs19(Fragment7, { children: [
        !isPending && children,
        isPending && /* @__PURE__ */ jsx30("span", { className: "react-aria-Button-spinner", children: "..." })
      ] }))
    }
  );
}

// src/components/CheckboxGroup.tsx
import {
  CheckboxGroup as AriaCheckboxGroup2
} from "react-aria-components";
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxs20(AriaCheckboxGroup2, { ...props, className: "react-aria-CheckboxGroup", "data-orientation": orientation, children: [
    label && /* @__PURE__ */ jsx31(Label, { children: label }),
    /* @__PURE__ */ jsx31("div", { className: "react-aria-CheckboxGroup-items", children }),
    description && /* @__PURE__ */ jsx31(Description, { children: description }),
    /* @__PURE__ */ jsx31(FieldError, { children: errorMessage })
  ] });
}

// src/components/ListBox.tsx
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxSection as AriaListBoxSection,
  composeRenderProps as composeRenderProps3,
  Text as Text2
} from "react-aria-components";
import { Fragment as Fragment8, jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
function ListBox2({ children, ...props }) {
  return /* @__PURE__ */ jsx32(AriaListBox, { ...props, className: "react-aria-ListBox", children });
}
function ListBoxItem2(props) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ jsx32(AriaListBoxItem, { ...props, textValue, className: "react-aria-ListBoxItem", children: composeRenderProps3(
    props.children,
    (children) => typeof children === "string" ? /* @__PURE__ */ jsx32(Text2, { slot: "label", children }) : children
  ) });
}
function ListBoxSection(props) {
  return /* @__PURE__ */ jsx32(AriaListBoxSection, { ...props, className: "react-aria-ListBoxSection" });
}
function DropdownListBox(props) {
  return /* @__PURE__ */ jsx32(AriaListBox, { ...props, className: "react-aria-DropdownListBox" });
}
function DropdownItem(props) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ jsx32(ListBoxItem2, { ...props, textValue, className: "react-aria-DropdownItem", children: composeRenderProps3(props.children, (children, { isSelected }) => /* @__PURE__ */ jsxs21(Fragment8, { children: [
    isSelected && /* @__PURE__ */ jsx32(
      "svg",
      {
        viewBox: "0 0 18 18",
        "aria-hidden": "true",
        className: "react-aria-DropdownItem-check",
        children: /* @__PURE__ */ jsx32("polyline", { points: "2 9 7 14 16 4" })
      }
    ),
    typeof children === "string" ? /* @__PURE__ */ jsx32(Text2, { slot: "label", children }) : children
  ] })) });
}

// src/components/Select.tsx
import {
  Select as AriaSelect2,
  SelectValue as SelectValue2,
  Button as Button4
} from "react-aria-components";
import { jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
function Select({
  label,
  description,
  errorMessage,
  children,
  items,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ jsxs22(AriaSelect2, { ...props, className: "react-aria-Select", children: [
    label && /* @__PURE__ */ jsx33(Label, { children: label }),
    /* @__PURE__ */ jsxs22(Button4, { className: "react-aria-Select-button", children: [
      /* @__PURE__ */ jsx33(SelectValue2, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }),
      /* @__PURE__ */ jsx33(
        "svg",
        {
          viewBox: "0 0 12 12",
          "aria-hidden": "true",
          className: "react-aria-Select-chevron",
          children: /* @__PURE__ */ jsx33("path", { d: "M2 4 L6 8 L10 4" })
        }
      )
    ] }),
    description && /* @__PURE__ */ jsx33(Description, { children: description }),
    /* @__PURE__ */ jsx33(FieldError, { children: errorMessage }),
    /* @__PURE__ */ jsx33(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: /* @__PURE__ */ jsx33(SelectListBox, { items, children }) })
  ] });
}
function SelectListBox(props) {
  return /* @__PURE__ */ jsx33(DropdownListBox, { ...props });
}
function SelectItem(props) {
  return /* @__PURE__ */ jsx33(DropdownItem, { ...props });
}

// src/components/TextField.tsx
import {
  Input as Input3,
  TextField as AriaTextField3,
  TextArea as TextArea2
} from "react-aria-components";
import { jsx as jsx34, jsxs as jsxs23 } from "react/jsx-runtime";
function TextField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(AriaTextField3, { ...props, className: "react-aria-TextField", children: [
    label && /* @__PURE__ */ jsx34(Label, { children: label }),
    /* @__PURE__ */ jsx34(Input3, { className: "react-aria-Input", placeholder }),
    description && /* @__PURE__ */ jsx34(Description, { children: description }),
    /* @__PURE__ */ jsx34(FieldError, { children: errorMessage })
  ] });
}
function TextAreaField({
  label,
  description,
  errorMessage,
  placeholder,
  rows = 5,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(AriaTextField3, { ...props, className: "react-aria-TextField", children: [
    label && /* @__PURE__ */ jsx34(Label, { children: label }),
    /* @__PURE__ */ jsx34(TextArea2, { className: "react-aria-TextArea", placeholder, rows }),
    description && /* @__PURE__ */ jsx34(Description, { children: description }),
    /* @__PURE__ */ jsx34(FieldError, { children: errorMessage })
  ] });
}

// src/components/Slider.tsx
import {
  Slider as AriaSlider2,
  SliderOutput as SliderOutput2,
  SliderThumb as SliderThumb2,
  SliderTrack as SliderTrack2
} from "react-aria-components";
import { Fragment as Fragment9, jsx as jsx35, jsxs as jsxs24 } from "react/jsx-runtime";
function Slider({
  label,
  thumbLabels,
  ...props
}) {
  return /* @__PURE__ */ jsxs24(AriaSlider2, { ...props, className: "react-aria-Slider", children: [
    label && /* @__PURE__ */ jsx35(Label, { children: label }),
    /* @__PURE__ */ jsx35(SliderOutput2, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" \u2013 ") }),
    /* @__PURE__ */ jsx35(SliderTrack2, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => /* @__PURE__ */ jsxs24(Fragment9, { children: [
      /* @__PURE__ */ jsx35(
        "div",
        {
          className: "react-aria-SliderTrack-rail",
          "data-disabled": isDisabled || void 0,
          children: state.values.length === 1 ? (
            // Single thumb, render fill from the start
            /* @__PURE__ */ jsx35(
              "div",
              {
                className: "react-aria-SliderTrack-fill",
                style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" }
              }
            )
          ) : state.values.length === 2 ? (
            // Range slider, render fill between the thumbs
            /* @__PURE__ */ jsx35(
              "div",
              {
                className: "react-aria-SliderTrack-fill",
                style: {
                  "--fill-start": state.getThumbPercent(0) * 100 + "%",
                  "--fill-size": (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + "%"
                }
              }
            )
          ) : null
        }
      ),
      state.values.map((_, i) => /* @__PURE__ */ jsx35(
        SliderThumb2,
        {
          index: i,
          "aria-label": thumbLabels?.[i],
          className: "react-aria-SliderThumb"
        },
        i
      ))
    ] }) })
  ] });
}

// src/components/NumberField.tsx
import {
  Group,
  Input as Input4,
  NumberField as AriaNumberField,
  Button as Button5
} from "react-aria-components";
import { jsx as jsx36, jsxs as jsxs25 } from "react/jsx-runtime";
function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(AriaNumberField, { ...props, className: "react-aria-NumberField", children: [
    label && /* @__PURE__ */ jsx36(Label, { children: label }),
    /* @__PURE__ */ jsxs25(Group, { className: "react-aria-NumberField-group", children: [
      /* @__PURE__ */ jsx36(Input4, { className: "react-aria-Input", placeholder }),
      /* @__PURE__ */ jsx36(Button5, { slot: "decrement", className: "react-aria-NumberField-button", children: /* @__PURE__ */ jsx36("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsx36("path", { d: "M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }),
      /* @__PURE__ */ jsx36(Button5, { slot: "increment", className: "react-aria-NumberField-button", children: /* @__PURE__ */ jsx36("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsx36("path", { d: "M9 4 L9 14 M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
    ] }),
    description && /* @__PURE__ */ jsx36(Description, { children: description }),
    /* @__PURE__ */ jsx36(FieldError, { children: errorMessage })
  ] });
}

// src/components/Switch.tsx
import {
  Switch as AriaSwitch
} from "react-aria-components";
import { Fragment as Fragment10, jsx as jsx37, jsxs as jsxs26 } from "react/jsx-runtime";
function Switch({ children, ...props }) {
  return /* @__PURE__ */ jsx37(AriaSwitch, { ...props, className: "react-aria-Switch", children: ({ isSelected, isDisabled }) => /* @__PURE__ */ jsxs26(Fragment10, { children: [
    /* @__PURE__ */ jsx37("div", { className: "react-aria-Switch-track", children: /* @__PURE__ */ jsx37(
      "div",
      {
        className: "react-aria-Switch-handle",
        "data-selected": isSelected || void 0,
        "data-disabled": isDisabled || void 0
      }
    ) }),
    children
  ] }) });
}

// src/components/ComboBox.tsx
import {
  ComboBox as AriaComboBox,
  Input as Input5,
  Button as Button6
} from "react-aria-components";
import { jsx as jsx38, jsxs as jsxs27 } from "react/jsx-runtime";
function ComboBox({
  label,
  description,
  errorMessage,
  children,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ jsxs27(AriaComboBox, { ...props, className: "react-aria-ComboBox", children: [
    label && /* @__PURE__ */ jsx38(Label, { children: label }),
    /* @__PURE__ */ jsxs27("div", { className: "react-aria-ComboBox-field", children: [
      /* @__PURE__ */ jsx38(Input5, { className: "react-aria-Input", placeholder }),
      /* @__PURE__ */ jsx38(Button6, { className: "react-aria-ComboBox-button", children: /* @__PURE__ */ jsx38("svg", { viewBox: "0 0 12 12", "aria-hidden": "true", children: /* @__PURE__ */ jsx38("path", { d: "M2 4 L6 8 L10 4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    description && /* @__PURE__ */ jsx38(Description, { children: description }),
    /* @__PURE__ */ jsx38(FieldError, { children: errorMessage }),
    /* @__PURE__ */ jsx38(Popover, { hideArrow: true, className: "react-aria-ComboBox-popover", children: /* @__PURE__ */ jsx38(ComboBoxListBox, { children }) })
  ] });
}
function ComboBoxListBox(props) {
  return /* @__PURE__ */ jsx38(DropdownListBox, { ...props });
}
function ComboBoxItem(props) {
  return /* @__PURE__ */ jsx38(DropdownItem, { ...props });
}

// src/components/DateField.tsx
import {
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment
} from "react-aria-components";
import { jsx as jsx39, jsxs as jsxs28 } from "react/jsx-runtime";
function DateField({
  label,
  description,
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ jsxs28(AriaDateField, { ...props, className: "react-aria-DateField", children: [
    label && /* @__PURE__ */ jsx39(Label, { children: label }),
    /* @__PURE__ */ jsx39(DateInput, { children: (segment) => /* @__PURE__ */ jsx39(DateSegment, { segment }) }),
    description && /* @__PURE__ */ jsx39(Description, { children: description }),
    /* @__PURE__ */ jsx39(FieldError, { children: errorMessage })
  ] });
}
function DateInput(props) {
  return /* @__PURE__ */ jsx39(AriaDateInput, { ...props, className: "react-aria-DateInput" });
}
function DateSegment(props) {
  return /* @__PURE__ */ jsx39(AriaDateSegment, { ...props, className: "react-aria-DateSegment" });
}

// src/components/TimeField.tsx
import {
  TimeField as AriaTimeField
} from "react-aria-components";
import { jsx as jsx40, jsxs as jsxs29 } from "react/jsx-runtime";
function TimeField({
  label,
  description,
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ jsxs29(AriaTimeField, { ...props, className: "react-aria-TimeField", children: [
    label && /* @__PURE__ */ jsx40(Label, { children: label }),
    /* @__PURE__ */ jsx40(DateInput, { children: (segment) => /* @__PURE__ */ jsx40(DateSegment, { segment }) }),
    description && /* @__PURE__ */ jsx40(Description, { children: description }),
    /* @__PURE__ */ jsx40(FieldError, { children: errorMessage })
  ] });
}

// src/components/Calendar.tsx
import {
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  Button as Button7,
  Heading as Heading2
} from "react-aria-components";

// src/components/Content.tsx
import {
  Heading as AriaHeading,
  Text as AriaText
} from "react-aria-components";
import { jsx as jsx41 } from "react/jsx-runtime";
function Heading(props) {
  return /* @__PURE__ */ jsx41(AriaHeading, { ...props, className: "react-aria-Heading" });
}
function Text3(props) {
  return /* @__PURE__ */ jsx41(AriaText, { ...props, className: "react-aria-Text" });
}

// src/components/Calendar.tsx
import { jsx as jsx42, jsxs as jsxs30 } from "react/jsx-runtime";
function Calendar({
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ jsxs30(AriaCalendar, { ...props, className: "react-aria-Calendar", children: [
    /* @__PURE__ */ jsxs30("header", { className: "react-aria-Calendar-header", children: [
      /* @__PURE__ */ jsx42(Button7, { slot: "previous", className: "react-aria-Calendar-nav", children: /* @__PURE__ */ jsx42("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsx42("path", { d: "M11 4 L6 9 L11 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ jsx42(Heading2, { className: "react-aria-Calendar-heading" }),
      /* @__PURE__ */ jsx42(Button7, { slot: "next", className: "react-aria-Calendar-nav", children: /* @__PURE__ */ jsx42("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsx42("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ jsx42(CalendarGrid, { children: (date) => /* @__PURE__ */ jsx42(CalendarCell, { date }) }),
    errorMessage && /* @__PURE__ */ jsx42(Text3, { slot: "errorMessage", children: errorMessage })
  ] });
}
function CalendarCell(props) {
  return /* @__PURE__ */ jsx42(AriaCalendarCell, { ...props, className: "react-aria-CalendarCell" });
}
function CalendarGrid(props) {
  return /* @__PURE__ */ jsx42(AriaCalendarGrid, { ...props, className: "react-aria-CalendarGrid" });
}

// src/components/DatePicker.tsx
import {
  DatePicker as AriaDatePicker,
  Group as Group2,
  Button as Button8
} from "react-aria-components";
import { jsx as jsx43, jsxs as jsxs31 } from "react/jsx-runtime";
function DatePicker({
  label,
  description,
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ jsxs31(AriaDatePicker, { ...props, className: "react-aria-DatePicker", children: [
    label && /* @__PURE__ */ jsx43(Label, { children: label }),
    /* @__PURE__ */ jsxs31(Group2, { className: "react-aria-DatePicker-group", children: [
      /* @__PURE__ */ jsx43(DateInput, { children: (segment) => /* @__PURE__ */ jsx43(DateSegment, { segment }) }),
      /* @__PURE__ */ jsx43(Button8, { className: "react-aria-DatePicker-button", children: /* @__PURE__ */ jsxs31("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx43("rect", { x: "2", y: "4", width: "14", height: "12", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx43("path", { d: "M2 8 L16 8", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx43("path", { d: "M6 2 L6 5 M12 2 L12 5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
      ] }) })
    ] }),
    description && /* @__PURE__ */ jsx43(Description, { children: description }),
    /* @__PURE__ */ jsx43(FieldError, { children: errorMessage }),
    /* @__PURE__ */ jsx43(Popover, { hideArrow: true, className: "react-aria-DatePicker-popover", children: /* @__PURE__ */ jsx43(Calendar, {}) })
  ] });
}

// src/components/SearchField.tsx
import {
  Button as Button9,
  Input as Input6,
  SearchField as AriaSearchField
} from "react-aria-components";
import { jsx as jsx44, jsxs as jsxs32 } from "react/jsx-runtime";
function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ jsxs32(AriaSearchField, { ...props, className: "react-aria-SearchField", children: [
    label && /* @__PURE__ */ jsx44(Label, { children: label }),
    /* @__PURE__ */ jsxs32("div", { className: "react-aria-SearchField-wrapper", children: [
      /* @__PURE__ */ jsxs32("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-SearchField-icon", children: [
        /* @__PURE__ */ jsx44("circle", { cx: "7", cy: "7", r: "5", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx44("path", { d: "M11 11 L15 15", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
      ] }),
      /* @__PURE__ */ jsx44(Input6, { placeholder, className: "react-aria-Input" }),
      /* @__PURE__ */ jsx44(Button9, { className: "react-aria-SearchField-clear", children: /* @__PURE__ */ jsx44("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsx44("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
    ] }),
    description && /* @__PURE__ */ jsx44(Description, { children: description }),
    /* @__PURE__ */ jsx44(FieldError, { children: errorMessage })
  ] });
}

// src/components/Dialog.tsx
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger
} from "react-aria-components";
import { jsx as jsx45 } from "react/jsx-runtime";
function Dialog(props) {
  return /* @__PURE__ */ jsx45(AriaDialog, { ...props, className: "react-aria-Dialog" });
}
function DialogTrigger(props) {
  return /* @__PURE__ */ jsx45(AriaDialogTrigger, { ...props });
}

// src/components/Modal.tsx
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay
} from "react-aria-components";
import { jsx as jsx46 } from "react/jsx-runtime";
function Modal(props) {
  return /* @__PURE__ */ jsx46(AriaModal, { ...props, className: "react-aria-Modal" });
}
function ModalOverlay(props) {
  return /* @__PURE__ */ jsx46(AriaModalOverlay, { ...props, className: "react-aria-ModalOverlay" });
}

// src/components/Tooltip.tsx
import {
  OverlayArrow as OverlayArrow2,
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger
} from "react-aria-components";
import { jsx as jsx47, jsxs as jsxs33 } from "react/jsx-runtime";
function Tooltip({ children, ...props }) {
  return /* @__PURE__ */ jsxs33(AriaTooltip, { ...props, className: "react-aria-Tooltip", children: [
    /* @__PURE__ */ jsx47(OverlayArrow2, { className: "react-aria-OverlayArrow", children: /* @__PURE__ */ jsx47("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: /* @__PURE__ */ jsx47("path", { d: "M0 0 L4 4 L8 0" }) }) }),
    children
  ] });
}
function TooltipTrigger(props) {
  return /* @__PURE__ */ jsx47(AriaTooltipTrigger, { ...props });
}

// src/components/Separator.tsx
import {
  Separator as AriaSeparator
} from "react-aria-components";
import { jsx as jsx48 } from "react/jsx-runtime";
function Separator3(props) {
  return /* @__PURE__ */ jsx48(AriaSeparator, { ...props, className: "react-aria-Separator" });
}

// src/components/Link.tsx
import {
  Link as AriaLink
} from "react-aria-components";
import { jsx as jsx49 } from "react/jsx-runtime";
function Link(props) {
  return /* @__PURE__ */ jsx49(AriaLink, { ...props, className: "react-aria-Link" });
}

// src/components/TagGroup.tsx
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagList,
  Button as Button10
} from "react-aria-components";
import { Fragment as Fragment11, jsx as jsx50, jsxs as jsxs34 } from "react/jsx-runtime";
function TagGroup({
  label,
  description,
  errorMessage,
  items,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs34(AriaTagGroup, { ...props, className: "react-aria-TagGroup", children: [
    label && /* @__PURE__ */ jsx50(Label, { children: label }),
    /* @__PURE__ */ jsx50(TagList, { items, className: "react-aria-TagList", children }),
    description && /* @__PURE__ */ jsx50(Description, { children: description }),
    errorMessage && /* @__PURE__ */ jsx50(Text3, { slot: "errorMessage", children: errorMessage })
  ] });
}
function Tag({ children, ...props }) {
  const textValue = typeof children === "string" ? children : void 0;
  return /* @__PURE__ */ jsx50(AriaTag, { textValue, ...props, className: "react-aria-Tag", children: ({ allowsRemoving }) => /* @__PURE__ */ jsxs34(Fragment11, { children: [
    children,
    allowsRemoving && /* @__PURE__ */ jsx50(Button10, { slot: "remove", className: "react-aria-Tag-remove", children: /* @__PURE__ */ jsx50("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsx50("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
  ] }) });
}

// src/components/Menu.tsx
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuTrigger as AriaMenuTrigger,
  SubmenuTrigger as AriaSubmenuTrigger,
  composeRenderProps as composeRenderProps4
} from "react-aria-components";
import { Fragment as Fragment12, jsx as jsx51, jsxs as jsxs35 } from "react/jsx-runtime";
function MenuTrigger(props) {
  return /* @__PURE__ */ jsx51(AriaMenuTrigger, { ...props });
}
function Menu(props) {
  return /* @__PURE__ */ jsx51(AriaMenu, { ...props, className: "react-aria-Menu" });
}
function MenuItem(props) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ jsx51(AriaMenuItem, { ...props, textValue, className: "react-aria-MenuItem", children: composeRenderProps4(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => /* @__PURE__ */ jsxs35(Fragment12, { children: [
    selectionMode === "multiple" && isSelected && /* @__PURE__ */ jsx51("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-check", children: /* @__PURE__ */ jsx51("polyline", { points: "2 9 7 14 16 4", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }),
    selectionMode === "single" && isSelected && /* @__PURE__ */ jsx51("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-dot", children: /* @__PURE__ */ jsx51("circle", { cx: "9", cy: "9", r: "3", fill: "currentColor" }) }),
    typeof children === "string" ? /* @__PURE__ */ jsx51(Text3, { slot: "label", children }) : children,
    hasSubmenu && /* @__PURE__ */ jsx51("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-chevron", children: /* @__PURE__ */ jsx51("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
  ] })) });
}
function MenuSection(props) {
  return /* @__PURE__ */ jsx51(AriaMenuSection, { ...props, className: "react-aria-MenuSection" });
}
function SubmenuTrigger(props) {
  return /* @__PURE__ */ jsx51(AriaSubmenuTrigger, { ...props });
}

// src/components/ProgressBar.tsx
import {
  ProgressBar as AriaProgressBar
} from "react-aria-components";
import { Fragment as Fragment13, jsx as jsx52, jsxs as jsxs36 } from "react/jsx-runtime";
function ProgressBar({ label, ...props }) {
  return /* @__PURE__ */ jsx52(AriaProgressBar, { ...props, className: "react-aria-ProgressBar", children: ({ percentage, valueText, isIndeterminate }) => /* @__PURE__ */ jsxs36(Fragment13, { children: [
    label && /* @__PURE__ */ jsx52(Label, { children: label }),
    /* @__PURE__ */ jsx52("span", { className: "react-aria-ProgressBar-value", children: valueText }),
    /* @__PURE__ */ jsx52("div", { className: "react-aria-ProgressBar-track", children: /* @__PURE__ */ jsx52(
      "div",
      {
        className: "react-aria-ProgressBar-fill",
        style: {
          "--progress-percent": (isIndeterminate ? 100 : percentage) + "%"
        }
      }
    ) })
  ] }) });
}

// src/index.ts
var index_default = Form_default;
export {
  Button3 as Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Checkbox,
  CheckboxGroup,
  ComboBox,
  ComboBoxItem,
  ComboBoxListBox,
  DateField,
  DateInput,
  DatePicker,
  DateSegment,
  Description,
  Dialog,
  DialogTrigger,
  DropdownItem,
  DropdownListBox,
  FieldButton,
  FieldError,
  Form_default as Form,
  Heading,
  Label,
  Link,
  ListBox2 as ListBox,
  ListBoxItem2 as ListBoxItem,
  ListBoxSection,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  Modal,
  ModalOverlay,
  NumberField,
  Popover,
  ProgressBar,
  Radio,
  RadioGroup,
  SearchField,
  Select,
  SelectItem,
  SelectListBox,
  Separator3 as Separator,
  Slider,
  SubmenuTrigger,
  Switch,
  Tag,
  TagGroup,
  Templates_default as Templates,
  Text3 as Text,
  TextAreaField,
  TextField,
  Theme_default as Theme,
  TimeField,
  Tooltip,
  TooltipTrigger,
  Widgets_default as Widgets,
  __createReactAriaFrameProvider,
  index_default as default,
  generateForm,
  generateTemplates,
  generateTheme,
  generateWidgets
};
//# sourceMappingURL=rjsf-react-aria.esm.js.map
