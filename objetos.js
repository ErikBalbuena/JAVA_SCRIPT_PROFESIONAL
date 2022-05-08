//En Java Script todo es un objeto a menos que sea 
//un primitivo

//Usualmente se declaran con const

//DECLARACIÓN DE OBJETO DE FORMA LITERAL

const obj01 = {prop01:"uno", prop02:"dos", prop03: 3};

//ES POSIBLE DECLARAR METODOS EN UN OBJETO DE FORMA LITERAL
//UN METODO ES UNA PROPIEDAD QUE CONTIENE UNA FUNCIÓN ANÓNIMA O NO ANÓNIMA O ARROW FUNCTION

const obj02 =  {prop01:"uno", prop02:"dos", prop03: 3, metodo01: function(){
    console.log("Método 01");
}, metodo02: function met02(){ console.log("Método 02")},
metodo03: () => {console.log("Método 03")}};

obj02.metodo01;//Esto es el metodo como función, no muestra el mensaje
obj02.metodo01();//Esta es la ejecución del método, muestra el mensaje 
obj02.metodo02();//Esta es la ejecución del método, muestra el mensaje 
obj02.metodo03();//Esta es la ejecución del método, muestra el mensaje 

//ES POSIBLE DECLARAR UN OBJETO VACÍO E IR AGREGANDO PROPIEDADES

const obj03 = {};

obj03.prop01 = "propiedad 01";
console.log(obj03);

obj03.prop02 = "propiedad 02";
console.log(obj03);

//LOS VALORES DE LAS PROPIEDADES TAMBIÉN PUEDEN MODIFICARSE

obj03.prop01 = "propiedad uno";
console.log(obj03);

//LOS OBJETOS SON MUTABLES
//LOS OBJETOS SE ALMACENAN POR REFERENCIA NO POR VALOR

//esta declaración NO CREA UNA COPIA del objeto
//por lo que cambian ambos obj03 y obj04
//ambos tienen la misma referencia
const obj04 = obj03;

obj04.prop02 = "propiedad dos";
console.log("obj04",obj04);
console.log("obj03",obj04);

//ESTA DECLARACIÓN NO SE PUEDE:  const obj05 = new obj03();




