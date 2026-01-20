"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button3,
  Calendar: () => Calendar,
  CalendarCell: () => CalendarCell,
  CalendarGrid: () => CalendarGrid,
  Checkbox: () => Checkbox,
  CheckboxGroup: () => CheckboxGroup,
  ComboBox: () => ComboBox,
  ComboBoxItem: () => ComboBoxItem,
  ComboBoxListBox: () => ComboBoxListBox,
  DateField: () => DateField,
  DateInput: () => DateInput,
  DatePicker: () => DatePicker,
  DateSegment: () => DateSegment,
  Description: () => Description,
  Dialog: () => Dialog,
  DialogTrigger: () => DialogTrigger,
  DropdownItem: () => DropdownItem,
  DropdownListBox: () => DropdownListBox,
  FieldButton: () => FieldButton,
  FieldError: () => FieldError,
  Form: () => Form_default,
  Heading: () => Heading,
  Label: () => Label,
  Link: () => Link,
  ListBox: () => ListBox2,
  ListBoxItem: () => ListBoxItem2,
  ListBoxSection: () => ListBoxSection,
  Menu: () => Menu,
  MenuItem: () => MenuItem,
  MenuSection: () => MenuSection,
  MenuTrigger: () => MenuTrigger,
  Modal: () => Modal,
  ModalOverlay: () => ModalOverlay,
  NumberField: () => NumberField,
  Popover: () => Popover,
  ProgressBar: () => ProgressBar,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  SearchField: () => SearchField,
  Select: () => Select,
  SelectItem: () => SelectItem,
  SelectListBox: () => SelectListBox,
  Separator: () => Separator3,
  Slider: () => Slider,
  SubmenuTrigger: () => SubmenuTrigger,
  Switch: () => Switch,
  Tag: () => Tag,
  TagGroup: () => TagGroup,
  Templates: () => Templates_default,
  Text: () => Text3,
  TextAreaField: () => TextAreaField,
  TextField: () => TextField,
  Theme: () => Theme_default,
  TimeField: () => TimeField,
  Tooltip: () => Tooltip,
  TooltipTrigger: () => TooltipTrigger,
  Widgets: () => Widgets_default,
  __createReactAriaFrameProvider: () => __createReactAriaFrameProvider,
  default: () => index_default,
  generateForm: () => generateForm,
  generateTemplates: () => generateTemplates,
  generateTheme: () => generateTheme,
  generateWidgets: () => generateWidgets
});
module.exports = __toCommonJS(index_exports);

// src/Form/Form.tsx
var import_react4 = require("react");
var import_core3 = require("@rjsf/core");
var import_react_aria_components16 = require("react-aria-components");

// src/AddButton/AddButton.tsx
var import_utils = require("@rjsf/utils");
var import_react_aria_components = require("react-aria-components");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const handlePress = (0, import_react.useCallback)(
    (e) => {
      onClick?.(createSyntheticMouseEvent(e));
    },
    [onClick]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react_aria_components.Button,
    {
      id,
      className: "react-aria-Button react-aria-AddButton",
      isDisabled: disabled,
      onPress: handlePress,
      type: "button",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-AddButton-icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 3 L9 15 M3 9 L15 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }),
        translateString(import_utils.TranslatableString.AddItemButton)
      ]
    }
  );
}

// src/ArrayFieldItemTemplate/ArrayFieldItemTemplate.tsx
var import_utils2 = require("@rjsf/utils");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils2.getUiOptions)(uiSchema);
  const ArrayFieldItemButtonsTemplate = (0, import_utils2.getTemplate)("ArrayFieldItemButtonsTemplate", registry, uiOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "react-aria-array-item", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "react-aria-array-item-inner", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "react-aria-array-item-content", children }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "react-aria-array-item-buttons", children: hasToolbar && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: "react-aria-array-item-buttons-inner",
        style: {
          marginTop: displayLabel ? hasDescription ? "-6px" : "22px" : void 0
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ArrayFieldItemButtonsTemplate, { ...buttonsProps })
      }
    ) })
  ] }) });
}

// src/ArrayFieldTemplate/ArrayFieldTemplate.tsx
var import_utils3 = require("@rjsf/utils");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils3.getUiOptions)(uiSchema);
  const ArrayFieldDescriptionTemplate = (0, import_utils3.getTemplate)("ArrayFieldDescriptionTemplate", registry, uiOptions);
  const ArrayFieldTitleTemplate = (0, import_utils3.getTemplate)("ArrayFieldTitleTemplate", registry, uiOptions);
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "react-aria-array-field", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "react-aria-array-field-inner", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "react-aria-array-field-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      ArrayFieldDescriptionTemplate,
      {
        fieldPathId,
        description: uiOptions.description || schema.description,
        schema,
        uiSchema,
        registry
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        className: "react-aria-array-item-list",
        children: [
          !showOptionalDataControlInTitle ? optionalDataControl : void 0,
          items,
          canAdd && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "react-aria-array-item-add-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            AddButton2,
            {
              id: (0, import_utils3.buttonId)(fieldPathId, "add"),
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
var import_utils4 = require("@rjsf/utils");
var import_react2 = require("react");
var import_react_aria_components3 = require("react-aria-components");

// src/components/Form.tsx
var import_react_aria_components2 = require("react-aria-components");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Label(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components2.Label, { ...props, className: "react-aria-Label" });
}
function FieldError(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components2.FieldError, { ...props, className: "react-aria-FieldError" });
}
function Description(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components2.Text, { slot: "description", ...props, className: "react-aria-Description" });
}
function FieldButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components2.Button, { ...props, className: "react-aria-FieldButton" });
}

