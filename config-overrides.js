const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@layout-header-background': '#ffffff',
      '@btn-height-base': '36px',
      '@input-height-base': '36px',
      '@font-family': 'OpenSans',
      '@text-color': '#a8acb2',
      '@layout-sider-background': '#124DBB',
      '@menu-dark-bg': '#124DBB',
      '@radio-button-bg': '#EEEEEE',
      '@checkbox-size': '25px',
      '@table-header-bg': '#ffffff',
      '@label-color': '#A7ACB2',
      '@tooltip-bg': '#fff',
      '@tooltip-max-width': '520px',
      '@blue-6': '#124DBB'
    }
  })
);
