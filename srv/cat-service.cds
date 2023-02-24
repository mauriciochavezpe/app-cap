using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Books as projection on my.Books;
    entity Author as projection on my.Author;
    entity Method as projection on my.Method;
    entity Entity as projection on my.Entity;
    entity Money as projection on my.Money;
    entity Category as projection on my.Category;
    entity Flow as projection on my.Flow;
    function findAPI() returns String;
    type Detail {
         value: Decimal(4,2);
        description: String(50); 
    }
    
    type paramsPay {
        id: String(36);
        description : String(20);
        value  : Decimal(4, 2);
        rxh    : Boolean;
        ir5: Detail;
        afp: Detail;
        payloadLiqui:Detail;
    };

    action payDetail(context: paramsPay);

}