### Usage

1. You must create a configuration file in your root project directory `.create-vue-store.json`

```
{"modules":"src/store/modules/"}
```

Where the modules should point to your relative folder.

If there is none created it will thorw an error and create the default one for you.

2. Press F1 in your Visual Studi code and type "Create State for Vue`

3. You will be prompted to enter the new folder name

4. Once you click enter it will create 4 new files:

* YOUR_FOLDER/actions.js
* YOUR_FOLDER/mutations.js
* YOUR_FOLDER/getters.js
* YOUR_FOLDER/state.js
* YOUR_FOLDER/index.js

With predefined content.
