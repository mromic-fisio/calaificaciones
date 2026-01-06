const nombre = document.getElementById("name")


const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
var resultado;
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
   
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    
    
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        procesar('matricula', nombre.value);
        parrafo.innerHTML = 'ok';
    }
})

  var _5fv2_alumnos= [{"id":"1","matricula":"2021500271","nombre":"BAZAN BLANCO ANDREA","ex1":"7","ex2":"5.3","ex3":"5.3"},{"id":"2","matricula":"2020500001","nombre":"BENUMEA HERNANDEZ VALENTINA","ex1":"6.45","ex2":"4.2","ex3":"7.3"},{"id":"3","matricula":"2021500294","nombre":"BRUNO ROJAS ANGEL GABRIEL","ex1":"4.82","ex2":"4.2","ex3":"7.4"},{"id":"4","matricula":"2020500900","nombre":"CABRERA ESCOBAR MARIA FERNANDA","ex1":"4.82","ex2":"5.8","ex3":"7.8"},{"id":"5","matricula":"2020500137","nombre":"CASTAÑEDA GUTIERREZ ABI JOCABET","ex1":"5.82","ex2":"4.7","ex3":"6.3"},{"id":"6","matricula":"2021500360","nombre":"CORTES MARTINEZ JOSELIN ISELA","ex1":"5.55","ex2":"4.7","ex3":"7.4"},{"id":"7","matricula":"2020500864","nombre":"ESPINOSA RAMIREZ MELISSA","ex1":"7.59","ex2":"6.8","ex3":"9.9"},{"id":"8","matricula":"2021500511","nombre":"GARCIA RASCON LESLY IRAN","ex1":"3.55","ex2":"3.7","ex3":"4.7"},{"id":"9","matricula":"2021500558","nombre":"HERNANDEZ MATAMOROS ALONDRA KAMIL","ex1":"4.82","ex2":"5.3","ex3":"5.3"},{"id":"10","matricula":"2021500637","nombre":"MAYA GARCIA CARLOS ALFREDO","ex1":"np","ex2":"np","ex3":"np"},{"id":"11","matricula":"2020500366","nombre":"MELENDEZ MORALES ISIS INES","ex1":"4.82","ex2":"4.7","ex3":"6.8"},{"id":"12","matricula":"2021500664","nombre":"MORALES LOPEZ AYARI","ex1":"6.45","ex2":"5.3","ex3":"7.9"},{"id":"13","matricula":"2021500740","nombre":"NORIA VELARDE IVONNE","ex1":"4","ex2":"5.3","ex3":"4.7"},{"id":"14","matricula":"2021500752","nombre":"ORTIZ URBANO LUIS EDUARDO","ex1":"4.55","ex2":"4.2","ex3":"5.8"},{"id":"15","matricula":"2021500016","nombre":"PAREDES MENDOZA ANGEL GABRIEL","ex1":"4.55","ex2":"7.9","ex3":"7.3"},{"id":"16","matricula":"2019500493","nombre":"PUENTES AMADOR MIGUEL ANGEL","ex1":"4.55","ex2":"3.7","ex3":"3.7"},{"id":"17","matricula":"2021500869","nombre":"RAMOS CARDOSO OSCAR ANDRES","ex1":"5.18","ex2":"5.3","ex3":"9.4"},{"id":"18","matricula":"2020500538","nombre":"REYES CERVANTES DANIELA","ex1":"4.18","ex2":"3.2","ex3":"5.3"},{"id":"19","matricula":"2021500900","nombre":"REYNA COAHUTLE LEILANI AZEZU","ex1":"5.18","ex2":"6.3","ex3":"6.3"},{"id":"20","matricula":"2020500565","nombre":"RIVERA NAJERA BRAULIO ALBERTO","ex1":"5.82","ex2":"5.3","ex3":"5.8"},{"id":"21","matricula":"2020500519","nombre":"RUBIO BAUTISTA ESTEFANIA","ex1":"7.45","ex2":"6.8","ex3":"9.4"},{"id":"22","matricula":"2021500928","nombre":"SANCHEZ CARBAJAL ARZU YAEL","ex1":"5.82","ex2":"6.3","ex3":"3.7"},{"id":"23","matricula":"2021500896","nombre":"SANCHEZ HERNANDEZ ARANZA DONAHI","ex1":"4.82","ex2":"5.8","ex3":"5.3"},{"id":"24","matricula":"2021500902","nombre":"SANTANA REYNA DANIEL","ex1":"5.82","ex2":"5.3","ex3":"6.3"},{"id":"25","matricula":"2021500981","nombre":"VARGAS SALAZAR HAROLD","ex1":"3.55","ex2":"np","ex3":"6.3"},{"id":"26","matricula":"2021500960","nombre":"VERA REYES FERNANDO PATRICIO","ex1":"np","ex2":"4.7","ex3":"7.9"},{"id":"27","matricula":"2021500961","nombre":"ZARCO SOSA STACI","ex1":"np","ex2":"4.7","ex3":"4.7"},{"id":""}];
   
    const _5fm1_alumnos =[
    {"id":"0","nombre":"ANGELES SANCHEZ ANDREA","calificacion":"6","usuario":"2013500008","password":"2013500008"},
    {"id":"1","nombre":"CASTRO LOPEZ ESTEFANIA","calificacion":"6.5","usuario":"2019500839","password":"2019500839"},
    {"id":"2","nombre":"ESPINOZA VARGAS JOSE","calificacion":"5.5","usuario":"2019500270","password":"2019500270"},
    {"id":"3","nombre":"GARCIA TORREBLANCA HECTOR","calificacion":"0","usuario":"2019500921","password":"2019500921"},
    {"id":"4","nombre":"GOMEZ LUNA JOSE","calificacion":"6.5","usuario":"2019500843","password":"2019500843"},
    {"id":"5","nombre":"GONZALEZ CHAVEZ MARIANA","calificacion":"5.5","usuario":"2019500974","password":"2019500974"
    },{"id":"6","nombre":"GONZALEZ FERRA JESUSn","calificacion":"6.5","usuario":"2020500229","password":"2020500229"},
    {"id":"7","nombre":"GONZALEZ GUERRERO PAULINA","calificacion":"8.5","usuario":"2020500201","password":"2020500201"},
    {"id":"8","nombre":"GRANADOS RIVAS BRENDA","calificacion":"6.5","usuario":"2014100690","password":"2014100690"},
    {"id":"9","nombre":"GUZMAN MARTINEZ GUADALUPE","calificacion":"6","usuario":"2020500256","password":"2020500256"},
    {"id":"10","nombre":"HERNANDEZ GARCIA ODRY","calificacion":"6","usuario":"2020500341","password":"2020500341"},
    {"id":"11","nombre":"HERNANDEZ MARTINEZ EDGAR","calificacion":"6.5","usuario":"2020500347","password":"2020500347"},
    {"id":"12","nombre":"HERNANDEZ RODRIGUEZ NELLY","calificacion":"6","usuario":"2020500286","password":"2020500286"},
    {"id":"13","nombre":"HERRERA PERALTA IVETTE\r\n","calificacion":"0","usuario":"2020500718","password":"2020500718"},
    {"id":"14","nombre":"JUAN CHAVEZ MONSERRAT\r\n","calificacion":"8","usuario":"2020500305","password":"2020500305"},
    {"id":"15","nombre":"LEON COLIN ANGEL","calificacion":"6","usuario":"2015100784","password":"2015100784"},
    {"id":"16","nombre":"LOPEZ FLORES PAMELA\r\n","calificacion":"6","usuario":"2020500310","password":"2020500310"},
    {"id":"17","nombre":"LOPEZ JUAREZ LIZBETH\r\n","calificacion":"6","usuario":"2015110692","password":"2015110692"},
    {"id":"18","nombre":"MARTINEZ AGUSTIN PAULINA\r\n","calificacion":"6","usuario":"2019500688","password":"2019500688"},
    {"id":"19","nombre":"MEDINA MARTINEZ AUGUSTO\r\n","calificacion":"5.5","usuario":"2020500396","password":"2020500396"},
    {"id":"20","nombre":"MONTES DE OCA","calificacion":"6.5","usuario":"2020500374","password":"2020500374"},
    {"id":"21","nombre":"PEREZ HERNANDEZ ANDREA\r\n","calificacion":"6.5","usuario":"2020500484","password":"2020500484"},
    {"id":"22","nombre":"PEREZ SOLIS DIEGO","calificacion":"5.5","usuario":"2020500486","password":"2020500486"},
    {"id":"23","nombre":"PUEBLITA TEQUITLALPA DAVID","calificacion":"6","usuario":"2019500955","password":"2019500955"},
    {"id":"24","nombre":"RAMOS LOPEZ FATIMA","calificacion":"5","usuario":"2020500536","password":"2020500536"},
    {"id":"25","nombre":"RAZO GARCIA JAIR","calificacion":"5.5","usuario":"2020500584","password":"2020500584"},
    {"id":"26","nombre":"REYES RAMIREZ BEATRIZ\r\n","calificacion":"8.5","usuario":"2019500602","password":"2019500602"},
    {"id":"27","nombre":"SALAS GUTIERREZ ANA","calificacion":"6.5","usuario":"2019500590","password":"2019500590"},
    {"id":"28","nombre":"SALCEDO DE LA CRUZ TAMARA","calificacion":"5","usuario":"2019500906","password":"2019500906"},
    {"id":"29","nombre":"SALINAS ALEJANDRE MARIA","calificacion":"6.5","usuario":"2019500929","password":"2019500929"},
    {"id":"30","nombre":"SUAREZ CASTILLO JOSE","calificacion":"5.5","usuario":"2020500512","password":"2020500512"},
    {"id":"31","nombre":"VILLANUEVA SANCHEZ PEDRO ISAAC","calificacion":"6.5","usuario":"2019500855","password":"2019500855"}];
    
Array.prototype.findBy = function (column, value) {
for (var i=0; i<this.length; i++) {
    var object = this[i];
    if (column in object && object[column] === value) {
        return object;
    }
}

}


  
function procesar(matricula, valor){
  console.log(matricula, valor);
 resultado =  _5fv2_alumnos.findBy('matricula', valor);
 promedio =(parseFloat(resultado.ex1)+parseFloat(resultado.ex2)+parseFloat(resultado.ex3))/3;
 promedio =promedio.toPrecision(2)
 alert(` ${resultado.nombre}: \n ex1 =  ${resultado.ex1} \n ex2 = ${resultado.ex2}\n ex3 = ${resultado.ex3}\n promedio = ${promedio}`);
  
}