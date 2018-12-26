const glob = require('glob');

const loadPlugins = {
    name: "loadPlugins",
    version: "0.0.1",
    error: "An error has occured. Plugins could not be loaded!",
    success: "Plugins Successfully Loaded!",
    main: async function() {
        glob.sync(process.env.PLUGIN_DIR)
    }
}

module.exports = { loadPlugins: loadPlugins };