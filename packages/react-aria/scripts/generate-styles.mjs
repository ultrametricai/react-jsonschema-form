#!/usr/bin/env node

/**
 * Fetches CSS files from Adobe react-spectrum starters/docs/src
 * and combines them into a single stylesheet.
 */

import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://raw.githubusercontent.com/adobe/react-spectrum/main/starters/docs/src';

const CSS_FILES = [
  'theme.css',
  'utilities.css',
  'Breadcrumbs.css',
  'Button.css',
  'Calendar.css',
  'Checkbox.css',
  'CheckboxGroup.css',
  'ColorArea.css',
  'ColorField.css',
  'ColorPicker.css',
  'ColorSlider.css',
  'ColorSwatch.css',
  'ColorSwatchPicker.css',
  'ColorThumb.css',
  'ColorWheel.css',
  'ComboBox.css',
  'CommandPalette.css',
  'Content.css',
  'DateField.css',
  'DatePicker.css',
  'DateRangePicker.css',
  'Dialog.css',
  'Disclosure.css',
  'DisclosureGroup.css',
  'DropZone.css',
  'Form.css',
  'GridList.css',
  'InputGroup.css',
  'Link.css',
  'ListBox.css',
  'Menu.css',
  'Meter.css',
  'Modal.css',
  'NumberField.css',
  'Popover.css',
  'ProgressBar.css',
  'RadioGroup.css',
  'RangeCalendar.css',
  'SearchField.css',
  'SegmentedControl.css',
  'Select.css',
  'Separator.css',
  'Sheet.css',
  'Slider.css',
  'Switch.css',
  'Table.css',
  'Tabs.css',
  'TagGroup.css',
  'TextField.css',
  'TimeField.css',
  'Toast.css',
  'ToggleButton.css',
  'ToggleButtonGroup.css',
  'Toolbar.css',
  'Tooltip.css',
  'Tree.css',
];

async function fetchCSS(filename) {
  const url = `${BASE_URL}/${filename}`;
  console.log(`Fetching ${filename}...`);

  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`Warning: Failed to fetch ${filename}: ${response.status}`);
    return '';
  }

  let content = await response.text();

  // Remove @import statements
  content = content.replace(/^@import\s+[^;]+;[\r\n]*/gm, '');

  return `/* ===== ${filename} ===== */\n${content}\n`;
}

async function main() {
  console.log('Generating stylesheet from react-spectrum starters...\n');

  const results = await Promise.all(CSS_FILES.map(fetchCSS));

  const header = `/**
 * React Aria Components Stylesheet
 *
 * Auto-generated from Adobe react-spectrum starters/docs/src
 * https://github.com/adobe/react-spectrum/tree/main/starters/docs/src
 *
 * Generated: ${new Date().toISOString()}
 */

`;

  const combined = header + results.join('\n');

  const outputPath = join(__dirname, '..', 'resources', 'default.css');
  writeFileSync(outputPath, combined, 'utf-8');

  console.log(`\nStylesheet written to: ${outputPath}`);
  console.log(`Total size: ${(combined.length / 1024).toFixed(2)} KB`);
}

main().catch(console.error);
