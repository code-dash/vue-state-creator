export const filesToCreate = {
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
}
