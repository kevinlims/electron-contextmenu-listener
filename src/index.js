import ContextMenuListener from './context-menu-listener';

/**
 * Overrides the default logging function (the `debug` library) with another 
 * logger.
 *
 * @param {Function}  fn    The `console.log` like function that will write debug
 *                          information to.
 */
function setGlobalLogger(fn) {
  for (let klass of [ContextMenuListener]) {
    klass.setLogger(fn);
  }
}

module.exports = {
  ContextMenuListener,
  setGlobalLogger
};