// src/BaseInputTemplate/BaseInputTemplate.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
    ...(0, import_utils4.getInputProps)(schema, type, options)
  };
  const _onChange = ({ target: { value: value2 } }) => onChange(value2 === "" ? options.emptyValue : value2);
  const _onBlur = ({ target }) => onBlur(id, target && target.value);
  const _onFocus = ({ target }) => onFocus(id, target && target.value);
  const _onClear = (0, import_react2.useCallback)(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(options.emptyValue ?? "");
    },
    [onChange, options.emptyValue]
  );
  const hasError = rawErrors.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_react_aria_components3.TextField,
    {
      className: "react-aria-TextField",
      isRequired: required,
      isDisabled: disabled,
      isReadOnly: readonly,
      isInvalid: hasError,
      children: [
        !hideLabel && label && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Label, { children: [
          label,
          required ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "react-aria-required", children: "*" }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_react_aria_components3.Input,
          {
            id,
            name: htmlName || id,
            className: "react-aria-Input",
            type,
            placeholder,
            autoFocus: autofocus,
            list: schema.examples ? (0, import_utils4.examplesId)(id) : void 0,
            ...inputProps,
            value: value || value === 0 ? value : "",
            onChange: onChangeOverride || _onChange,
            onBlur: _onBlur,
            onFocus: _onFocus,
            "aria-describedby": (0, import_utils4.ariaDescribedByIds)(id, !!schema.examples)
          }
        ),
        options.allowClearTextInputs && !readonly && !disabled && value && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ClearButton2, { onClick: _onClear, registry }),
        children,
        Array.isArray(schema.examples) ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("datalist", { id: (0, import_utils4.examplesId)(id), children: schema.examples.concat(
          schema.default && !schema.examples.includes(schema.default) ? [schema.default] : []
        ).map((example) => {
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: example }, example);
        }) }) : null
      ]
    }
  );
}

// src/DescriptionField/DescriptionField.tsx
var import_core = require("@rjsf/core");
var import_jsx_runtime6 = require("react/jsx-runtime");
function DescriptionField({ id, description, registry, uiSchema }) {
  if (!description) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { id, className: "react-aria-description-field", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_core.RichDescription,
    {
      description,
      registry,
      uiSchema
    }
  ) });
}

// src/ErrorList/ErrorList.tsx
var import_utils5 = require("@rjsf/utils");
var import_jsx_runtime7 = require("react/jsx-runtime");
function ErrorList({ errors, registry }) {
  const { translateString } = registry;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "react-aria-error-list", role: "alert", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "react-aria-error-list-title", children: translateString(import_utils5.TranslatableString.ErrorsLabel) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { className: "react-aria-error-list-items", children: errors.map((error, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "react-aria-error-list-item", children: error.stack }, i);
    }) })
  ] });
}

// src/FieldErrorTemplate/FieldErrorTemplate.tsx
var import_utils6 = require("@rjsf/utils");
var import_jsx_runtime8 = require("react/jsx-runtime");
function FieldErrorTemplate(props) {
  const { errors = [], fieldPathId } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = (0, import_utils6.errorId)(fieldPathId);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "react-aria-field-errors", id, children: errors.map((error, i) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "react-aria-field-error", children: error }, i);
  }) });
}

// src/FieldHelpTemplate/FieldHelpTemplate.tsx
var import_utils7 = require("@rjsf/utils");
var import_core2 = require("@rjsf/core");
var import_jsx_runtime9 = require("react/jsx-runtime");
function FieldHelpTemplate(props) {
  const { fieldPathId, help, uiSchema, registry, hasErrors } = props;
  if (!help) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "span",
    {
      className: `react-aria-field-help ${hasErrors ? "react-aria-field-help-error" : ""}`,
      id: (0, import_utils7.helpId)(fieldPathId),
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_core2.RichHelp, { help, registry, uiSchema })
    }
  );
}

// src/FieldTemplate/FieldTemplate.tsx
var import_utils8 = require("@rjsf/utils");
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils8.getUiOptions)(uiSchema);
  const WrapIfAdditionalTemplate2 = (0, import_utils8.getTemplate)("WrapIfAdditionalTemplate", registry, uiOptions);
  if (hidden) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "react-aria-hidden", children });
  }
  const isCheckbox = uiOptions.widget === "checkbox";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
        displayLabel && rawDescription && !isCheckbox && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "react-aria-description", children: description }),
        errors,
        help
      ]
    }
  );
}

