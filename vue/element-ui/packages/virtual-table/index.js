import VirtualTable from './src/table';

/* istanbul ignore next */
VirtualTable.install = function(Vue) {
  Vue.component(VirtualTable.name, VirtualTable);
};

export default VirtualTable;
