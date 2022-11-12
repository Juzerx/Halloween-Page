let questions = [
  //preguntas
  {
    id: 1,
    question: "¿Cuando se celebra halloween?",
    answer: "El 31 de octubre",
    options: [
      "El 1 de noviembre",
      "El 21 de octubre",
      "El 31 de octubre",
      "Nunca"
    ]
  },
  {
    id: 2,
    question: "¿Qué se hace en halloween?",
    answer: "Pedir dulces y disfrazarse",
    options: [
      "Disfrazarse y ya",
      "Preparar comida inglesa",
      "Robar bancos",
      "Pedir dulces y disfrazarse"
    ]
  },
  {
    id: 3,
    question: "¿Qué es disfrazarse?",
    answer: "Vestir de un personaje o cosa",
    options: [
      "Vender limonada",
      "Enviar mails desesperados a paulina(monitora)",
      "Vestir de un personaje o cosa",
      "Comprar vestidos caros"
    ]
  },
  {
    id: 4,
    question: "¿Como se pide un dulce en halloween?",
    answer: "¿Truco o trato?",
    options: [
      "Extorcionando a las personas",
      "Ofreciendoles una oportunidad unica con los NFT",
      "Amenazandolos con dejar su casa llena de papel de higienico",
      "¿Truco o trato?"
    ]
  },
  {
    id: 5,
    question: "¿Quién es Dracula?",
    answer: "Un vampiro",
    options: [
      "Un inversor de trading",
      "Un zombie",
      "Un vampiro",
      "Ninguno de estos"
    ]
  },
  {
    id: 6,
    question: "¿Cómo se le llama a el personaje de terror de viernes 13?",
    answer: "Jason",
    options: [
      "Jason",
      "Pedro el destripador de personas",
      "Dross",
      "Mario"
    ]
  },
  {
    id: 7,
    question: "¿Cuál es la razón por la que hice esto?",
    answer: "Para el proyecto final",
    options: [
      "Para el proyecto final",
      "Para molestar con preguntas molestas",
      "Porque si ;>",
      "Porque no tuve de otra"
    ]
  },
  {
    id: 8,
    question: "¿Qué NO se debe hacer en halloween?",
    answer: "Compartir regalos de navidad",
    options: [
      "Ver los episodios especiales de holloween",
      "Disfrazarse",
      "Compartir regalos de navidad",
      "Asustar gente"
    ]
  },
  {
    id: 9,
    question: "¿Comerémos muchos dulces?",
    answer: "No",
    options: [
      "No",
      "No",
      "No",
      "No"
    ]
  },
  {
    id: 10,
    question: "¿Por qué no podemos comer muchos dulces?",
    answer: "Porque es malo para la salud",
    options: [
      "Porque es malo para la salud",
      "Porque si :>",
      "Porque vendrá un inversor de crypto monedas",
      "Porque vendrá un espiritu maligno"

    ]
  },
];
//sistema para contar las preguntas y seleccionarlas
let question_count = 0;
let points = 0;


window.onload = function () {
  show(question_count);
};
//mostrar las preguntas
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `<h2 id="a">Pregunta ${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
  toggleActive();
}
// seleccion de preguntas
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}

let button_count = 0;
//siguiente pregunta y validador de respuestas


function next() {
  button_count++;
  if (button_count == 1) {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    activep = document.getElementsByClassName("active");
    if (user_answer == questions[question_count].answer) {
      activep[0].style.backgroundColor = "greenyellow";
      points += 10;
      sessionStorage.setItem("points", points);

    } else {
      activep[0].style.backgroundColor = "red";
      points -= 5;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  }

  if (button_count == 2) {
    if (question_count == questions.length - 1) {
      location.href = "final.html";
    }
    console.log(question_count);
    question_count++;
    show(question_count);
    button_count = 0;
  }
}