// src/GridTemplate/GridTemplate.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function GridTemplate(props) {
  const { children, column, className, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: `react-aria-grid ${className || ""}`, ...rest, children });
}

// src/IconButton/IconButton.tsx
var import_utils9 = require("@rjsf/utils");
var import_react_aria_components4 = require("react-aria-components");
var import_react3 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  const handlePress = (0, import_react3.useCallback)(
    (e) => {
      onClick?.(createSyntheticMouseEvent2(e));
    },
    [onClick]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react_aria_components4.Button,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    IconButton,
    {
      title: translateString(import_utils9.TranslatableString.CopyButton),
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { x: "6", y: "6", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { x: "2", y: "2", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" })
      ] })
    }
  );
}
function MoveDownButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    IconButton,
    {
      title: translateString(import_utils9.TranslatableString.MoveDownButton),
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M4 7 L9 12 L14 7", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  );
}
function MoveUpButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    IconButton,
    {
      title: translateString(import_utils9.TranslatableString.MoveUpButton),
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M4 11 L9 6 L14 11", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  );
}
function RemoveButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    IconButton,
    {
      title: translateString(import_utils9.TranslatableString.RemoveButton),
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
    }
  );
}
function ClearButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    IconButton,
    {
      title: translateString(import_utils9.TranslatableString.ClearButton),
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
    }
  );
}

// src/MultiSchemaFieldTemplate/MultiSchemaFieldTemplate.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function MultiSchemaFieldTemplate({ selector, optionSchemaField }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "react-aria-multi-schema-field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "react-aria-multi-schema-selector", children: selector }),
    optionSchemaField
  ] });
}

// src/ObjectFieldTemplate/ObjectFieldTemplate.tsx
var import_utils10 = require("@rjsf/utils");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils10.getUiOptions)(uiSchema);
  const TitleFieldTemplate = (0, import_utils10.getTemplate)(
    "TitleFieldTemplate",
    registry,
    uiOptions
  );
  const DescriptionFieldTemplate = (0, import_utils10.getTemplate)("DescriptionFieldTemplate", registry, uiOptions);
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      TitleFieldTemplate,
      {
        id: (0, import_utils10.titleId)(fieldPathId),
        title,
        required,
        schema,
        uiSchema,
        registry,
        optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
      }
    ),
    description && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      DescriptionFieldTemplate,
      {
        id: (0, import_utils10.descriptionId)(fieldPathId),
        description,
        schema,
        uiSchema,
        registry
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "react-aria-object-properties", children: [
      !showOptionalDataControlInTitle ? optionalDataControl : void 0,
      properties.map((element, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "div",
        {
          className: element.hidden ? "react-aria-hidden" : "react-aria-object-property",
          children: element.content
        },
        index
      )),
      (0, import_utils10.canExpand)(schema, uiSchema, formData) ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        AddButton2,
        {
          id: (0, import_utils10.buttonId)(fieldPathId, "add"),
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
var import_jsx_runtime15 = require("react/jsx-runtime");
function OptionalDataControlsTemplate(props) {
  const { id, registry, label, onAddClick, onRemoveClick } = props;
  if (onAddClick) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      IconButton,
      {
        id,
        registry,
        className: "react-aria-add-optional-data",
        onClick: onAddClick,
        title: label,
        icon: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { "aria-hidden": "true", children: "+" })
      }
    );
  } else if (onRemoveClick) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("em", { id, className: "react-aria-no-data", children: label });
}

// src/SubmitButton/SubmitButton.tsx
var import_utils11 = require("@rjsf/utils");
var import_react_aria_components5 = require("react-aria-components");
var import_jsx_runtime16 = require("react/jsx-runtime");
function SubmitButton(props) {
  const {
    submitText,
    norender,
    props: submitButtonProps
  } = (0, import_utils11.getSubmitButtonOptions)(props.uiSchema);
  if (norender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_react_aria_components5.Button,
    {
      className: "react-aria-Button react-aria-SubmitButton",
      type: "submit",
      ...submitButtonProps,
      children: submitText
    }
  );
}

// src/TitleField/TitleField.tsx
var import_utils12 = require("@rjsf/utils");
var import_react_aria_components6 = require("react-aria-components");
var import_jsx_runtime17 = require("react/jsx-runtime");
function TitleField({ id, title, uiSchema, optionalDataControl }) {
  const uiOptions = (0, import_utils12.getUiOptions)(uiSchema);
  let heading = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h5", { className: "react-aria-title-heading", children: uiOptions.title || title });
  if (optionalDataControl) {
    heading = /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "react-aria-title-with-control", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "react-aria-title-heading-wrapper", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "react-aria-title-control", children: optionalDataControl })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { id, className: "react-aria-title-field", children: [
    heading,
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "react-aria-title-separator", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_aria_components6.Separator, {}) })
  ] });
}

