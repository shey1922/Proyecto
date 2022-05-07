const exams = [
    {
        id: 0,
        questions: [
            {
                id: 1,
                question: "¿En caso de violencia sexual, que se le entrega a la victima?.",
                answers: [
                    {
                        id:1,
                        valor: "Kit de emergencia"
                    },
                    {
                        id:2,
                        valor: "Primeros auxilios"
                    },
                    {
                        id:3,
                        valor: "Pastillas para el estrés"
                    }
                ],
                correct: ""
            },
            {
                id: 2,
                question: "¿Cuál es la norma que regula el protocolo para atención a víctimas de violencia sexual?. Señale la opción correcta.",
                answers: [
                    {
                        id:1,
                        valor: "Resolución Nº 3100 de 2019"
                    },
                    {
                        id:2,
                        valor: "Resolución Legislativa Nº 25279 de 1989"
                    },
                    {
                        id:3,
                        valor: "Resolución Legislativa Nº 26583 de 1994"
                    },
                    {
                        id:4,
                        valor: "Ley Nº 30364 del 24 de noviembre de 2015"
                    }
                ],
                correct: ""
            },
            {
                id: 2,
                question: "¿Cuál es la norma que regula el protocolo para atención a víctimas de violencia sexual?. Señale la opción correcta.",
                answers: [
                    {
                        id:1,
                        valor: "Resolución Nº 3100 de 2019"
                    },
                    {
                        id:2,
                        valor: "Resolución Legislativa Nº 25279 de 1989"
                    },
                    {
                        id:3,
                        valor: "Resolución Legislativa Nº 26583 de 1994"
                    },
                    {
                        id:4,
                        valor: "Ley Nº 30364 del 24 de noviembre de 2015"
                    }
                ],
                correct: ""
            },
            {
                id: 3,
                question: "Según las definiciones actuales, abuso sexual es lo mismo que asalto sexual, para la justicia.  Señale V si es verdadero, F si considera que es falso.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: ""
            },
            {
                id: 4,
                question: "Epidemiologicamente, cual considera que es el grupo etareo, mas afectado por el delito de violencia sexual.",
                answers: [
                    {
                        id:1,
                        valor: "11 a 14 años"
                    },
                    {
                        id:2,
                        valor: "5 a 9 años"
                    },
                    {
                        id:3,
                        valor: "14 a 17 años"
                    },
                    {
                        id:4,
                        valor: "20 a 24 años"
                    }
                ],
                correct: ""
            },
            {
                id: 5,
                question: "Es importante determinar desde el inicio de la atención si la paciente fue víctima de delito sexual, con unos límites de tiempo determinados en la ley. Señale el correcto.",
                answers: [
                    {
                        id:1,
                        valor: "12 horas"
                    },
                    {
                        id:2,
                        valor: "24 horas"
                    },
                    {
                        id:3,
                        valor: "72 horas"
                    },
                    {
                        id:4,
                        valor: "48 horas"
                    }
                ],
                correct: ""
            },
            {
                id: 6,
                question: "Como personal de salud nuestro trabajo con el paciente victima de violencia sexual, se centra únicamente en la atención de salud.",
                answers: [
                    {
                        id:1,
                        valor: "Verdadero"
                    },
                    {
                        id:2,
                        valor: "Falso"
                    }
                ],
                correct: ""
            },
            {
                id: 7,
                question: "En el caso de paciente mayor de edad víctima de violencia sexual, no es necesario el consentimiento informado, a no ser que tenga alteraciones cognitivas.",
                answers: [
                    {
                        id:1,
                        valor: "Verdadero"
                    },
                    {
                        id:2,
                        valor: "Falso"
                    }
                ],
                correct: ""
            },
            {
                id: 8,
                question: "En cuanto a la profilaxis post exposición, señale la opción correcta.",
                answers: [
                    {
                        id:1,
                        valor: "Debe ser prescrita por especialista"
                    },
                    {
                        id:2,
                        valor: "Solo se usa en casos puntuales"
                    },
                    {
                        id:3,
                        valor: "Todas las IPS lo deben tener disponible, para entrega inmediata"
                    },
                    {
                        id:4,
                        valor: "Se entrega en el seguimiento a las tres semanas"
                    }
                ],
                correct: ""
            },
            {
                id: 9,
                question: "Para el acceso a la Profilaxis Post Exposición (PEP) para VIH en caso agresión sexual es antes de las 24 horas. Señale el correcto.",
                answers: [
                    {
                        id:1,
                        valor: "Verdadero"
                    },
                    {
                        id:2,
                        valor: "Falso"
                    }
                ],
                correct: ""
            },
            {
                id: 10,
                question: "¿Cuál es el periodo que brindan a las personas con estrés postraumático como secuelade violencia sexual?",
                answers: [
                    {
                        id:1,
                        valor: "5 meses"
                    },
                    {
                        id:2,
                        valor: "10 meses"
                    },
                    {
                        id:3,
                        valor: "6 meses"
                    },
                    {
                        id:4,
                        valor: "12 meses"
                    }
                ],
                correct: ""
            },
        ]
    },
    {
        id: 1,
        questions: [
            {
                id: 1,
                question: "En el caso de pacientes menores de 18 años, solo se requiere el consentimiento por parte de los de estos pacientes, para realizar los procedimientos. Señale V si es verdadero, F si considera que es falso.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Falso"
            },
            {
                id: 2,
                question: "De acuerdo con la Ley 30364, las víctimas de violencia sexual tienen derecho a La promoción, prevención, atención y recuperación integral de la salud física y mental de la víctima, es gratuita en cualquier establecimiento de salud del estado.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Verdadero"
            },
            {
                id: 3,
                question: "Todos los pasos del protocolo de atención a víctimas de violencia sexual son de entera responsabilidad del profesional de la salud que hace la atención de la persona víctima de violencia sexual.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Falso"
            },
            {
                id: 4,
                question: "Las personas que atiendan a las víctimas o a quienes se sospecha han sido violentadas sexualmente tienen que estar capacitadas en el tema. Los equipos deberán cualificarse continuamente para lograr el mayor conocimiento y experiencia que permita una atención óptima.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Verdadero"
            },
            {
                id: 5,
                question: "En cuanto a la atención de estos pacientes señale la opción correcta respecto a su sitio de atención.",
                answers: [
                    {
                        id:1,
                        valor: "La atención siempre se hace en urgencias teniendo en cuenta las excepciones."
                    },
                    {
                        id:2,
                        valor: "La atención se hace en urgencias dependiendo del tiempo desde ocurrido el hecho."
                    },
                    {
                        id:3,
                        valor: "La atención siempre se hace en urgencias teniendo en cuenta las excepciones."
                    },
                    {
                        id:4,
                        valor: "En el caso de tener casos más urgentes en el servicio de urgencias se le da cita para otro día a la paciente."
                    },
                    {
                        id:5,
                        valor: "Solo se atienden en urgencias pacientes si los hechos ocurrieron hace 72 horas."
                    }

                ],
                correct: "La atención siempre se hace en urgencias teniendo en cuenta las excepciones"
            },
            {
                id: 6,
                question: "Siempre el examen genital se debe realizar por parte únicamente del médico/a que realiza el proceso con la víctima. Señale V si es verdadero, F si considera que es falso.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Falso"
            },
            {
                id: 7,
                question: "El encargado debe solicitar consentimiento verbal de la víctima para registrar su información en la Ficha de Registro de Casos, asimismo debe resaltar la confidencialidad.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Verdadero"
            },
            {
                id: 8,
                question: "Durante el proceso de atención de la víctima de violencia sexual, siempre lo más importante en no revictimizar.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Verdadero"
            },
            {
                id: 9,
                question: "Las distintas entidades de atención en el establecimiento de salud deben estar en capacidad de recibir y atender los casos de violencia sexual y deben realizar acciones a su interior que garanticen la atención integral.",
                answers: [
                    {
                        id:1,
                        valor: "Falso"
                    },
                    {
                        id:2,
                        valor: "Verdadero"
                    }
                ],
                correct: "Verdadero"
            },
            {
                id: 10,
                question: "En el caso que la víctima de violencia sexual necesite por su estado mental, proporcionarle primeros auxilios sicológicos, estos se deben suministrar.",
                answers: [
                    {
                        id:1,
                        valor: "Solo si se cuenta por profesionales en sicología al momento de la atención."
                    },
                    {
                        id:2,
                        valor: "Lo más importante siempre es la atención clínica, por lo que los primeros auxilios sicológicos pueden ser proporcionados en otro momento."
                    },
                    {
                        id:3,
                        valor: "Lo más importante siempre es la atención clínica, por lo que los primeros auxilios sicológicos pueden ser proporcionados en otro momento"
                    },
                    {
                        id:4,
                        valor: "Se le debe informar a la paciente que nuestra función esta en tomar muestras y diligenciar únicamente la historia clínica.En el caso de tener casos más urgentes en el servicio de urgencias se le da cita para otro día a la paciente."
                    }
                ],
                correct: "La atención siempre se hace en urgencias teniendo en cuenta las excepciones"
            },
        ]
    },
];

export default exams;