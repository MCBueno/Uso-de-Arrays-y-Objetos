const radiologia = [
    {
        Hora: "11:00",
        Especialista: "Ignacio Schulz",
        Paciente: "Francisca Rojas",
        Rut: "9878782-1",
        Prevision: "FONASA",
    },
    {
        Hora: "11:30",
        Especialista: "Federico Subercaseaux",
        Paciente: "Pamela Estrada",
        Rut: "15345241-3",
        Prevision: "ISAPRE",
    },
    {
        Hora: "15:00",
        Especialista: "Fernando Wurthz",
        Paciente: "Armando Luna",
        Rut: "16445345-9",
        Prevision: "ISAPRE",
    },
    {
        Hora: "15:30",
        Especialista: "Ana Maria Godoy",
        Paciente: "Manuel Godoy",
        Rut: "17666419-0",
        Prevision: "FONASA",
    },
    {
        Hora: "16:00",
        Especialista: "Patricua Suazo",
        Paciente: "Ramon Ulloa",
        Rut: "14989389-K",
        Prevision: "FONASA",
    }
]

const traumatologia = [
    {
        Hora: "8:00",
        Especialista: "Maria Paz Altuzarra",
        Paciente: "Paula Sanchez",
        Rut: "15554774-5",
        Prevision: "FONASA",
    },
    {
        Hora: "10:00",
        Especialista: "Raul Araya",
        Paciente: "Angélica Navas",
        Rut: "15444147-9",
        Prevision: "ISAPRE",
    },
    {
        Hora: "10:30",
        Especialista: "Maria Arriagada",
        Paciente: "Ana Klapp",
        Rut: "17879423-9",
        Prevision: "ISAPRE",
    },
    {
        Hora: "11:00",
        Especialista: "Alejandro Badilla",
        Paciente: "Felipe Mardones",
        Rut: "1547423-6",
        Prevision: "ISAPRE",
    },
    {
        Hora: "11:30",
        Especialista: "Cecilia Bundik",
        Paciente: "Diego Marre",
        Rut: "16554741-K",
        Prevision: "FONASA",
    },
    {
        Hora: "12:00",
        Especialista: "Arturo Cavagnaro",
        Paciente: "Cecilia Mendez",
        Rut: "9747535-8",
        Prevision: "ISAPRE",
    },
    {
        Hora: "12:30",
        Especialista: "Andres Kanacri",
        Paciente: "Marcial Suazo",
        Rut: "11254785-5",
        Prevision: "ISAPRE",
    }
]

const dental = [
    {
        Hora: "8:30",
        Especialista: "Andrea Zuñiga",
        Paciente: "Marcela Retamal",
        Rut: "11123425-6",
        Prevision: "ISAPRE",
    },
    {
        Hora: " 11:00",
        Especialista: "Maria Paz Zañartu",
        Paciente: "Angel Muñoz",
        Rut: "9878789-2",
        Prevision: "ISAPRE",
    },
    {
        Hora: "11:30",
        Especialista: "Scarlett Witting",
        Paciente: "Mario Kast",
        Rut: "7998789-5",
        Prevision: "FONASA",
    },
    {
        Hora: "13:00",
        Especialista: "Francisco Von Teuber",
        Paciente: "Karin Fernandez",
        Rut: "18887662-K",
        Prevision: "FONASA",
    },
    {
        Hora: "13:30",
        Especialista: "Eduardo Viñuela",
        Paciente: "Hugo Sanchez",
        Rut: "17665461-4",
        Prevision: "FONASA",
    },
    {
        Hora: "14:00",
        Especialista: "Raquel Villaseca",
        Paciente: "Ana Sepulveda",
        Rut: "14441281-0",
        Prevision: "ISAPRE",
    }
];



/*--------- PRIMERA Y ÚLTIMA ATENCIÓN ---------*/

document.write(`<p> <b>RADIOLOGÍA</b> - Primera Atención: ${radiologia[0].Paciente} - ${radiologia[0].Prevision} | Última atención: ${radiologia[radiologia.length - 1].Paciente} - ${radiologia[radiologia.length - 1].Prevision} . </p>`)
document.write(`<p> <b>TRAUMATOLOGÍA</b>- Primera Atención: ${traumatologia[0].Paciente} - ${traumatologia[0].Prevision} | Última atención: ${traumatologia[traumatologia.length - 1].Paciente} - ${traumatologia[traumatologia.length - 1].Prevision} . </p>`)
document.write(`<p> <b>DENTAL</b> - Primera Atención: ${dental[0].Paciente} - ${dental[0].Prevision} | Última atención: ${dental[dental.length - 1].Paciente} - ${dental[dental.length - 1].Prevision} . </p>`)



/*--------- VARIABLE DE PARA CREACION DE TABLA ---------*/

var tablaDental = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th>";  /* ESTA ES LA FORMA DE AGREGAR UN ENCABEZADO A LA TABLA */
for (var i = 0; i < dental.length; i++){
    tablaDental += `<tr>
            <td>${dental[i].Hora}</td>
            <td>${dental[i].Especialista}</td> 
            <td>${dental[i].Paciente}</td>
            <td>${dental[i].Rut}</td>
            <td>${dental[i].Prevision}</td>
            </tr>
            `
};

var tablaTraumatologia = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th>";  /* ESTA ES LA FORMA DE AGREGAR UN ENCABEZADO A LA TABLA */
for (var i = 0; i < traumatologia.length; i++){
    tablaTraumatologia += `<tr>
            <td>${traumatologia[i].Hora}</td>
            <td>${traumatologia[i].Especialista}</td>
            <td>${traumatologia[i].Paciente}</td>
            <td>${traumatologia[i].Rut}</td>
            <td>${traumatologia[i].Prevision}</td>
            </tr>
            `
};

var tablaRadiologia = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th>";  /* ESTA ES LA FORMA DE AGREGAR UN ENCABEZADO A LA TABLA */
for (var i = 0; i < radiologia.length; i++){
    tablaRadiologia += `<tr>
            <td>${radiologia[i].Hora}</td>
            <td>${radiologia[i].Especialista}</td>
            <td>${radiologia[i].Paciente}</td>
            <td>${radiologia[i].Rut}</td>
            <td>${radiologia[i].Prevision}</td>
            </tr>
            `
};

/*--------- ORDEN PARA IMPRIMIR LA TABLA EN EL HTML ---------*/

document.getElementById("radiologia-tabla").innerHTML = tablaRadiologia;
document.getElementById("traumatologia-tabla").innerHTML = tablaTraumatologia;
document.getElementById("dental-tabla").innerHTML = tablaDental;