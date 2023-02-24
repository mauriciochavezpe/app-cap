const cds = require("@sap/cds");
const adapterProxy = require("@sap/cds-odata-v2-adapter-proxy");


cds.on("bootstrap", async (app) => {
    app.use(adapterProxy());
});

module.exports = cds.server;