// src/WrapIfAdditionalTemplate/WrapIfAdditionalTemplate.tsx
var import_utils13 = require("@rjsf/utils");
var import_react_aria_components7 = require("react-aria-components");
var import_jsx_runtime18 = require("react/jsx-runtime");
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
  const keyLabel = translateString(import_utils13.TranslatableString.KeyLabel, [label]);
  const additional = import_utils13.ADDITIONAL_PROPERTY_FLAG in schema;
  if (!additional) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children });
  }
  const keyId = `${id}-key`;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "div",
      {
        className: `react-aria-additional-property ${classNames || ""}`,
        style,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "react-aria-additional-property-key", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "react-aria-additional-property-key-wrapper", children: [
            displayLabel && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "label",
              {
                htmlFor: keyId,
                className: "react-aria-additional-property-label",
                children: keyLabel
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "react-aria-input-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              import_react_aria_components7.Input,
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
            !!rawDescription && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "react-aria-additional-property-spacer", children: "\xA0" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "react-aria-additional-property-value", children }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "react-aria-additional-property-remove", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            RemoveButton2,
            {
              id: (0, import_utils13.buttonId)(id, "remove"),
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
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "react-aria-separator-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components7.Separator, {}) })
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
var import_utils14 = require("@rjsf/utils");

// src/components/Checkbox.tsx
var import_react_aria_components8 = require("react-aria-components");
var import_jsx_runtime19 = require("react/jsx-runtime");
function Checkbox({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_aria_components8.Checkbox, { ...props, className: "react-aria-Checkbox", children: ({ isIndeterminate }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "react-aria-Checkbox-indicator", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "svg",
      {
        viewBox: "0 0 18 18",
        "aria-hidden": "true",
        children: isIndeterminate ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("rect", { x: 1, y: 7.5, width: 16, height: 3 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("polyline", { points: "2 9 7 14 16 4" })
      },
      isIndeterminate ? "indeterminate" : "check"
    ) }),
    children
  ] }) });
}

// src/CheckboxWidget/CheckboxWidget.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  const required = (0, import_utils14.schemaRequiresTrueValue)(schema);
  const DescriptionFieldTemplate = (0, import_utils14.getTemplate)("DescriptionFieldTemplate", registry, options);
  const _onChange = (isSelected) => onChange(isSelected);
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);
  const description = options.description || schema.description;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: "react-aria-CheckboxWidget",
      "aria-describedby": (0, import_utils14.ariaDescribedByIds)(id),
      "data-disabled": disabled || readonly || void 0,
      children: [
        !hideLabel && description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          DescriptionFieldTemplate,
          {
            id: (0, import_utils14.descriptionId)(id),
            description,
            schema,
            uiSchema,
            registry
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
            children: (0, import_utils14.labelValue)(label, hideLabel || !label)
          }
        )
      ]
    }
  );
}

// src/CheckboxesWidget/CheckboxesWidget.tsx
var import_utils15 = require("@rjsf/utils");
var import_react_aria_components9 = require("react-aria-components");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    import_react_aria_components9.CheckboxGroup,
    {
      className: "react-aria-CheckboxGroup",
      "aria-describedby": (0, import_utils15.ariaDescribedByIds)(id),
      "aria-label": label || id,
      "data-orientation": inline ? "horizontal" : "vertical",
      value: selectedValues,
      onChange: handleChange,
      isDisabled: disabled || readonly,
      isRequired: required,
      children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
        const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
        const indexOptionId = (0, import_utils15.optionId)(id, index);
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_utils16 = require("@rjsf/utils");
var import_react_aria_components11 = require("react-aria-components");

// src/components/RadioGroup.tsx
var import_react_aria_components10 = require("react-aria-components");
var import_jsx_runtime22 = require("react/jsx-runtime");
function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_react_aria_components10.RadioGroup, { ...props, className: "react-aria-RadioGroup", "data-orientation": orientation, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "react-aria-RadioGroup-items", children }),
    description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FieldError, { children: errorMessage })
  ] });
}
function Radio(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components10.Radio, { ...props, className: "react-aria-Radio", children: (0, import_react_aria_components10.composeRenderProps)(props.children, (children) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "react-aria-Radio-indicator" }),
    children
  ] })) });
}

// src/RadioWidget/RadioWidget.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
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
    onChange((0, import_utils16.enumOptionsValueForIndex)(newValue, enumOptions, emptyValue));
  };
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);
  const inline = Boolean(options && options.inline);
  const selectedIndex = (0, import_utils16.enumOptionsIndexForValue)(value, enumOptions);
  const selectedValue = selectedIndex !== void 0 ? String(selectedIndex) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_react_aria_components11.RadioGroup,
    {
      className: "react-aria-RadioGroup",
      value: selectedValue ?? null,
      isRequired: required,
      isDisabled: disabled || readonly,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
      "aria-describedby": (0, import_utils16.ariaDescribedByIds)(id),
      "aria-label": label || id,
      orientation: inline ? "horizontal" : "vertical",
      "data-orientation": inline ? "horizontal" : "vertical",
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "react-aria-RadioGroup-items", children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
        const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
        return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Radio,
          {
            value: String(index),
            isDisabled: itemDisabled,
            children: option.label
          },
          (0, import_utils16.optionId)(id, index)
        );
      }) })
    }
  );
}

