const form = document.getElementById("form");
const matriculaInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const parrafo = document.getElementById("warnings");
const resultadoContainer = document.getElementById("resultado-container");
const tablaResultados = document.getElementById("tabla-resultados");
const btnVolver = document.getElementById("btn-volver");

// Datos de alumnos consolidados (simulando JSON del Excel)
const alumnosData = [
  {
    "Matricula": 2024500791,
    "Alumno": "ALDANA TREJO YARELI ATZIN",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.5,
    "Promedio Examenes Unidad I": 5.078947368421053,
    "Promedio Examenes Unidad II  y IV ": 9.1,
    "Balance Energético Examen": 8.214,
    "Balance  Hidroosmótico Examen": 8.387096774193548,
    "Promedio de Examenes": 7.695011035653651,
    "Calificación Final": 7.686507724957555,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500486,
    "Alumno": "ALVARADO HERNANDEZ AXEL",
    "Promedio reportes": 7,
    "Promedio Seminarios": 7.166666666666667,
    "Promedio Examenes Unidad I": 2.731578947368421,
    "Promedio Examenes Unidad II  y IV ": 7.7,
    "Balance Energético Examen": 9.643,
    "Balance  Hidroosmótico Examen": 9.67741935483871,
    "Promedio de Examenes": 7.437999575551784,
    "Calificación Final": 7.3315997028862485,
    "Calificación SAES": 7
  },
  {
    "Matricula": 2024500071,
    "Alumno": " ALVAREZ MENDOZA RICARDO",
    "Promedio reportes": 8.333333333333334,
    "Promedio Seminarios": 8.666666666666666,
    "Promedio Examenes Unidad I": 9.68421052631579,
    "Promedio Examenes Unidad II  y IV ": 9.2,
    "Balance Energético Examen": 9.286,
    "Balance  Hidroosmótico Examen": 9.35483870967742,
    "Promedio de Examenes": 9.381262308998302,
    "Calificación Final": 9.11688361629881,
    "Calificación SAES": 9
  },
  {
    "Matricula": 2024500717,
    "Alumno": " BAUTISTA SANCHEZ KAREN JAQUELINE",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.833333333333333,
    "Promedio Examenes Unidad I": 6.636842105263158,
    "Promedio Examenes Unidad II  y IV ": 9.1,
    "Balance Energético Examen": 6.786,
    "Balance  Hidroosmótico Examen": 7.096774193548387,
    "Promedio de Examenes": 7.404904074702887,
    "Calificación Final": 7.53343285229202,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2023500059,
    "Alumno": " CASTRO LOPEZ CRISTIAN",
    "Promedio reportes": 7.333333333333333,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 2.731578947368421,
    "Promedio Examenes Unidad II  y IV ": 8.8,
    "Balance Energético Examen": 6.429,
    "Balance  Hidroosmótico Examen": 6.774193548387097,
    "Promedio de Examenes": 6.1836931239388795,
    "Calificación Final": 6.578585186757215,
    "Calificación SAES": 7
  },
  {
    "Matricula": 2024500571,
    "Alumno": " DIEGUES FLORES SEBASTIAN",
    "Promedio reportes": 7,
    "Promedio Seminarios": 7.333333333333333,
    "Promedio Examenes Unidad I": 1.6115789473684208,
    "Promedio Examenes Unidad II  y IV ": 10,
    "Balance Energético Examen": 9.643,
    "Balance  Hidroosmótico Examen": 9.67741935483871,
    "Promedio de Examenes": 7.7329995755517835,
    "Calificación Final": 7.563099702886248,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500706,
    "Alumno": "GASPAR ORTEGA JESUS ALEJANDRO",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 3.6789473684210523,
    "Promedio Examenes Unidad II  y IV ": 9.2,
    "Balance Energético Examen": 8.929,
    "Balance  Hidroosmótico Examen": 9.03225806451613,
    "Promedio de Examenes": 7.7100513582342955,
    "Calificación Final": 7.722035950764006,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2023500638,
    "Alumno": " GUERRA VELASCO DIANA PAULINA",
    "Promedio reportes": 7.666666666666667,
    "Promedio Seminarios": 8,
    "Promedio Examenes Unidad I": 6.495263157894737,
    "Promedio Examenes Unidad II  y IV ": 8.7,
    "Balance Energético Examen": 9.643,
    "Balance  Hidroosmótico Examen": 9.67741935483871,
    "Promedio de Examenes": 8.628920628183362,
    "Calificación Final": 8.390244439728352,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500762,
    "Alumno": " MARQUEZ MUÑOZ YAGO LEONARDO",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 4.694736842105263,
    "Promedio Examenes Unidad II  y IV ": 9,
    "Balance Energético Examen": 10,
    "Balance  Hidroosmótico Examen": 10,
    "Promedio de Examenes": 8.423684210526316,
    "Calificación Final": 8.221578947368421,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500322,
    "Alumno": "MORALES MIGUEL ANA MARIA",
    "Promedio reportes": 6.666666666666667,
    "Promedio Seminarios": 7.333333333333333,
    "Promedio Examenes Unidad I": 6.794736842105262,
    "Promedio Examenes Unidad II  y IV ": 9.2,
    "Balance Energético Examen": 9.643,
    "Balance  Hidroosmótico Examen": 9.67741935483871,
    "Promedio de Examenes": 8.828789049235994,
    "Calificación Final": 8.280152334465194,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500688,
    "Alumno": " ORTEGA FIERROS SABRINA",
    "Promedio reportes": 7,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 6.584736842105262,
    "Promedio Examenes Unidad II  y IV ": 9.7,
    "Balance Energético Examen": 10,
    "Balance  Hidroosmótico Examen": 10,
    "Promedio de Examenes": 9.071184210526315,
    "Calificación Final": 8.549828947368422,
    "Calificación SAES": 9
  },
  {
    "Matricula": 2020500441,
    "Alumno": " ORTIZ NOLASCO ZAIRA LIZETH",
    "Promedio reportes": 7,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 7.878947368421052,
    "Promedio Examenes Unidad II  y IV ": 9,
    "Balance Energético Examen": 10,
    "Balance  Hidroosmótico Examen": 10,
    "Promedio de Examenes": 9.219736842105263,
    "Calificación Final": 8.653815789473683,
    "Calificación SAES": 9
  },
  {
    "Matricula": 2024500514,
    "Alumno": " RESILLAS CASILLAS OSMANI FERNANDO",
    "Promedio reportes": 7,
    "Promedio Seminarios": 6.833333333333333,
    "Promedio Examenes Unidad I": 2.0852631578947367,
    "Promedio Examenes Unidad II  y IV ": 8.3,
    "Balance Energético Examen": 8.929,
    "Balance  Hidroosmótico Examen": 9.35483870967742,
    "Promedio de Examenes": 7.167275466893039,
    "Calificación Final": 7.0920928268251275,
    "Calificación SAES": 7
  },
  {
    "Matricula": 2022501208,
    "Alumno": "RICO CESAR MONICA PAOLA",
    "Promedio reportes": 7.666666666666667,
    "Promedio Seminarios": 7.833333333333333,
    "Promedio Examenes Unidad I": 5.305263157894736,
    "Promedio Examenes Unidad II  y IV ": 9.8,
    "Balance Energético Examen": 9.286,
    "Balance  Hidroosmótico Examen": 9.03225806451613,
    "Promedio de Examenes": 8.355880305602716,
    "Calificación Final": 8.1741162139219,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500358,
    "Alumno": "ROJAS GONZALEZ KAREN SARAI",
    "Promedio reportes": 7.333333333333333,
    "Promedio Seminarios": 7.166666666666667,
    "Promedio Examenes Unidad I": 4.782631578947369,
    "Promedio Examenes Unidad II  y IV ": 9.7,
    "Balance Energético Examen": 10,
    "Balance  Hidroosmótico Examen": 10,
    "Promedio de Examenes": 8.620657894736842,
    "Calificación Final": 8.20946052631579,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500845,
    "Alumno": " ROMERO HERNANDEZ ALINE XIMENA",
    "Promedio reportes": 7,
    "Promedio Seminarios": 7.5,
    "Promedio Examenes Unidad I": 8.526842105263157,
    "Promedio Examenes Unidad II  y IV ": 9.8,
    "Balance Energético Examen": 10,
    "Balance  Hidroosmótico Examen": 8.709677419354838,
    "Promedio de Examenes": 9.259129881154498,
    "Calificación Final": 8.65639091680815,
    "Calificación SAES": 9
  },
  {
    "Matricula": 2024500559,
    "Alumno": " ROMERO ORTEGA DIANA LUCIA",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 3.2052631578947364,
    "Promedio Examenes Unidad II  y IV ": 9,
    "Balance Energético Examen": 8.571,
    "Balance  Hidroosmótico Examen": 7.419354838709677,
    "Promedio de Examenes": 7.048904499151103,
    "Calificación Final": 7.259233149405771,
    "Calificación SAES": 7
  },
  {
    "Matricula": 2023500858,
    "Alumno": " ROMERO PEREZ RICARDO",
    "Promedio reportes": 8.333333333333334,
    "Promedio Seminarios": 9,
    "Promedio Examenes Unidad I": 4.447368421052632,
    "Promedio Examenes Unidad II  y IV ": 9.1,
    "Balance Energético Examen": 7.143000000000001,
    "Balance  Hidroosmótico Examen": 9.03225806451613,
    "Promedio de Examenes": 7.43065662139219,
    "Calificación Final": 7.801459634974532,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500846,
    "Alumno": " SANCHEZ GARCIA ABRAHAM ALDAIR",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.333333333333333,
    "Promedio Examenes Unidad I": 2.189473684210526,
    "Promedio Examenes Unidad II  y IV ": 8.3,
    "Balance Energético Examen": 7.856999999999999,
    "Balance  Hidroosmótico Examen": 8.064516129032258,
    "Promedio de Examenes": 6.6027474533106965,
    "Calificación Final": 6.896923217317487,
    "Calificación SAES": 7
  },
  {
    "Matricula": 2023500435,
    "Alumno": "SEGURA FLORES KAREN VALENTINA",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.5,
    "Promedio Examenes Unidad I": 6.478947368421052,
    "Promedio Examenes Unidad II  y IV ": 8.8,
    "Balance Energético Examen": 8.929,
    "Balance  Hidroosmótico Examen": 9.67741935483871,
    "Promedio de Examenes": 8.471341680814941,
    "Calificación Final": 8.229939176570458,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2022650639,
    "Alumno": "VARELA MORA CASANDRA AURORA",
    "Promedio reportes": 7,
    "Promedio Seminarios": 7.666666666666667,
    "Promedio Examenes Unidad I": 2.889473684210526,
    "Promedio Examenes Unidad II  y IV ": 9.8,
    "Balance Energético Examen": 9.643,
    "Balance  Hidroosmótico Examen": 7.741935483870968,
    "Promedio de Examenes": 7.518602292020374,
    "Calificación Final": 7.463021604414261,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2023500133,
    "Alumno": "VIDAL ZARATE ARANZA MARIEL",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.5,
    "Promedio Examenes Unidad I": 6.952631578947368,
    "Promedio Examenes Unidad II  y IV ": 8.9,
    "Balance Energético Examen": 7.5,
    "Balance  Hidroosmótico Examen": 9.67741935483871,
    "Promedio de Examenes": 8.25751273344652,
    "Calificación Final": 8.080258913412564,
    "Calificación SAES": 8
  },
  {
    "Matricula": 2024500135,
    "Alumno": "VILLANUEVA TINAJERO ESTIVALYZ ODETTE",
    "Promedio reportes": 7.833333333333333,
    "Promedio Seminarios": 7.5,
    "Promedio Examenes Unidad I": 7.031578947368421,
    "Promedio Examenes Unidad II  y IV ": 9.4,
    "Balance Energético Examen": 9.643,
    "Balance  Hidroosmótico Examen": 10,
    "Promedio de Examenes": 9.018644736842106,
    "Calificación Final": 8.613051315789473,
    "Calificación SAES": 9
  },
  {
    "Matricula": 2024500167,
    "Alumno": "VILLASEÑOR ARVIZU ISRAEL MISAEL",
    "Promedio reportes": 8,
    "Promedio Seminarios": 8.666666666666666,
    "Promedio Examenes Unidad I": 8.334736842105263,
    "Promedio Examenes Unidad II  y IV ": 10,
    "Balance Energético Examen": 10,
    "Balance  Hidroosmótico Examen": 7,
    "Promedio de Examenes": 8.833684210526316,
    "Calificación Final": 8.68357894736842,
    "Calificación SAES": 9
  }
];

