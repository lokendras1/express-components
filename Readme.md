# Express Component Generator

A simple package to generate named components for your express app.

Installation:

```
npm i @pastern/ecg -g
```

To create an express component in your app, follow the steps:

- Move to the directory in which you'd like to create the component.
- Run the command to initialize the components:
  
  ```
  ecg COMPONENT_NAME
  ```

- This would create `controllers`, `routes`, `services` and `tests` components in the respective directories.

If you do not wish to install the package, please use `npx` command to execute the command. Like this:
```
npx ecg COMPONENT_NAME
```