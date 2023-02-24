namespace my.bookshop;

aspect auditoriaBase {
  //terminal         : String(100);
  fechaRegistro    : DateTime;
  usuarioRegistro  : String(100) not null;
  fechaActualiza   : DateTime;
  usuarioActualiza : String(100);
  activo           : Boolean not null;
}

/*@assert.unique : {alias : [alias]}*/

aspect details_description {
  name        : String(50);
  description : String(250);
  alias       : String(10);
}

entity Books {
  key ID     : Integer;
      title  : String;
      stock  : Integer;
      author : Association to Author;
}

entity Author {
  key ID    : Integer;
      name  : String;
      date  : Date;
      age   : Integer;
      books : Association to many Books
                on books.author = $self;
}

//------

entity Bank : auditoriaBase {
  key ID    : UUID;
      name  : String(250);
      alias : String(10);
}


entity Pay : auditoriaBase {
  key ID          : UUID;
      description : String(250);
      value       : Decimal(8, 4);
      flow        : Association to Flow;
      method      : Association to Method;
      money       : Association to Money;
      entity      : Association to Entity;
      category    : Association to Category;
      ihaveRXH    : Boolean;
      details     : Association to many Pay_details
                      on details.pay = $self;
}

entity Pay_details {
  key ID          : UUID;
      description : String(250);
      value       : Decimal(8, 4);
      method      : Association to Method;
      entity      : Association to Entity;
      category    : Association to Category;
      pay     : Association to Pay;

      

}


entity Method : auditoriaBase, details_description {
  key ID : UUID;
}


entity Flow : auditoriaBase, details_description {
  key ID : UUID;
}

entity Money : auditoriaBase, details_description {
  key ID : UUID;

}

entity Entity : auditoriaBase, details_description {
  key ID : UUID;

}

entity Category : auditoriaBase, details_description {
  key ID : UUID;
}

entity history : auditoriaBase {
  key ID    : UUID;
      value : Decimal(8, 4);
      money : Association to Money;
}
