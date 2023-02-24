
const cds = require("@sap/cds");
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const SapCfAxios = require('sap-cf-axios').default;
const axios = SapCfAxios("JSONPLACEHOLDER");
const generateUUID = require('uuid').v4;

module.exports = cds.service.impl(async (srv) => {
    //module.exports = async (srv) => {
    //let oHandler = await new accessHandler();
    //let oNew = await new newSarHandler();
    //let favOperatorHandler = new FavOperatorHandler();
    /*
    srv.before("READ", "RequestSet", async (req) => {
        await oHandler.onBeforeRead(req);
    });

    srv.after("READ", "RequestSet", async (data, req) => {
        await oHandler.onAfterRead(data, req);
    });*/
    //function is for get data
    //actions is post/put/patch
    srv.on("payDetail", async (req) => {
        console.log(req.data);
        let v = req.data.context;
        let payload = await INSERT.into("MY_BOOKSHOP_PAY").entries({
            "ID":v.id,
            "usuarioRegistro":"MCHAVEZP",
            "activo":true,
            "description":v.description,
            "value":v.value,
            "ihaverxh":false,
            "flow_ID":"3086be74-09eb-4fad-802e-fc91ccec8f52",
            "entity_ID":"c95e0a94-24cd-433e-b8b3-bf06991896db",
            "method_ID":"f0e1c894-0be2-4d3b-85fb-746c8bac3429",
            "money_ID":"a64e866c-acbe-44ff-8b64-025e29c5ed6c"
            
        })
        let operations = [];
        for( const ele of v.details){
            operations.push(
                INSERT.into("MY_BOOKSHOP_PAY_DETAILS")
                    .entries({
                        ID: generateUUID(),
                        DESCRIPTION: ele.description,
                        METHOD_ID: ele.method,
                        ENTITY_ID: ele.entity1,
                        CATEGORY_ID: ele.category,
                        VALUE: ele.value,
                        PAY_ID:v.id
                    })
            );
        }
        const tx = cds.tx();
        await tx.run(operations);
        await tx.commit();

        console.log(operations);

        console.log(payload);
    });

    srv.on("findAPI", async (req) => {
        console.log("test");
        const response = await axios({
            method: 'GET',
            headers: {
                "content-type": "application/json"

            }

        });

        console.log(response);

        return req.reply("returnSchedule");
        /*
        new Promise(async(resolve, reject)=>{
            let oPromise = executeHttpRequest({ destinationName: "JSONPLACEHOLDER" },
             {
                 method: 'get'
                 
             });
             await oPromise.then((response) => {
                 resolve(response)
        return req.reply("returnSchedule");
 
             }).catch((oError) => {
                 reject(oError);
        return req.reply("returnSchedule");
             });
        })
        */
    });

});