// src/RangeWidget/RangeWidget.tsx
var import_utils17 = require("@rjsf/utils");
var import_react_aria_components12 = require("react-aria-components");
var import_jsx_runtime24 = require("react/jsx-runtime");
function RangeWidget({
  value,
  readonly,
  disabled,
  schema,
  onChange,
  label,
  id
}) {
  const { min = 0, max = 100, step } = (0, import_utils17.rangeSpec)(schema);
  const currentValue = value ?? min;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_react_aria_components12.Slider,
    {
      className: "react-aria-Slider",
      value: currentValue,
      onChange,
      minValue: min,
      maxValue: max,
      step,
      isDisabled: disabled || readonly,
      "aria-describedby": (0, import_utils17.ariaDescribedByIds)(id),
      "aria-label": label || id,
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Label, { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components12.SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" \u2013 ") }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components12.SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              className: "react-aria-SliderTrack-rail",
              "data-disabled": isDisabled || void 0,
              children: state.values.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "div",
                {
                  className: "react-aria-SliderTrack-fill",
                  style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" }
                }
              ) : state.values.length === 2 ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
          state.values.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components12.SliderThumb, { index: i, className: "react-aria-SliderThumb" }, i))
        ] }) })
      ]
    }
  );
}

// src/SelectWidget/SelectWidget.tsx
var import_utils18 = require("@rjsf/utils");
var import_react_aria_components14 = require("react-aria-components");

// src/components/Popover.tsx
var import_react_aria_components13 = require("react-aria-components");
var import_jsx_runtime25 = require("react/jsx-runtime");
function Popover({ children, hideArrow, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components13.Popover, { ...props, className: `react-aria-Popover ${className || ""}`, children: ({ trigger }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
    !hideArrow && trigger !== "MenuTrigger" && trigger !== "SubmenuTrigger" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components13.OverlayArrow, { className: "react-aria-OverlayArrow", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("svg", { width: 12, height: 12, viewBox: "0 0 12 12", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M0 0 L6 6 L12 0" }) }) }),
    children
  ] }) });
}

// src/SelectWidget/SelectWidget.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
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
    onFocus(id, (0, import_utils18.enumOptionsValueForIndex)(value, enumOptions, optEmptyValue));
  };
  const _onBlur = () => {
    onBlur(id, (0, import_utils18.enumOptionsValueForIndex)(value, enumOptions, optEmptyValue));
  };
  const hasError = rawErrors.length > 0;
  if (multiple) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "react-aria-Select", "data-multiple": true, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Label, { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "select",
        {
          id,
          multiple: true,
          required,
          disabled: disabled || readonly,
          autoFocus: autofocus,
          value: Array.isArray(value) ? value.map(
            (v) => (0, import_utils18.enumOptionsIndexForValue)(v, enumOptions, false)?.toString() || ""
          ).filter(Boolean) : [],
          onChange: (e) => {
            const selectedOptions = Array.from(e.target.selectedOptions).map(
              (opt) => opt.value
            );
            onChange(
              (0, import_utils18.enumOptionsValueForIndex)(
                selectedOptions,
                enumOptions,
                optEmptyValue
              )
            );
          },
          onFocus: _onFocus,
          onBlur: _onBlur,
          className: "react-aria-Select-native",
          "aria-describedby": (0, import_utils18.ariaDescribedByIds)(id),
          "data-invalid": hasError || void 0,
          children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
            const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.includes(option.value);
            return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
  const selectedIndex = (0, import_utils18.enumOptionsIndexForValue)(
    value ?? defaultValue,
    enumOptions,
    false
  );
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    import_react_aria_components14.Select,
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
          (0, import_utils18.enumOptionsValueForIndex)(
            key,
            enumOptions,
            optEmptyValue
          )
        );
      },
      onFocus: _onFocus,
      onBlur: _onBlur,
      "aria-describedby": (0, import_utils18.ariaDescribedByIds)(id),
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Label, { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_react_aria_components14.Button, { className: "react-aria-Select-button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_aria_components14.SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "svg",
            {
              viewBox: "0 0 12 12",
              "aria-hidden": "true",
              className: "react-aria-Select-chevron",
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("path", { d: "M2 4 L6 8 L10 4" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_aria_components14.ListBox, { className: "react-aria-ListBox", children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
          const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.includes(option.value);
          return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            import_react_aria_components14.ListBoxItem,
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
var import_utils19 = require("@rjsf/utils");
var import_react_aria_components15 = require("react-aria-components");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    import_react_aria_components15.TextField,
    {
      className: "react-aria-TextField",
      isRequired: required,
      isDisabled: disabled,
      isReadOnly: readonly,
      isInvalid: hasError,
      children: [
        !hideLabel && label && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Label, { children: [
          label,
          required ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "react-aria-required", children: "*" }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          import_react_aria_components15.TextArea,
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
            "aria-describedby": (0, import_utils19.ariaDescribedByIds)(id)
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
var import_jsx_runtime28 = require("react/jsx-runtime");
var ReactAriaFormWrapper = (0, import_react4.forwardRef)(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_aria_components16.Form, { ...props, ref }) });
});
ReactAriaFormWrapper.displayName = "ReactAriaFormWrapper";
function generateForm() {
  const ThemedForm = (0, import_core3.withTheme)(generateTheme());
  const AriaThemedForm = (0, import_react4.forwardRef)((props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ThemedForm, { ...props, ref, tagName: ReactAriaFormWrapper });
  });
  AriaThemedForm.displayName = "AriaThemedForm";
  return AriaThemedForm;
}
var Form_default = generateForm();

// src/ReactAriaFrameProvider.tsx
var import_overlays = require("@react-aria/overlays");
var import_jsx_runtime29 = require("react/jsx-runtime");
var __createReactAriaFrameProvider = (props) => ({ document }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_overlays.UNSAFE_PortalProvider, { getContainer: () => document?.body ?? null, children: props.children });
};

// src/components/Button.tsx
var import_react_aria_components17 = require("react-aria-components");
var import_jsx_runtime30 = require("react/jsx-runtime");
function Button3(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    import_react_aria_components17.Button,
    {
      ...props,
      className: "react-aria-Button",
      "data-variant": props.variant || "primary",
      children: (0, import_react_aria_components17.composeRenderProps)(props.children, (children, { isPending }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
        !isPending && children,
        isPending && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "react-aria-Button-spinner", children: "..." })
      ] }))
    }
  );
}

