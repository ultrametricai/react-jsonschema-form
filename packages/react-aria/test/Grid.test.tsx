import { gridTests } from "@rjsf/snapshot-tests";

import Form from "../src";

gridTests(Form, {
  ColumnWidthAll: { className: "rjsf-col-12" },
  ColumnWidth4: { className: "rjsf-col-4" },
  ColumnWidth6: { className: "rjsf-col-6" },
  ColumnWidth8: { className: "rjsf-col-8" },
  Row2Columns: { className: "rjsf-grid rjsf-grid-cols-12 rjsf-col-12" },
  Row3Columns: { className: "rjsf-grid rjsf-grid-cols-12 rjsf-col-12" },
  ComplexUiSchema: {
    "ui:field": "LayoutGridField",
    "ui:layoutGrid": {
      "ui:row": [
        {
          "ui:row": {
            className: "rjsf-grid rjsf-grid-cols-1 rjsf-col-12",
            children: [
              {
                "ui:col": {
                  children: ["person"],
                },
              },
            ],
          },
        },
        {
          "ui:row": {
            className: "rjsf-grid rjsf-grid-cols-12 rjsf-col-12",
            children: [
              {
                "ui:columns": {
                  className: "rjsf-col-4",
                  children: [
                    "person.name.first",
                    "person.name.middle",
                    "person.name.last",
                  ],
                },
              },
            ],
          },
        },
        {
          "ui:row": {
            className: "rjsf-grid rjsf-grid-cols-12 rjsf-col-12",
            children: [
              {
                "ui:col": {
                  className: "rjsf-col-3",
                  children: [
                    {
                      name: "person.birth_date",
                      placeholder: "$lookup=PlaceholderText",
                    },
                  ],
                },
              },
              {
                "ui:col": {
                  className: "rjsf-col-6",
                  children: ["person.race"],
                },
              },
            ],
          },
        },
        {
          "ui:row": {
            className: "rjsf-grid rjsf-grid-cols-12 rjsf-col-12 rjsf-grid-rows-4",
            children: [
              {
                "ui:col": {
                  className: "rjsf-col-6 rjsf-row-span-4",
                  children: ["person.address"],
                },
              },
              {
                "ui:col": {
                  className: "rjsf-col-6 rjsf-row-span-1 rjsf-flex-center",
                  children: ["employment"],
                },
              },
              {
                "ui:condition": {
                  field: "employment.job_type",
                  value: "company",
                  operator: "all",
                  children: [
                    {
                      "ui:columns": {
                        className: "rjsf-col-6 rjsf-row-span-1",
                        children: ["employment.business", "employment.title"],
                      },
                    },
                    {
                      "ui:col": {
                        className: "rjsf-col-4 rjsf-row-span-1",
                        children: ["employment.location.city"],
                      },
                    },
                    {
                      "ui:col": {
                        className: "rjsf-col-2 rjsf-row-span-1",
                        children: ["employment.location.state"],
                      },
                    },
                  ],
                },
              },
              {
                "ui:condition": {
                  field: "employment.job_type",
                  value: "education",
                  operator: "all",
                  children: [
                    {
                      "ui:columns": {
                        className: "rjsf-col-6 rjsf-row-span-1",
                        children: [
                          "employment.district",
                          "employment.school",
                          "employment.title",
                        ],
                      },
                    },
                    {
                      "ui:col": {
                        className: "rjsf-col-4 rjsf-row-span-1",
                        children: ["employment.location.city"],
                      },
                    },
                    {
                      "ui:col": {
                        className: "rjsf-col-2 rjsf-row-span-1",
                        children: ["employment.location.state"],
                      },
                    },
                  ],
                },
              },
              {
                "ui:condition": {
                  field: "employment.job_type",
                  value: "other",
                  operator: "all",
                  children: [
                    {
                      "ui:columns": {
                        className: "rjsf-col-6 rjsf-row-span-3",
                        children: [
                          {
                            name: "employment.description",
                            rows: 6,
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    person: {
      "ui:field": "LayoutHeaderField",
      race: {
        "ui:options": {
          widget: "checkboxes",
        },
      },
      address: {
        "ui:field": "LayoutGridField",
        "ui:layoutGrid": {
          "ui:row": {
            className: "rjsf-grid rjsf-grid-cols-12",
            children: [
              {
                "ui:columns": {
                  className: "rjsf-col-12",
                  children: ["line_1", "line_2", "city"],
                },
              },
              {
                "ui:row": {
                  className: "rjsf-grid-cols-12 rjsf-col-12",
                  children: [
                    {
                      "ui:columns": {
                        className: "rjsf-col-6",
                        children: ["state", "postal_code"],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
    employment: {
      "ui:options": {
        inline: true,
      },
      description: {
        "ui:widget": "textarea",
      },
    },
  },
});
