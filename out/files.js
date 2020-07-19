"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesToCreate = void 0;
exports.filesToCreate = {
    "actions.js": `export default {

}
`,
    "mutations.js": `export default {

}
`,
    "state.js": `export default {
  /**
   * Items.
   *
   * @type {Array}
   */
  items: []
}
`,
    "getters.js": `export default {
  /**
   * Return items.
   *
   * @param {Object} state
   * @return {Array}
   */
  items: state => state.items,
}
`,
    "index.js": `/**
* Internal dependencies.
*/
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
`
};
//# sourceMappingURL=files.js.map