// src/components/CheckboxGroup.tsx
var import_react_aria_components18 = require("react-aria-components");
var import_jsx_runtime31 = require("react/jsx-runtime");
function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_react_aria_components18.CheckboxGroup, { ...props, className: "react-aria-CheckboxGroup", "data-orientation": orientation, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "react-aria-CheckboxGroup-items", children }),
    description && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FieldError, { children: errorMessage })
  ] });
}

// src/components/ListBox.tsx
var import_react_aria_components19 = require("react-aria-components");
var import_jsx_runtime32 = require("react/jsx-runtime");
function ListBox2({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_aria_components19.ListBox, { ...props, className: "react-aria-ListBox", children });
}
function ListBoxItem2(props) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_aria_components19.ListBoxItem, { ...props, textValue, className: "react-aria-ListBoxItem", children: (0, import_react_aria_components19.composeRenderProps)(
    props.children,
    (children) => typeof children === "string" ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_aria_components19.Text, { slot: "label", children }) : children
  ) });
}
function ListBoxSection(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_aria_components19.ListBoxSection, { ...props, className: "react-aria-ListBoxSection" });
}
function DropdownListBox(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_aria_components19.ListBox, { ...props, className: "react-aria-DropdownListBox" });
}
function DropdownItem(props) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ListBoxItem2, { ...props, textValue, className: "react-aria-DropdownItem", children: (0, import_react_aria_components19.composeRenderProps)(props.children, (children, { isSelected }) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
    isSelected && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "svg",
      {
        viewBox: "0 0 18 18",
        "aria-hidden": "true",
        className: "react-aria-DropdownItem-check",
        children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("polyline", { points: "2 9 7 14 16 4" })
      }
    ),
    typeof children === "string" ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_aria_components19.Text, { slot: "label", children }) : children
  ] })) });
}

// src/components/Select.tsx
var import_react_aria_components20 = require("react-aria-components");
var import_jsx_runtime33 = require("react/jsx-runtime");
function Select({
  label,
  description,
  errorMessage,
  children,
  items,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react_aria_components20.Select, { ...props, className: "react-aria-Select", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react_aria_components20.Button, { className: "react-aria-Select-button", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_aria_components20.SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        "svg",
        {
          viewBox: "0 0 12 12",
          "aria-hidden": "true",
          className: "react-aria-Select-chevron",
          children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M2 4 L6 8 L10 4" })
        }
      )
    ] }),
    description && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(FieldError, { children: errorMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectListBox, { items, children }) })
  ] });
}
function SelectListBox(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(DropdownListBox, { ...props });
}
function SelectItem(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(DropdownItem, { ...props });
}

// src/components/TextField.tsx
var import_react_aria_components21 = require("react-aria-components");
var import_jsx_runtime34 = require("react/jsx-runtime");
function TextField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react_aria_components21.TextField, { ...props, className: "react-aria-TextField", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_aria_components21.Input, { className: "react-aria-Input", placeholder }),
    description && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(FieldError, { children: errorMessage })
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
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react_aria_components21.TextField, { ...props, className: "react-aria-TextField", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_aria_components21.TextArea, { className: "react-aria-TextArea", placeholder, rows }),
    description && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(FieldError, { children: errorMessage })
  ] });
}

