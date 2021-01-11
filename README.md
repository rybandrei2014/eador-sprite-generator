# eador-sprite-generator

Project that aims to generate .jsx ExtendScript to process .psd unit files to generate sprite assets for Eador Genesis

## Setup

- install npm dependencies
```bash
npm install
```
- edit .env file to adapt to your environment
    - PICTS_TEMPLATE_URL - absolute path to .psd file with UNIT_PICTS template
    - ICON_TEMPLATE_URL - absolute path to .psd file with UNIT_ICON template
    - ITEM_TEMPLATE_URL - absolute path to .psd file with UNIT_ITEM template
    - MAIN_FOLDER_URL - absolute path to folder that contains input .psd files with units to generate assets for
    - UNITS_FOLDER_URL - absolute path to output folder for UNITS assets
    - UNIT_SHADOW_FOLDER_URL - absolute path to output folder for UNIT_SHADOW assets
    - UNIT_SHADOWF_FOLDER_URL - absolute path to output folder for UNIT_SHADOWF assets
    - UNIT_ICONS_FOLDER_URL - absolute path to output folder for UNIT_ICONS assets
    - UNIT_PICTS_FOLDER_URL - absolute path to output folder for UNIT_PICTS assets
    - ITEMS_FOLDER_URL - absolute path to output folder for ITEMS assets
    - OUT_HEIGHT - default size in pixels of output sprite size if height is not provided in the name of .psd file (example 010_100.psd -> will generate 010.bmp file with height of 100 pixels)
    - THRESHOLD_VALUE - value of threshold filter to apply
    - DEFRINGE_VALUE - value of defringe filter to apply
- run script to generate Env.ts from .env and to generate .jsx ExtendScript file
```bash
npm run build
```
- run generated .jsx script in photoshop

## Development

- run watch script to to listen to changes in \*.ts and .env files
```bash
npm run watch
```

## Contributions

It is an open-source project so contributions are welcomed.

## License

Copyright © 2021 Andrei Rybin

Distributed under the <a href="https://www.eclipse.org/legal/epl-2.0/">Eclipse Public License 2.0</a>