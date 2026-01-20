(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@rjsf/core'), require('react-aria-components'), require('@rjsf/utils'), require('react/jsx-runtime'), require('@react-aria/overlays')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@rjsf/core', 'react-aria-components', '@rjsf/utils', 'react/jsx-runtime', '@react-aria/overlays'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@rjsf/react-aria"] = {}, global.react, global.core, global.reactAriaComponents, global.utils, global.jsxRuntime, global.overlays));
})(this, (function (exports, react, core, reactAriaComponents, utils, jsxRuntime, overlays) { 'use strict';

  // src/Form/Form.tsx
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
    const handlePress = react.useCallback(
      (e) => {
        onClick?.(createSyntheticMouseEvent(e));
      },
      [onClick]
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.Button,
      {
        id,
        className: "react-aria-Button react-aria-AddButton",
        isDisabled: disabled,
        onPress: handlePress,
        type: "button",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-AddButton-icon", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 3 L9 15 M3 9 L15 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }),
          translateString(utils.TranslatableString.AddItemButton)
        ]
      }
    );
  }
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
    const uiOptions = utils.getUiOptions(uiSchema);
    const ArrayFieldItemButtonsTemplate = utils.getTemplate("ArrayFieldItemButtonsTemplate", registry, uiOptions);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-array-item", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-array-item-inner", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-array-item-content", children }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-array-item-buttons", children: hasToolbar && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "react-aria-array-item-buttons-inner",
          style: {
            marginTop: displayLabel ? hasDescription ? "-6px" : "22px" : void 0
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(ArrayFieldItemButtonsTemplate, { ...buttonsProps })
        }
      ) })
    ] }) });
  }
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
    const uiOptions = utils.getUiOptions(uiSchema);
    const ArrayFieldDescriptionTemplate = utils.getTemplate("ArrayFieldDescriptionTemplate", registry, uiOptions);
    const ArrayFieldTitleTemplate = utils.getTemplate("ArrayFieldTitleTemplate", registry, uiOptions);
    const showOptionalDataControlInTitle = !readonly && !disabled;
    const {
      ButtonTemplates: { AddButton: AddButton2 }
    } = registry.templates;
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-array-field", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-array-field-inner", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-array-field-content", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsx(
        ArrayFieldDescriptionTemplate,
        {
          fieldPathId,
          description: uiOptions.description || schema.description,
          schema,
          uiSchema,
          registry
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "react-aria-array-item-list",
          children: [
            !showOptionalDataControlInTitle ? optionalDataControl : void 0,
            items,
            canAdd && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-array-item-add-wrapper", children: /* @__PURE__ */ jsxRuntime.jsx(
              AddButton2,
              {
                id: utils.buttonId(fieldPathId, "add"),
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
  function Label(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Label, { ...props, className: "react-aria-Label" });
  }
  function FieldError(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.FieldError, { ...props, className: "react-aria-FieldError" });
  }
  function Description(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Text, { slot: "description", ...props, className: "react-aria-Description" });
  }
  function FieldButton(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { ...props, className: "react-aria-FieldButton" });
  }
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
      ...utils.getInputProps(schema, type, options)
    };
    const _onChange = ({ target: { value: value2 } }) => onChange(value2 === "" ? options.emptyValue : value2);
    const _onBlur = ({ target }) => onBlur(id, target && target.value);
    const _onFocus = ({ target }) => onFocus(id, target && target.value);
    const _onClear = react.useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        onChange(options.emptyValue ?? "");
      },
      [onChange, options.emptyValue]
    );
    const hasError = rawErrors.length > 0;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.TextField,
      {
        className: "react-aria-TextField",
        isRequired: required,
        isDisabled: disabled,
        isReadOnly: readonly,
        isInvalid: hasError,
        children: [
          !hideLabel && label && /* @__PURE__ */ jsxRuntime.jsxs(Label, { children: [
            label,
            required ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-required", children: "*" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            reactAriaComponents.Input,
            {
              id,
              name: htmlName || id,
              className: "react-aria-Input",
              type,
              placeholder,
              autoFocus: autofocus,
              list: schema.examples ? utils.examplesId(id) : void 0,
              ...inputProps,
              value: value || value === 0 ? value : "",
              onChange: onChangeOverride || _onChange,
              onBlur: _onBlur,
              onFocus: _onFocus,
              "aria-describedby": utils.ariaDescribedByIds(id, !!schema.examples)
            }
          ),
          options.allowClearTextInputs && !readonly && !disabled && value && /* @__PURE__ */ jsxRuntime.jsx(ClearButton2, { onClick: _onClear, registry }),
          children,
          Array.isArray(schema.examples) ? /* @__PURE__ */ jsxRuntime.jsx("datalist", { id: utils.examplesId(id), children: schema.examples.concat(
            schema.default && !schema.examples.includes(schema.default) ? [schema.default] : []
          ).map((example) => {
            return /* @__PURE__ */ jsxRuntime.jsx("option", { value: example }, example);
          }) }) : null
        ]
      }
    );
  }
  function DescriptionField({ id, description, registry, uiSchema }) {
    if (!description) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx("div", { id, className: "react-aria-description-field", children: /* @__PURE__ */ jsxRuntime.jsx(
      core.RichDescription,
      {
        description,
        registry,
        uiSchema
      }
    ) });
  }
  function ErrorList({ errors, registry }) {
    const { translateString } = registry;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-error-list", role: "alert", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-error-list-title", children: translateString(utils.TranslatableString.ErrorsLabel) }),
      /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "react-aria-error-list-items", children: errors.map((error, i) => {
        return /* @__PURE__ */ jsxRuntime.jsx("li", { className: "react-aria-error-list-item", children: error.stack }, i);
      }) })
    ] });
  }
  function FieldErrorTemplate(props) {
    const { errors = [], fieldPathId } = props;
    if (errors.length === 0) {
      return null;
    }
    const id = utils.errorId(fieldPathId);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-field-errors", id, children: errors.map((error, i) => {
      return /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-field-error", children: error }, i);
    }) });
  }
  function FieldHelpTemplate(props) {
    const { fieldPathId, help, uiSchema, registry, hasErrors } = props;
    if (!help) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        className: `react-aria-field-help ${hasErrors ? "react-aria-field-help-error" : ""}`,
        id: utils.helpId(fieldPathId),
        children: /* @__PURE__ */ jsxRuntime.jsx(core.RichHelp, { help, registry, uiSchema })
      }
    );
  }
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
    const uiOptions = utils.getUiOptions(uiSchema);
    const WrapIfAdditionalTemplate2 = utils.getTemplate("WrapIfAdditionalTemplate", registry, uiOptions);
    if (hidden) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-hidden", children });
    }
    const isCheckbox = uiOptions.widget === "checkbox";
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          displayLabel && rawDescription && !isCheckbox && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-description", children: description }),
          errors,
          help
        ]
      }
    );
  }
  function GridTemplate(props) {
    const { children, column, className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `react-aria-grid ${className || ""}`, ...rest, children });
  }
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
    const handlePress = react.useCallback(
      (e) => {
        onClick?.(createSyntheticMouseEvent2(e));
      },
      [onClick]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.Button,
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconButton,
      {
        title: translateString(utils.TranslatableString.CopyButton),
        ...props,
        icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "6", y: "6", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "2", y: "2", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" })
        ] })
      }
    );
  }
  function MoveDownButton(props) {
    const {
      registry: { translateString }
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconButton,
      {
        title: translateString(utils.TranslatableString.MoveDownButton),
        ...props,
        icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 7 L9 12 L14 7", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    );
  }
  function MoveUpButton(props) {
    const {
      registry: { translateString }
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconButton,
      {
        title: translateString(utils.TranslatableString.MoveUpButton),
        ...props,
        icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 11 L9 6 L14 11", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    );
  }
  function RemoveButton(props) {
    const {
      registry: { translateString }
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconButton,
      {
        title: translateString(utils.TranslatableString.RemoveButton),
        ...props,
        icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
      }
    );
  }
  function ClearButton(props) {
    const {
      registry: { translateString }
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconButton,
      {
        title: translateString(utils.TranslatableString.ClearButton),
        ...props,
        icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
      }
    );
  }
  function MultiSchemaFieldTemplate({ selector, optionSchemaField }) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-multi-schema-field", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-multi-schema-selector", children: selector }),
      optionSchemaField
    ] });
  }
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
    const uiOptions = utils.getUiOptions(uiSchema);
    const TitleFieldTemplate = utils.getTemplate(
      "TitleFieldTemplate",
      registry,
      uiOptions
    );
    const DescriptionFieldTemplate = utils.getTemplate("DescriptionFieldTemplate", registry, uiOptions);
    const showOptionalDataControlInTitle = !readonly && !disabled;
    const {
      ButtonTemplates: { AddButton: AddButton2 }
    } = registry.templates;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      title && /* @__PURE__ */ jsxRuntime.jsx(
        TitleFieldTemplate,
        {
          id: utils.titleId(fieldPathId),
          title,
          required,
          schema,
          uiSchema,
          registry,
          optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
        }
      ),
      description && /* @__PURE__ */ jsxRuntime.jsx(
        DescriptionFieldTemplate,
        {
          id: utils.descriptionId(fieldPathId),
          description,
          schema,
          uiSchema,
          registry
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-object-properties", children: [
        !showOptionalDataControlInTitle ? optionalDataControl : void 0,
        properties.map((element, index) => /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: element.hidden ? "react-aria-hidden" : "react-aria-object-property",
            children: element.content
          },
          index
        )),
        utils.canExpand(schema, uiSchema, formData) ? /* @__PURE__ */ jsxRuntime.jsx(
          AddButton2,
          {
            id: utils.buttonId(fieldPathId, "add"),
            onClick: onAddProperty,
            disabled: disabled || readonly,
            uiSchema,
            registry
          }
        ) : null
      ] })
    ] });
  }
  function OptionalDataControlsTemplate(props) {
    const { id, registry, label, onAddClick, onRemoveClick } = props;
    if (onAddClick) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        IconButton,
        {
          id,
          registry,
          className: "react-aria-add-optional-data",
          onClick: onAddClick,
          title: label,
          icon: /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", children: "+" })
        }
      );
    } else if (onRemoveClick) {
      return /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsx("em", { id, className: "react-aria-no-data", children: label });
  }
  function SubmitButton(props) {
    const {
      submitText,
      norender,
      props: submitButtonProps
    } = utils.getSubmitButtonOptions(props.uiSchema);
    if (norender) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.Button,
      {
        className: "react-aria-Button react-aria-SubmitButton",
        type: "submit",
        ...submitButtonProps,
        children: submitText
      }
    );
  }
  function TitleField({ id, title, uiSchema, optionalDataControl }) {
    const uiOptions = utils.getUiOptions(uiSchema);
    let heading = /* @__PURE__ */ jsxRuntime.jsx("h5", { className: "react-aria-title-heading", children: uiOptions.title || title });
    if (optionalDataControl) {
      heading = /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-title-with-control", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-title-heading-wrapper", children: heading }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-title-control", children: optionalDataControl })
      ] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { id, className: "react-aria-title-field", children: [
      heading,
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-title-separator", children: /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Separator, {}) })
    ] });
  }
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
    const keyLabel = translateString(utils.TranslatableString.KeyLabel, [label]);
    const additional = utils.ADDITIONAL_PROPERTY_FLAG in schema;
    if (!additional) {
      return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
    }
    const keyId = `${id}-key`;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: `react-aria-additional-property ${classNames || ""}`,
          style,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-additional-property-key", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-additional-property-key-wrapper", children: [
              displayLabel && /* @__PURE__ */ jsxRuntime.jsx(
                "label",
                {
                  htmlFor: keyId,
                  className: "react-aria-additional-property-label",
                  children: keyLabel
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-input-wrapper", children: /* @__PURE__ */ jsxRuntime.jsx(
                reactAriaComponents.Input,
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
              !!rawDescription && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-additional-property-spacer", children: "\xA0" })
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-additional-property-value", children }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-additional-property-remove", children: /* @__PURE__ */ jsxRuntime.jsx(
              RemoveButton2,
              {
                id: utils.buttonId(id, "remove"),
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
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-separator-wrapper", children: /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Separator, {}) })
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
  function Checkbox({ children, ...props }) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Checkbox, { ...props, className: "react-aria-Checkbox", children: ({ isIndeterminate }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-Checkbox-indicator", children: /* @__PURE__ */ jsxRuntime.jsx(
        "svg",
        {
          viewBox: "0 0 18 18",
          "aria-hidden": "true",
          children: isIndeterminate ? /* @__PURE__ */ jsxRuntime.jsx("rect", { x: 1, y: 7.5, width: 16, height: 3 }) : /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "2 9 7 14 16 4" })
        },
        isIndeterminate ? "indeterminate" : "check"
      ) }),
      children
    ] }) });
  }
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
    const required = utils.schemaRequiresTrueValue(schema);
    const DescriptionFieldTemplate = utils.getTemplate("DescriptionFieldTemplate", registry, options);
    const _onChange = (isSelected) => onChange(isSelected);
    const _onBlur = () => onBlur(id, value);
    const _onFocus = () => onFocus(id, value);
    const description = options.description || schema.description;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "react-aria-CheckboxWidget",
        "aria-describedby": utils.ariaDescribedByIds(id),
        "data-disabled": disabled || readonly || void 0,
        children: [
          !hideLabel && description && /* @__PURE__ */ jsxRuntime.jsx(
            DescriptionFieldTemplate,
            {
              id: utils.descriptionId(id),
              description,
              schema,
              uiSchema,
              registry
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
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
              children: utils.labelValue(label, hideLabel || !label)
            }
          )
        ]
      }
    );
  }
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.CheckboxGroup,
      {
        className: "react-aria-CheckboxGroup",
        "aria-describedby": utils.ariaDescribedByIds(id),
        "aria-label": label || id,
        "data-orientation": inline ? "horizontal" : "vertical",
        value: selectedValues,
        onChange: handleChange,
        isDisabled: disabled || readonly,
        isRequired: required,
        children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
          const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
          const indexOptionId = utils.optionId(id, index);
          return /* @__PURE__ */ jsxRuntime.jsx(
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
  function RadioGroup({
    label,
    description,
    errorMessage,
    children,
    orientation = "vertical",
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.RadioGroup, { ...props, className: "react-aria-RadioGroup", "data-orientation": orientation, children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-RadioGroup-items", children }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function Radio(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Radio, { ...props, className: "react-aria-Radio", children: reactAriaComponents.composeRenderProps(props.children, (children) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-Radio-indicator" }),
      children
    ] })) });
  }
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
      onChange(utils.enumOptionsValueForIndex(newValue, enumOptions, emptyValue));
    };
    const _onBlur = () => onBlur(id, value);
    const _onFocus = () => onFocus(id, value);
    const inline = Boolean(options && options.inline);
    const selectedIndex = utils.enumOptionsIndexForValue(value, enumOptions);
    const selectedValue = selectedIndex !== void 0 ? String(selectedIndex) : void 0;
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.RadioGroup,
      {
        className: "react-aria-RadioGroup",
        value: selectedValue ?? null,
        isRequired: required,
        isDisabled: disabled || readonly,
        onChange: _onChange,
        onBlur: _onBlur,
        onFocus: _onFocus,
        "aria-describedby": utils.ariaDescribedByIds(id),
        "aria-label": label || id,
        orientation: inline ? "horizontal" : "vertical",
        "data-orientation": inline ? "horizontal" : "vertical",
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-RadioGroup-items", children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
          const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
          return /* @__PURE__ */ jsxRuntime.jsx(
            Radio,
            {
              value: String(index),
              isDisabled: itemDisabled,
              children: option.label
            },
            utils.optionId(id, index)
          );
        }) })
      }
    );
  }
  function RangeWidget({
    value,
    readonly,
    disabled,
    schema,
    onChange,
    label,
    id
  }) {
    const { min = 0, max = 100, step } = utils.rangeSpec(schema);
    const currentValue = value ?? min;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.Slider,
      {
        className: "react-aria-Slider",
        value: currentValue,
        onChange,
        minValue: min,
        maxValue: max,
        step,
        isDisabled: disabled || readonly,
        "aria-describedby": utils.ariaDescribedByIds(id),
        "aria-label": label || id,
        children: [
          label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
          /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" \u2013 ") }),
          /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: "react-aria-SliderTrack-rail",
                "data-disabled": isDisabled || void 0,
                children: state.values.length === 1 ? /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: "react-aria-SliderTrack-fill",
                    style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" }
                  }
                ) : state.values.length === 2 ? /* @__PURE__ */ jsxRuntime.jsx(
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
            state.values.map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderThumb, { index: i, className: "react-aria-SliderThumb" }, i))
          ] }) })
        ]
      }
    );
  }
  function Popover({ children, hideArrow, className, ...props }) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Popover, { ...props, className: `react-aria-Popover ${className || ""}`, children: ({ trigger }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      !hideArrow && trigger !== "MenuTrigger" && trigger !== "SubmenuTrigger" && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.OverlayArrow, { className: "react-aria-OverlayArrow", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: 12, height: 12, viewBox: "0 0 12 12", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M0 0 L6 6 L12 0" }) }) }),
      children
    ] }) });
  }
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
      onFocus(id, utils.enumOptionsValueForIndex(value, enumOptions, optEmptyValue));
    };
    const _onBlur = () => {
      onBlur(id, utils.enumOptionsValueForIndex(value, enumOptions, optEmptyValue));
    };
    const hasError = rawErrors.length > 0;
    if (multiple) {
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-Select", "data-multiple": true, children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "select",
          {
            id,
            multiple: true,
            required,
            disabled: disabled || readonly,
            autoFocus: autofocus,
            value: Array.isArray(value) ? value.map(
              (v) => utils.enumOptionsIndexForValue(v, enumOptions, false)?.toString() || ""
            ).filter(Boolean) : [],
            onChange: (e) => {
              const selectedOptions = Array.from(e.target.selectedOptions).map(
                (opt) => opt.value
              );
              onChange(
                utils.enumOptionsValueForIndex(
                  selectedOptions,
                  enumOptions,
                  optEmptyValue
                )
              );
            },
            onFocus: _onFocus,
            onBlur: _onBlur,
            className: "react-aria-Select-native",
            "aria-describedby": utils.ariaDescribedByIds(id),
            "data-invalid": hasError || void 0,
            children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
              const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.includes(option.value);
              return /* @__PURE__ */ jsxRuntime.jsx(
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
    const selectedIndex = utils.enumOptionsIndexForValue(
      value ?? defaultValue,
      enumOptions,
      false
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.Select,
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
            utils.enumOptionsValueForIndex(
              key,
              enumOptions,
              optEmptyValue
            )
          );
        },
        onFocus: _onFocus,
        onBlur: _onBlur,
        "aria-describedby": utils.ariaDescribedByIds(id),
        children: [
          label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
          /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Button, { className: "react-aria-Select-button", children: [
            /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "svg",
              {
                viewBox: "0 0 12 12",
                "aria-hidden": "true",
                className: "react-aria-Select-chevron",
                children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4 L6 8 L10 4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ListBox, { className: "react-aria-ListBox", children: Array.isArray(enumOptions) && enumOptions.map((option, index) => {
            const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.includes(option.value);
            return /* @__PURE__ */ jsxRuntime.jsx(
              reactAriaComponents.ListBoxItem,
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.TextField,
      {
        className: "react-aria-TextField",
        isRequired: required,
        isDisabled: disabled,
        isReadOnly: readonly,
        isInvalid: hasError,
        children: [
          !hideLabel && label && /* @__PURE__ */ jsxRuntime.jsxs(Label, { children: [
            label,
            required ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-required", children: "*" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            reactAriaComponents.TextArea,
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
              "aria-describedby": utils.ariaDescribedByIds(id)
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
  var ReactAriaFormWrapper = react.forwardRef(({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className, children: /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Form, { ...props, ref }) });
  });
  ReactAriaFormWrapper.displayName = "ReactAriaFormWrapper";
  function generateForm() {
    const ThemedForm = core.withTheme(generateTheme());
    const AriaThemedForm = react.forwardRef((props, ref) => {
      return /* @__PURE__ */ jsxRuntime.jsx(ThemedForm, { ...props, ref, tagName: ReactAriaFormWrapper });
    });
    AriaThemedForm.displayName = "AriaThemedForm";
    return AriaThemedForm;
  }
  var Form_default = generateForm();
  var __createReactAriaFrameProvider = (props) => ({ document }) => {
    return /* @__PURE__ */ jsxRuntime.jsx(overlays.UNSAFE_PortalProvider, { getContainer: () => document?.body ?? null, children: props.children });
  };
  function Button3(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.Button,
      {
        ...props,
        className: "react-aria-Button",
        "data-variant": props.variant || "primary",
        children: reactAriaComponents.composeRenderProps(props.children, (children, { isPending }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          !isPending && children,
          isPending && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-Button-spinner", children: "..." })
        ] }))
      }
    );
  }
  function CheckboxGroup({
    label,
    description,
    errorMessage,
    children,
    orientation = "vertical",
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.CheckboxGroup, { ...props, className: "react-aria-CheckboxGroup", "data-orientation": orientation, children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-CheckboxGroup-items", children }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function ListBox2({ children, ...props }) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ListBox, { ...props, className: "react-aria-ListBox", children });
  }
  function ListBoxItem2(props) {
    const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ListBoxItem, { ...props, textValue, className: "react-aria-ListBoxItem", children: reactAriaComponents.composeRenderProps(
      props.children,
      (children) => typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Text, { slot: "label", children }) : children
    ) });
  }
  function ListBoxSection(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ListBoxSection, { ...props, className: "react-aria-ListBoxSection" });
  }
  function DropdownListBox(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ListBox, { ...props, className: "react-aria-DropdownListBox" });
  }
  function DropdownItem(props) {
    const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
    return /* @__PURE__ */ jsxRuntime.jsx(ListBoxItem2, { ...props, textValue, className: "react-aria-DropdownItem", children: reactAriaComponents.composeRenderProps(props.children, (children, { isSelected }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      isSelected && /* @__PURE__ */ jsxRuntime.jsx(
        "svg",
        {
          viewBox: "0 0 18 18",
          "aria-hidden": "true",
          className: "react-aria-DropdownItem-check",
          children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "2 9 7 14 16 4" })
        }
      ),
      typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Text, { slot: "label", children }) : children
    ] })) });
  }
  function Select({
    label,
    description,
    errorMessage,
    children,
    items,
    placeholder,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Select, { ...props, className: "react-aria-Select", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Button, { className: "react-aria-Select-button", children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "svg",
          {
            viewBox: "0 0 12 12",
            "aria-hidden": "true",
            className: "react-aria-Select-chevron",
            children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4 L6 8 L10 4" })
          }
        )
      ] }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage }),
      /* @__PURE__ */ jsxRuntime.jsx(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: /* @__PURE__ */ jsxRuntime.jsx(SelectListBox, { items, children }) })
    ] });
  }
  function SelectListBox(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(DropdownListBox, { ...props });
  }
  function SelectItem(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(DropdownItem, { ...props });
  }
  function TextField({
    label,
    description,
    errorMessage,
    placeholder,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.TextField, { ...props, className: "react-aria-TextField", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Input, { className: "react-aria-Input", placeholder }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
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
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.TextField, { ...props, className: "react-aria-TextField", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TextArea, { className: "react-aria-TextArea", placeholder, rows }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function Slider({
    label,
    thumbLabels,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Slider, { ...props, className: "react-aria-Slider", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" \u2013 ") }),
      /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "react-aria-SliderTrack-rail",
            "data-disabled": isDisabled || void 0,
            children: state.values.length === 1 ? (
              // Single thumb, render fill from the start
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "react-aria-SliderTrack-fill",
                  style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" }
                }
              )
            ) : state.values.length === 2 ? (
              // Range slider, render fill between the thumbs
              /* @__PURE__ */ jsxRuntime.jsx(
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
        state.values.map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
          reactAriaComponents.SliderThumb,
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
  function NumberField({
    label,
    description,
    errorMessage,
    placeholder,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.NumberField, { ...props, className: "react-aria-NumberField", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Group, { className: "react-aria-NumberField-group", children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Input, { className: "react-aria-Input", placeholder }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { slot: "decrement", className: "react-aria-NumberField-button", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { slot: "increment", className: "react-aria-NumberField-button", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 4 L9 14 M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
      ] }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function Switch({ children, ...props }) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Switch, { ...props, className: "react-aria-Switch", children: ({ isSelected, isDisabled }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-Switch-track", children: /* @__PURE__ */ jsxRuntime.jsx(
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
  function ComboBox({
    label,
    description,
    errorMessage,
    children,
    placeholder,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.ComboBox, { ...props, className: "react-aria-ComboBox", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-ComboBox-field", children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Input, { className: "react-aria-Input", placeholder }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { className: "react-aria-ComboBox-button", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 12 12", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4 L6 8 L10 4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage }),
      /* @__PURE__ */ jsxRuntime.jsx(Popover, { hideArrow: true, className: "react-aria-ComboBox-popover", children: /* @__PURE__ */ jsxRuntime.jsx(ComboBoxListBox, { children }) })
    ] });
  }
  function ComboBoxListBox(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(DropdownListBox, { ...props });
  }
  function ComboBoxItem(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(DropdownItem, { ...props });
  }
  function DateField({
    label,
    description,
    errorMessage,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.DateField, { ...props, className: "react-aria-DateField", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(DateInput, { children: (segment) => /* @__PURE__ */ jsxRuntime.jsx(DateSegment, { segment }) }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function DateInput(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.DateInput, { ...props, className: "react-aria-DateInput" });
  }
  function DateSegment(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.DateSegment, { ...props, className: "react-aria-DateSegment" });
  }
  function TimeField({
    label,
    description,
    errorMessage,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.TimeField, { ...props, className: "react-aria-TimeField", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(DateInput, { children: (segment) => /* @__PURE__ */ jsxRuntime.jsx(DateSegment, { segment }) }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function Heading(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Heading, { ...props, className: "react-aria-Heading" });
  }
  function Text3(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Text, { ...props, className: "react-aria-Text" });
  }
  function Calendar({
    errorMessage,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Calendar, { ...props, className: "react-aria-Calendar", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("header", { className: "react-aria-Calendar-header", children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { slot: "previous", className: "react-aria-Calendar-nav", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 4 L6 9 L11 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Heading, { className: "react-aria-Calendar-heading" }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { slot: "next", className: "react-aria-Calendar-nav", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(CalendarGrid, { children: (date) => /* @__PURE__ */ jsxRuntime.jsx(CalendarCell, { date }) }),
      errorMessage && /* @__PURE__ */ jsxRuntime.jsx(Text3, { slot: "errorMessage", children: errorMessage })
    ] });
  }
  function CalendarCell(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.CalendarCell, { ...props, className: "react-aria-CalendarCell" });
  }
  function CalendarGrid(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.CalendarGrid, { ...props, className: "react-aria-CalendarGrid" });
  }
  function DatePicker({
    label,
    description,
    errorMessage,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.DatePicker, { ...props, className: "react-aria-DatePicker", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Group, { className: "react-aria-DatePicker-group", children: [
        /* @__PURE__ */ jsxRuntime.jsx(DateInput, { children: (segment) => /* @__PURE__ */ jsxRuntime.jsx(DateSegment, { segment }) }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { className: "react-aria-DatePicker-button", children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "2", y: "4", width: "14", height: "12", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 8 L16 8", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 2 L6 5 M12 2 L12 5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
        ] }) })
      ] }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage }),
      /* @__PURE__ */ jsxRuntime.jsx(Popover, { hideArrow: true, className: "react-aria-DatePicker-popover", children: /* @__PURE__ */ jsxRuntime.jsx(Calendar, {}) })
    ] });
  }
  function SearchField({
    label,
    description,
    errorMessage,
    placeholder,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.SearchField, { ...props, className: "react-aria-SearchField", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "react-aria-SearchField-wrapper", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-SearchField-icon", children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "7", cy: "7", r: "5", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 11 L15 15", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Input, { placeholder, className: "react-aria-Input" }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { className: "react-aria-SearchField-clear", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
      ] }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      /* @__PURE__ */ jsxRuntime.jsx(FieldError, { children: errorMessage })
    ] });
  }
  function Dialog(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Dialog, { ...props, className: "react-aria-Dialog" });
  }
  function DialogTrigger(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.DialogTrigger, { ...props });
  }
  function Modal(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Modal, { ...props, className: "react-aria-Modal" });
  }
  function ModalOverlay(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ModalOverlay, { ...props, className: "react-aria-ModalOverlay" });
  }
  function Tooltip({ children, ...props }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Tooltip, { ...props, className: "react-aria-Tooltip", children: [
      /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.OverlayArrow, { className: "react-aria-OverlayArrow", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M0 0 L4 4 L8 0" }) }) }),
      children
    ] });
  }
  function TooltipTrigger(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TooltipTrigger, { ...props });
  }
  function Separator3(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Separator, { ...props, className: "react-aria-Separator" });
  }
  function Link(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Link, { ...props, className: "react-aria-Link" });
  }
  function TagGroup({
    label,
    description,
    errorMessage,
    items,
    children,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.TagGroup, { ...props, className: "react-aria-TagGroup", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TagList, { items, className: "react-aria-TagList", children }),
      description && /* @__PURE__ */ jsxRuntime.jsx(Description, { children: description }),
      errorMessage && /* @__PURE__ */ jsxRuntime.jsx(Text3, { slot: "errorMessage", children: errorMessage })
    ] });
  }
  function Tag({ children, ...props }) {
    const textValue = typeof children === "string" ? children : void 0;
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Tag, { textValue, ...props, className: "react-aria-Tag", children: ({ allowsRemoving }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      children,
      allowsRemoving && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { slot: "remove", className: "react-aria-Tag-remove", children: /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
    ] }) });
  }
  function MenuTrigger(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.MenuTrigger, { ...props });
  }
  function Menu(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Menu, { ...props, className: "react-aria-Menu" });
  }
  function MenuItem(props) {
    const textValue = props.textValue || (typeof props.children === "string" ? props.children : void 0);
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.MenuItem, { ...props, textValue, className: "react-aria-MenuItem", children: reactAriaComponents.composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      selectionMode === "multiple" && isSelected && /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-check", children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "2 9 7 14 16 4", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }),
      selectionMode === "single" && isSelected && /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-dot", children: /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "9", cy: "9", r: "3", fill: "currentColor" }) }),
      typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(Text3, { slot: "label", children }) : children,
      hasSubmenu && /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-chevron", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    ] })) });
  }
  function MenuSection(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.MenuSection, { ...props, className: "react-aria-MenuSection" });
  }
  function SubmenuTrigger(props) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SubmenuTrigger, { ...props });
  }
  function ProgressBar({ label, ...props }) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ProgressBar, { ...props, className: "react-aria-ProgressBar", children: ({ percentage, valueText, isIndeterminate }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "react-aria-ProgressBar-value", children: valueText }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "react-aria-ProgressBar-track", children: /* @__PURE__ */ jsxRuntime.jsx(
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

  exports.Button = Button3;
  exports.Calendar = Calendar;
  exports.CalendarCell = CalendarCell;
  exports.CalendarGrid = CalendarGrid;
  exports.Checkbox = Checkbox;
  exports.CheckboxGroup = CheckboxGroup;
  exports.ComboBox = ComboBox;
  exports.ComboBoxItem = ComboBoxItem;
  exports.ComboBoxListBox = ComboBoxListBox;
  exports.DateField = DateField;
  exports.DateInput = DateInput;
  exports.DatePicker = DatePicker;
  exports.DateSegment = DateSegment;
  exports.Description = Description;
  exports.Dialog = Dialog;
  exports.DialogTrigger = DialogTrigger;
  exports.DropdownItem = DropdownItem;
  exports.DropdownListBox = DropdownListBox;
  exports.FieldButton = FieldButton;
  exports.FieldError = FieldError;
  exports.Form = Form_default;
  exports.Heading = Heading;
  exports.Label = Label;
  exports.Link = Link;
  exports.ListBox = ListBox2;
  exports.ListBoxItem = ListBoxItem2;
  exports.ListBoxSection = ListBoxSection;
  exports.Menu = Menu;
  exports.MenuItem = MenuItem;
  exports.MenuSection = MenuSection;
  exports.MenuTrigger = MenuTrigger;
  exports.Modal = Modal;
  exports.ModalOverlay = ModalOverlay;
  exports.NumberField = NumberField;
  exports.Popover = Popover;
  exports.ProgressBar = ProgressBar;
  exports.Radio = Radio;
  exports.RadioGroup = RadioGroup;
  exports.SearchField = SearchField;
  exports.Select = Select;
  exports.SelectItem = SelectItem;
  exports.SelectListBox = SelectListBox;
  exports.Separator = Separator3;
  exports.Slider = Slider;
  exports.SubmenuTrigger = SubmenuTrigger;
  exports.Switch = Switch;
  exports.Tag = Tag;
  exports.TagGroup = TagGroup;
  exports.Templates = Templates_default;
  exports.Text = Text3;
  exports.TextAreaField = TextAreaField;
  exports.TextField = TextField;
  exports.Theme = Theme_default;
  exports.TimeField = TimeField;
  exports.Tooltip = Tooltip;
  exports.TooltipTrigger = TooltipTrigger;
  exports.Widgets = Widgets_default;
  exports.__createReactAriaFrameProvider = __createReactAriaFrameProvider;
  exports.default = index_default;
  exports.generateForm = generateForm;
  exports.generateTemplates = generateTemplates;
  exports.generateTheme = generateTheme;
  exports.generateWidgets = generateWidgets;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