// src/components/Slider.tsx
var import_react_aria_components22 = require("react-aria-components");
var import_jsx_runtime35 = require("react/jsx-runtime");
function Slider({
  label,
  thumbLabels,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_react_aria_components22.Slider, { ...props, className: "react-aria-Slider", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_aria_components22.SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" \u2013 ") }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_aria_components22.SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "div",
        {
          className: "react-aria-SliderTrack-rail",
          "data-disabled": isDisabled || void 0,
          children: state.values.length === 1 ? (
            // Single thumb, render fill from the start
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
              "div",
              {
                className: "react-aria-SliderTrack-fill",
                style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" }
              }
            )
          ) : state.values.length === 2 ? (
            // Range slider, render fill between the thumbs
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
      state.values.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        import_react_aria_components22.SliderThumb,
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
var import_react_aria_components23 = require("react-aria-components");
var import_jsx_runtime36 = require("react/jsx-runtime");
function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react_aria_components23.NumberField, { ...props, className: "react-aria-NumberField", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react_aria_components23.Group, { className: "react-aria-NumberField-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_aria_components23.Input, { className: "react-aria-Input", placeholder }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_aria_components23.Button, { slot: "decrement", className: "react-aria-NumberField-button", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_aria_components23.Button, { slot: "increment", className: "react-aria-NumberField-button", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M9 4 L9 14 M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
    ] }),
    description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(FieldError, { children: errorMessage })
  ] });
}

// src/components/Switch.tsx
var import_react_aria_components24 = require("react-aria-components");
var import_jsx_runtime37 = require("react/jsx-runtime");
function Switch({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_aria_components24.Switch, { ...props, className: "react-aria-Switch", children: ({ isSelected, isDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "react-aria-Switch-track", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
var import_react_aria_components25 = require("react-aria-components");
var import_jsx_runtime38 = require("react/jsx-runtime");
function ComboBox({
  label,
  description,
  errorMessage,
  children,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react_aria_components25.ComboBox, { ...props, className: "react-aria-ComboBox", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "react-aria-ComboBox-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_aria_components25.Input, { className: "react-aria-Input", placeholder }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_aria_components25.Button, { className: "react-aria-ComboBox-button", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { viewBox: "0 0 12 12", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M2 4 L6 8 L10 4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    description && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FieldError, { children: errorMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Popover, { hideArrow: true, className: "react-aria-ComboBox-popover", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ComboBoxListBox, { children }) })
  ] });
}
function ComboBoxListBox(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DropdownListBox, { ...props });
}
function ComboBoxItem(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DropdownItem, { ...props });
}

// src/components/DateField.tsx
var import_react_aria_components26 = require("react-aria-components");
var import_jsx_runtime39 = require("react/jsx-runtime");
function DateField({
  label,
  description,
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react_aria_components26.DateField, { ...props, className: "react-aria-DateField", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DateInput, { children: (segment) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DateSegment, { segment }) }),
    description && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FieldError, { children: errorMessage })
  ] });
}
function DateInput(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_aria_components26.DateInput, { ...props, className: "react-aria-DateInput" });
}
function DateSegment(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_aria_components26.DateSegment, { ...props, className: "react-aria-DateSegment" });
}

// src/components/TimeField.tsx
var import_react_aria_components27 = require("react-aria-components");
var import_jsx_runtime40 = require("react/jsx-runtime");
function TimeField({
  label,
  description,
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react_aria_components27.TimeField, { ...props, className: "react-aria-TimeField", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(DateInput, { children: (segment) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(DateSegment, { segment }) }),
    description && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(FieldError, { children: errorMessage })
  ] });
}

// src/components/Calendar.tsx
var import_react_aria_components29 = require("react-aria-components");

// src/components/Content.tsx
var import_react_aria_components28 = require("react-aria-components");
var import_jsx_runtime41 = require("react/jsx-runtime");
function Heading(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react_aria_components28.Heading, { ...props, className: "react-aria-Heading" });
}
function Text3(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react_aria_components28.Text, { ...props, className: "react-aria-Text" });
}

// src/components/Calendar.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
function Calendar({
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react_aria_components29.Calendar, { ...props, className: "react-aria-Calendar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("header", { className: "react-aria-Calendar-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_aria_components29.Button, { slot: "previous", className: "react-aria-Calendar-nav", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M11 4 L6 9 L11 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_aria_components29.Heading, { className: "react-aria-Calendar-heading" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_aria_components29.Button, { slot: "next", className: "react-aria-Calendar-nav", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CalendarGrid, { children: (date) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CalendarCell, { date }) }),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Text3, { slot: "errorMessage", children: errorMessage })
  ] });
}
function CalendarCell(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_aria_components29.CalendarCell, { ...props, className: "react-aria-CalendarCell" });
}
function CalendarGrid(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_aria_components29.CalendarGrid, { ...props, className: "react-aria-CalendarGrid" });
}

// src/components/DatePicker.tsx
var import_react_aria_components30 = require("react-aria-components");
var import_jsx_runtime43 = require("react/jsx-runtime");
function DatePicker({
  label,
  description,
  errorMessage,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react_aria_components30.DatePicker, { ...props, className: "react-aria-DatePicker", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react_aria_components30.Group, { className: "react-aria-DatePicker-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DateInput, { children: (segment) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DateSegment, { segment }) }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react_aria_components30.Button, { className: "react-aria-DatePicker-button", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("rect", { x: "2", y: "4", width: "14", height: "12", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("path", { d: "M2 8 L16 8", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("path", { d: "M6 2 L6 5 M12 2 L12 5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
      ] }) })
    ] }),
    description && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(FieldError, { children: errorMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Popover, { hideArrow: true, className: "react-aria-DatePicker-popover", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Calendar, {}) })
  ] });
}

