const modules = [
    {
        id: 1,
        name: 'PRELIMINARES',
        content: [
            {
                id: 1,
                title: 'Antes de empezar el curso',
                type: 'lesson',
                terms: []
            },
            {
                id: 2,
                title: 'Introducción al curso de atención a víctimas de violenca sexual',
                type: 'lesson',
                terms: []
            },
            {
                id: 3,
                title: 'Pretest – Atención Integral a Víctimas de Violencia Sexual',
                type: 'quiz'
            }
        ],
    },
    {
        id: 2,
        name: 'MODULO 1',
        content: [
            {
                id: 1,
                title: 'Atención integral - Claves para la atención a mujeres víctimas de violencia',
                link: "https://www.youtube.com/watch?v=zYrC0R8yQ9I",
                type: 'lesson',
                terms: []
            },
            {
                id: 2,
                title: 'Terminología en violencia sexual',
                terms: [
                    {
                        title: "Violencia Sexual",
                        paraph: "“todo acto sexual, la tentativa de consumar un acto sexual, los comentarios o insinuaciones sexuales no deseados, o las acciones para comercializar o utilizar de cualquier otro modo la sexualidad de una persona”, Es necesario aclarar que no todas las formas en que se manifiesta la violencia sexual son delitos, aunque la mayoría de ellas han sido recogidas por el Código Penal colombiano."
                    },
                    {
                        title: "Violación/asalto sexual",
                        paraph: "“cualquier acto de naturaleza sexual no deseado como besos, caricias, sexo oral o anal, penetración vaginal, que es impuesto a una persona” se entiende por violencia la fuerza, el constreñimiento, la presión física o psíquica-intimidación o amenaza que “el agente despliega sobre la víctima para hacer desaparecer o reducir sus posibilidades de oposición o resistencia a la agresión que ejecuta”."
                    },
                    {
                        title: "Abuso sexual",
                        paraph: "Teniendo en cuenta la Jurisprudencia de la Corte Suprema de Justicia, el delito sexual abusivo tiene que ver con el aprovechamiento, por parte del sujeto activo del delito o agresor, de circunstancias que lo ubican en una situación ventajosa frente a la víctima. Estas circunstancias que le dan ventaja al agresor ante la vulnerabilidad preexistente en la víctima, pueden ser del orden de la “superioridad manifiesta” o las relaciones de autoridad dadas por la edad (adulto agresor, víctima menor de 14 años); poder o autoridad (jefe, maestro, médico, sacerdote, pastor, funcionario público, militar, etc.); incapacidad física o psicológica de la víctima, entre otras. La característica de esta forma de violencia es el aprovechamiento de la condición de ventaja o de la condición de vulnerabilidad de la víctima como mecanismo utilizado por el agresor para cometer el delito sexual.",
                        parph1: "Los actos sexuales o el acceso carnal con una persona menor de 14 años, estos dos delitos están definidos únicamente por la edad de la víctima, dejando establecido que cualquier conducta sexual cometida contra un niño o niña menor de 14 años se constituye en delito."
                    },
                    {
                        title: "Explotación sexual",
                        paraph: "Hace referencia a la violencia sexual en la cual el medio utilizado por el agresor es la cosificación de la víctima, es decir, es convertida en una mercancía y utilizada sexualmente. Se define explotación como “el obtener provecho económico o cualquier otro beneficio para sí o para otra persona” (artículo 3o). Aplicada al contexto de la explotación sexual, esta consiste en el ejercicio de dominio o propiedad sobre el cuerpo de otro ser humano, utilizado para provecho o beneficio."
                    },
                    {
                        title: "Trata de personas con fines de explotación sexual",
                        paraph: "El delito se configura cuando el agresor capta, es decir, atrae a alguien, en este caso, la víctima (por ejemplo, con una oferta, un aviso clasificado, etc.), con la intención de trasladarle o le traslada (dentro o fuera de su ciudad, departamento, país) y, finalmente, la acoge con la finalidad de explotarla sexualmente. Este delito puede tener como víctimas tanto personas adultas como niñas, niños y adolescentes, y el consentimiento de la víctima no constituye un factor que exima de responsabilidad penal al agresor (puesto que ninguna persona puede consentir su propia explotación), ni si la víctima era consciente o no de la finalidad para la cual se la captaba."
                    },
                    {
                        title: "Explotación sexual de niños, niñas y adolescentes: ESCNNA",
                        paraph: "“La explotación sexual consiste en el abuso sexual cometido contra una persona menor de 18 años de edad, en el que a la víctima o a un tercero se le ofrece pagar o se le paga en dinero o en especie. La víctima es tratada como mercancía u objeto, siendo vendida y comprada por parte de adultos(as), es lo que reproduce una forma actual de esclavitud”. Algunas formas en las que se manifiesta esta explotación son: la pornografía, la utilización de niñas, niños y adolescentes en la prostitución, el matrimonio servil, la explotación sexual de niños, niñas y adolescentes por parte de actores armados y la explotación sexual asociada al contexto del turismo."
                    },
                    {
                        title: "Violencia sexual en el contexto del conflicto armado",
                        paraph: "A la luz del Código Penal colombiano (Ley 599 de 2000) y la Ley 1448 de 2011, en concordancia con los tipos establecidos por el Estatuto de Roma de la Corte Penal Internacional, se considera que en el contexto del conflicto armado colombiano pueden describirse, entre otros posibles, los siguientes tipos de violencia sexual."
                    },
                    {
                        title: "Acceso carnal violento/ acto sexual violento con persona protegida",
                        paraph: "quien en el contexto del conflicto armado (incluyendo la situación de desplazamiento) cometa acceso carnal violento o acto sexual violento cuando la víctima es integrante de la población civil o no participa en hostilidades, hace parte de los civiles en poder de la parte adversa o es combatiente, pero se encuentra herida, enferma o náufraga o puesta fuera de combate. También si la víctima hace parte del personal sanitario o religioso, de los periodistas en misión o de los combatientes que hayan depuesto las armas por captura, rendición u otra causa análoga. Está especificado en el art. 138 del Código Penal colombiano."
                    },
                    {
                        title: "Actos sexuales violentos con persona protegida",
                        paraph: "“con ocasión y en desarrollo de conflicto armado, realice acto sexual diverso al acceso carnal, por medio de violencia en persona protegida”. Las personas protegidas han sido especificadas como aquellas que pertenecen a los siguientes grupos humanos: los integrantes de la población civil; quienes no participan en las hostilidades y los civiles en poder de la parte adversa; combatientes que se encuentran heridos, enfermos, náufragos, fuera de combate, o que hayan depuesto las armas por captura, rendición o causas análogas; personal sanitario o religioso; periodistas en misión o corresponsales de guerra acreditados; quienes fueron considerados apátridas o refugiados al principio de las hostilidades."
                    },
                    {
                        title: "Esclavitud sexual/prostitución forzada",
                        paraph: "puede configurarse en el marco del Derecho Internacional Humanitario, como un crimen de lesa humanidad (es decir, el que se cometa como parte de un ataque generalizado o sistemático contra una población civil y con conocimiento de ese ataque) o como un crimen de guerra (es decir, las violaciones graves de las leyes y usos aplicables en los conflictos armados internacionales o en los conflictos armados no internacionales)."
                    },
                    {
                        title: "Embarazo forzado",
                        paraph: "el embarazo forzado puede configurarse en el marco del Derecho Internacional Humanitario como un crimen de lesa humanidad o como un crimen de guerra. Por embarazo forzado se entiende el confinamiento ilícito de una mujer a la que se ha dejado embarazada por la fuerza, con la intención de modificar la composición étnica de una población o de cometer otras violaciones graves del Derecho Internacional Humanitario.",
                        parph1: "El embarazo forzado guarda una estrecha relación con el delito de genocidio, puesto que se puede cometer este delito con el propósito de destruir total o parcialmente un grupo nacional, étnico, racial, religioso o político, por razón de su pertenencia al mismo."
                    },
                    {
                        title: "Tortura en persona protegida",
                        paraph: "“el que, con ocasión y en desarrollo de conflicto armado, inflija a una persona dolores o sufrimientos, físicos o síquicos, con el fin de obtener de ella o de un tercero información o confesión, de castigarla por un acto por ella cometido o que se sospeche que ha cometido, o de intimidarla o coaccionarla por cualquier razón que comporte algún tipo de discriminación”. Cuando tales dolores o sufrimientos físicos o psíquicos se producen a través de actos de violencia sexual, se estará ante un caso de tortura sexual."
                    },
                    {
                        title: "Otras formas de violencia sexual descritas en el conflicto armado colombiano",
                        paraph: "Tales como regulación de la vida social, servicios domésticos forzados, esterilización forzada, y aborto forzado. Por regulación de la vida social se considera el acto o conjunto de actos por los cuales, y mediante el uso de la fuerza o la amenaza de su uso se controla la sexualidad y la regula la vida afectiva. Por aborto forzado se entiende todo acto que tiene como finalidad la interrupción inducida de un embarazo en contra de la voluntad de la mujer embarazada. La esterilización forzada se entiende como la acción de planificación reproductiva definitiva producto de la obligación no consentida de la persona. Por servicios domésticos forzados se entiende el conjunto de acciones mediante el cual generalmente un grupo que detenta la fuerza obliga a un grupo de personas o a una persona a realizar para ellos labores domésticas que pueden trascender incluso a actos sexuales."
                    }
                ],
                type: 'lesson'
            },
            {
                id: 3,
                title: 'Violencia sexual – Epidemiología',
                link: "https://www.youtube.com/watch?v=z0t3tJpkfeM",
                type: 'lesson',
                terms: []
            },
            {
                id: 4,
                title: 'Rutas de atención – Minsalud',
                link: "https://www.youtube.com/watch?v=QqUiaRmx794",
                type: 'lesson',
                terms: []
            },
        ]
    },
    {
        id: 3,
        name: 'MODULO 2',
        content: [
            {
                id: 5,
                title: 'Protocolo - Paso 1',
                link: "https://www.youtube.com/watch?v=WNVMZ5sfNz0",
                type: 'lesson',
                terms: []
            },
            {
                id: 6,
                title: 'Protocolo - Paso 2',
                link: "https://www.youtube.com/watch?v=SC7sQYhujeg",
                type: 'lesson',
                terms: []
            },
            {
                id: 7,
                title: 'Protocolo - Paso 3',
                link: "https://www.youtube.com/watch?v=Pp87jIX8q5M",
                type: 'lesson',
                terms: []
            },
            {
                id: 21,
                title: 'Protocolo - Paso 4',
                link: "https://www.youtube.com/watch?v=6iN0vSy0VM0",
                type: 'lesson',
                terms: []
            },
            {
                id: 8,
                title: 'Protocolo - Paso 4 - Segunda Parte',
                link: "https://www.youtube.com/watch?v=E6RuVzLfon4",
                type: 'lesson',
                terms: []
            },
            {
                id: 9,
                title: 'Protocolo - Paso 5',
                link: "https://www.youtube.com/watch?v=x3NoSc7CjDM",
                type: 'lesson',
                terms: []
            },
            {
                id: 10,
                title: 'Tomas de muestras forenses',
                type: 'lesson',
                terms: []
            },
        ]
    },
    {
        id: 4,
        name: 'MODULO 3',
        content: [
            {
                id: 11,
                title: 'Protocolo - Paso 6',
                link: "https://www.youtube.com/watch?v=kgDonZ0bbow",
                type: 'lesson',
                terms: []
            },
            {
                id: 12,
                title: 'Protocolo - Paso 7',
                link: "https://www.youtube.com/watch?v=mnCYpBF9mKc",
                type: 'lesson',
                terms: []
            },
            {
                id: 13,
                title: 'Protocolo - Paso 8',
                link: "https://www.youtube.com/watch?v=S1HqLu1rHh0",
                type: 'lesson',
                terms: []
            },
            {
                id: 14,
                title: 'Protocolo - Paso 9',
                link: "https://www.youtube.com/watch?v=yLLhlBKAvrU",
                type: 'lesson',
                terms: []
            },
            {
                id: 15,
                title: 'Protocolo - Paso 10',
                link: "https://www.youtube.com/watch?v=uQsxjtFdiwk",
                type: 'lesson',
                terms: []
            },
        ]
    },
    {
        id: 5,
        name: 'MODULO 4',
        content: [
            {
                id: 16,
                title: 'Protocolo - Paso 11',
                link: "https://www.youtube.com/watch?v=I6UK60Cw64M",
                type: 'lesson',
                terms: []
            },
            {
                id: 17,
                title: 'Protocolo - Paso 12',
                link: "https://www.youtube.com/watch?v=tuWEMsBH8Sw",
                type: 'lesson',
                terms: []
            },
            {
                id: 18,
                title: 'Protocolo - Paso 13',
                link: "https://www.youtube.com/watch?v=-kMc2ewjk2o",
                type: 'lesson',
                terms: []
            },
            {
                id: 19,
                title: 'Protocolo - Paso 14',
                link: "https://www.youtube.com/watch?v=uxOLXFbHLr4",
                type: 'lesson',
                terms: []
            },
            {
                id: 20,
                title: 'Protocolo - Paso 15',
                link: "https://www.youtube.com/watch?v=IB0GHY2jkdk",
                type: 'lesson',
                terms: []
            },
        ]
    },
    {
        id: 6,
        name: 'MODULO 5',
        content: [
            {
                id: 16,
                title: 'Evaluación Curso Atención Integral a Víctimas de Violencia Sexual',
                type: 'lesson',
                terms: []
            },
            {
                id: 17,
                title: 'Violencia Sexual Test',
                type: 'quiz',
                terms: []
            },
            {
                id: 18,
                title: 'Certificado del Curso',
                type: 'lesson',
                terms: []
            },
        ]
    },
    {
        id: 7,
        name: 'VIDEO CONFERENCIAS',
        content: [
            {
                id: 1,
                title: 'Sala de Video conferencia 1',
                type: 'lesson',
                url: 'https://meet.google.com/xir-ztqi-kqi',
                terms: [],
            },
            {
                id: 2,
                title: 'Sala de Video conferencia 2',
                type: 'lesson',
                url: 'https://meet.google.com/grj-ntxt-sus',
                terms: [],
            },
            {
                id: 3,
                title: 'Sala de Video conferencia 3',
                type: 'lesson',
                url: 'https://meet.google.com/can-wniw-rox',
                terms: []
            },
            {
                id: 4,
                title: 'Sala de Video conferencia 4',
                type: 'lesson',
                url: 'https://meet.google.com/mst-borz-npe',
                terms: []
            },
        ]
    },
    {
        id: 8,
        name: 'MIS NOTAS',
        content: [
            {
                id: 1,
                title: 'Resultados de examen de Atención Integral a Víctimas de Violencia Sexual',
                type: 'lesson',
                terms: [{ title: "Nota del examen: 18", parah: "Nota aprobatoria" },],
            },
            {
                id: 2,
                title: 'Resultados de examen Final de Atención Integral a Víctimas de Violencia Sexual',
                type: 'lesson',
                terms: [{ title: "Nota del examen: 20", parah: "Nota aprobatoria" },],
            },
        ]
    }
];

export default modules;