Array.prototype.findBy = function (column, value) {
    for (let i = 0; i < this.length; i++) {
        let object = this[i];
        if (column in object && String(object[column]) === String(value)) {
            return object;
        }
    }
    return null;
};

form.addEventListener("submit", e => {
    e.preventDefault();
    let val = matriculaInput.value.trim();
    let pass = passwordInput.value.trim();
    parrafo.innerHTML = "";

    if (val.length < 4) {
        parrafo.innerHTML = "La matrícula no es válida (mínimo 4 caracteres)";
    } else if (val !== pass) {
        parrafo.innerHTML = "Error: La matrícula y contraseña no coinciden.";
    } else {
        procesar('Matricula', val);
    }
});

btnVolver.addEventListener("click", () => {
    resultadoContainer.style.display = "none";
    form.style.display = "block";
    matriculaInput.value = "";
    passwordInput.value = "";
    parrafo.innerHTML = "";
});

function procesar(columna, valor) {
    const resultado = alumnosData.findBy(columna, valor);

    if (resultado) {
        // Generar tabla dinámica
        let thead = "<thead><tr>";
        let tbody = "<tbody><tr>";
        
        for (let key in resultado) {
            thead += `<th>${key}</th>`;
            tbody += `<td>${resultado[key] !== null ? resultado[key] : 'N/A'}</td>`;
        }
        
        thead += "</tr></thead>";
        tbody += "</tr></tbody>";
        
        tablaResultados.innerHTML = thead + tbody;
        
        // Mostrar resultados
        form.style.display = "none";
        resultadoContainer.style.display = "block";
    } else {
        parrafo.innerHTML = "Matrícula no encontrada en la base de datos.";
    }
}