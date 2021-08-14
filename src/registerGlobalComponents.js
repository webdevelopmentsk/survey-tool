export const globalComponent = (app) => {
  const componentContext = require.context("@/components", true, /\.vue$/);
  function registerComponent(fileName, context) {
    const config = context(fileName);
    const pathParts = fileName.split("/");
    const compName = pathParts[pathParts.length - 1].replace(".vue", "");

    if (compName.startsWith("App")) {
      app.component(compName, config.default || config);
    } else if (compName === "Compute") {
      app.component(compName, config.default || config);
    }
  }
  componentContext
    .keys()
    .forEach((fileName) => registerComponent(fileName, componentContext));
};