// src/components/SearchField.tsx
var import_react_aria_components31 = require("react-aria-components");
var import_jsx_runtime44 = require("react/jsx-runtime");
function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_aria_components31.SearchField, { ...props, className: "react-aria-SearchField", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "react-aria-SearchField-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-SearchField-icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("circle", { cx: "7", cy: "7", r: "5", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { d: "M11 11 L15 15", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_aria_components31.Input, { placeholder, className: "react-aria-Input" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_aria_components31.Button, { className: "react-aria-SearchField-clear", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
    ] }),
    description && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Description, { children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FieldError, { children: errorMessage })
  ] });
}

// src/components/Dialog.tsx
var import_react_aria_components32 = require("react-aria-components");
var import_jsx_runtime45 = require("react/jsx-runtime");
function Dialog(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_aria_components32.Dialog, { ...props, className: "react-aria-Dialog" });
}
function DialogTrigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_aria_components32.DialogTrigger, { ...props });
}

// src/components/Modal.tsx
var import_react_aria_components33 = require("react-aria-components");
var import_jsx_runtime46 = require("react/jsx-runtime");
function Modal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_aria_components33.Modal, { ...props, className: "react-aria-Modal" });
}
function ModalOverlay(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_aria_components33.ModalOverlay, { ...props, className: "react-aria-ModalOverlay" });
}

// src/components/Tooltip.tsx
var import_react_aria_components34 = require("react-aria-components");
var import_jsx_runtime47 = require("react/jsx-runtime");
function Tooltip({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_react_aria_components34.Tooltip, { ...props, className: "react-aria-Tooltip", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_aria_components34.OverlayArrow, { className: "react-aria-OverlayArrow", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("path", { d: "M0 0 L4 4 L8 0" }) }) }),
    children
  ] });
}
function TooltipTrigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_aria_components34.TooltipTrigger, { ...props });
}

// src/components/Separator.tsx
var import_react_aria_components35 = require("react-aria-components");
var import_jsx_runtime48 = require("react/jsx-runtime");
function Separator3(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_aria_components35.Separator, { ...props, className: "react-aria-Separator" });
}

// src/components/Link.tsx
var import_react_aria_components36 = require("react-aria-components");
var import_jsx_runtime49 = require("react/jsx-runtime");
function Link(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_aria_components36.Link, { ...props, className: "react-aria-Link" });
}

// src/components/TagGroup.tsx
var import_react_aria_components37 = require("react-aria-components");
var import_jsx_runtime50 = require("react/jsx-runtime");
function TagGroup({
  label,
  description,
  errorMessage,
  items,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_react_aria_components37.TagGroup, { ...props, className: "react-aria-TagGroup", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react_aria_components37.TagList, { items, className: "react-aria-TagList", children }),
    description && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Description, { children: description }),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Text3, { slot: "errorMessage", children: errorMessage })
  ] });
}
function Tag({ children, ...props }) {
  const textValue = typeof children === "string" ? children : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react_aria_components37.Tag, { textValue, ...props, className: "react-aria-Tag", children: ({ allowsRemoving }) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
    children,
    allowsRemoving && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react_aria_components37.Button, { slot: "remove", className: "react-aria-Tag-remove", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
  ] }) });
}

// src/components/Menu.tsx
var import_react_aria_components38 = require("react-aria-components");
var import_jsx_runtime51 = require("react/jsx-runtime");
function MenuTrigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_aria_components38.MenuTrigger, { ...props });
}
function Menu(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_aria_components38.Menu, { ...props, className: "react-aria-Menu" });
}
function MenuItem(props) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_aria_components38.MenuItem, { ...props, textValue, className: "react-aria-MenuItem", children: (0, import_react_aria_components38.composeRenderProps)(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
    selectionMode === "multiple" && isSelected && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-check", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("polyline", { points: "2 9 7 14 16 4", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }),
    selectionMode === "single" && isSelected && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-dot", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("circle", { cx: "9", cy: "9", r: "3", fill: "currentColor" }) }),
    typeof children === "string" ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Text3, { slot: "label", children }) : children,
    hasSubmenu && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-chevron", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
  ] })) });
}
function MenuSection(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_aria_components38.MenuSection, { ...props, className: "react-aria-MenuSection" });
}
function SubmenuTrigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_aria_components38.SubmenuTrigger, { ...props });
}

// src/components/ProgressBar.tsx
var import_react_aria_components39 = require("react-aria-components");
var import_jsx_runtime52 = require("react/jsx-runtime");
function ProgressBar({ label, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_aria_components39.ProgressBar, { ...props, className: "react-aria-ProgressBar", children: ({ percentage, valueText, isIndeterminate }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "react-aria-ProgressBar-value", children: valueText }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "react-aria-ProgressBar-track", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
//# sourceMappingURL=index.cjs.map
