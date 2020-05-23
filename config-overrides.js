const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  // less-loader@6
  // addLessLoader({
  //   lessOptions: {
  //     javascriptEnabled: true,
  //     modifyVars: { '@primary-color': '#1DA57A' },
  //   },
  // }),
);
