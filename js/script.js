// Espera a que la página web se cargue completamente antes de hacer algo
document.addEventListener('DOMContentLoaded', function() {
    // Encuentra las partes de la página web con las que necesitamos interactuar

    // El área donde se mostrarán los mensajes
    const chatMessages = document.getElementById('chat-messages');

    // El cuadro de entrada donde escribirás tus mensajes
    const userInput = document.getElementById('user-input');

    // El botón que presionas para enviar tus mensajes
    const sendButton = document.getElementById('send-button');

    // Cuando presionas el botón "Enviar", se activa la función sendMessage
    sendButton.addEventListener('click', sendMessage);

    // También puedes presionar la tecla "Enter" en tu teclado para enviar mensajes
    userInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Cuando envías un mensaje, esta función se encarga de procesarlo
    function sendMessage() {
        // Obtiene el mensaje que escribiste y elimina espacios innecesarios
        const userMessage = userInput.value.trim();

        // Si el mensaje está vacío, no hacemos nada
        if (userMessage === '') return;

        // Inicialmente, asumimos que el chatbot no entiende el mensaje
        let botResponse = 'Lo siento, no entiendo.';

        // Buscamos una respuesta en nuestras respuestas predeterminadas
        for (const keyword in responses) {
            // Comparamos si alguna de las palabras clave está en tu mensaje
            if (userMessage.toLowerCase().includes(keyword)) {
                // Si encontramos una coincidencia, actualizamos la respuesta del chatbot
                botResponse = responses[keyword];
                break; // Salimos del bucle si encontramos una coincidencia
            }
        }

        // Agregamos los mensajes al área de chat, uno de tu parte y otro del chatbot
        chatMessages.innerHTML += `<div class="message user-message">${userMessage}</div>`;
        chatMessages.innerHTML += `<div class="message bot-message">${botResponse}</div>`;

        // Limpiamos el cuadro de entrada para que puedas escribir otro mensaje
        userInput.value = '';

        // Desplazamos automáticamente hacia abajo para que veas los mensajes nuevos
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Aquí definimos respuestas predeterminadas para el chatbot
    const responses = {
        'hola': '¡Hola! ¿En qué puedo ayudarte?',
        'adios': 'Hasta luego. ¡Que tengas un buen día!',
        'pregunta': 'Puedes hacer una pregunta y haré lo mejor para responderla.',
        // Puedes agregar más respuestas aquí
    };

    // Cuando la página se carga, automáticamente enfoca el cuadro de entrada
    userInput.focus();
});
