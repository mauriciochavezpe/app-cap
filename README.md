# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


### comands
- npm add hdb --save
probé en el space apps , pero no funciona y si pruebo opipeline si funciona


STAFFING_DEVELOPER
Peru123.

``CREATE USER STAFFING_DB_USER PASSWORD "Inicio123." SET USERGROUP DEFAULT;
GRANT ALL PRIVILEGES ON SCHEMA STAFFING_DEV TO STAFFING_DB_USER;``

STAFFING_DEV


https://help.sap.com/docs/HANA_CLOUD/9ae9104a46f74a6583ce5182e7fb20cb/18fde2ad1da742d79aebd943a1aa71cd.html





## Considerations

### using cmd
    1. cds init
    2. cds build
    3. cds watch


1. Create folder `db>data>{namespace}-{entity}. csv`
Eg. "cap_tutorial-SalesOrders"


Create mta. need add command
> cds build --for hana
> cds build --production
> cds add mta
> npm add hdb --save
> cds deploy  --to hana


Para obtener el default-env
cf install-plugin DefaultEnv
> cf default-env cap-app-srv
> cds watch --profile hybrid
>  cds deploy --auto-undeploy



https://sap.github.io/cloud-sdk/docs/java/features/connectivity/destination-service
https://github.com/saphanaacademy/DefaultEnv
https://blogs.sap.com/2020/05/27/cap-consume-external-service-part-2/
https://blogs.sap.com/2019/06/26/sap-cloud-platform-backend-service-tutorial-28-scenario-approuternodetokenexchangeapi/
https://developers.sap.com/tutorials/hana-cloud-cap-add-auth-deploy.html#2a1e2750-03af-4fa6-bbe7-31ff254e35c8
