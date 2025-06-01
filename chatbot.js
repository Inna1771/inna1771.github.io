// chatbot.js

// Función para inicializar el chatbot
function initChatbot() {
  // Crear elementos del DOM
  const chatbotWrapper = document.createElement('div');
  chatbotWrapper.id = 'chatbot-wrapper';
  
  const chatWindow = document.createElement('div');
  chatWindow.id = 'chatwindow';
  
  const chatHeader = document.createElement('div');
  chatHeader.className = 'chat-header';
  chatHeader.innerHTML = 'Inna´s Chatbot <span id="closechat" style="cursor: pointer;">×</span>';
  
  const chatMessages = document.createElement('div');
  chatMessages.id = 'chatmessages';
  
  const chatInputContainer = document.createElement('div');
  chatInputContainer.className = 'chat-input-container';
  
  const userInput = document.createElement('input');
  userInput.type = 'text';
  userInput.id = 'userinput';
  userInput.placeholder = 'Your turn...';
  
  const sendButton = document.createElement('button');
  sendButton.id = 'sendmessage';
  sendButton.textContent = 'Send';
  
  const chatBubble = document.createElement('div');
  chatBubble.id = 'chatbubble';
  chatBubble.textContent = '💬';
  
  // Ensamblar la estructura
  chatInputContainer.appendChild(userInput);
  chatInputContainer.appendChild(sendButton);
  
  chatWindow.appendChild(chatHeader);
  chatWindow.appendChild(chatMessages);
  chatWindow.appendChild(chatInputContainer);
  
  chatbotWrapper.appendChild(chatWindow);
  chatbotWrapper.appendChild(chatBubble);
  
  // Añadir al cuerpo del documento
  document.body.appendChild(chatbotWrapper);
  
  // Estilos (podrías mover esto a CSS)
  const style = document.createElement('style');
  style.textContent = `
    #chatbot-wrapper {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
    #chatbubble {
      width: 60px;
      height: 60px;
      background-color: #4CAF50;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    #chatwindow {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 300px;
      height: 400px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 10px;
      display: none;
      flex-direction: column;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .chat-header {
      padding: 10px;
      background: #4CAF50;
      color: white;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      justify-content: space-between;
    }
    #chatmessages {
      flex-grow: 1;
      padding: 10px;
      overflow-y: auto;
    }
    .chat-input-container {
      padding: 10px;
      border-top: 1px solid #ccc;
      display: flex;
    }
    #userinput {
      flex-grow: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    #sendmessage {
      margin-left: 5px;
      padding: 8px 15px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
  
  // Funcionalidad del chat
  chatBubble.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
  });
  
  sendButton.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  document.getElementById('closechat').addEventListener('click', function() {
    chatWindow.style.display = 'none';
  });
  
  function sendMessage() {
    const input = userInput;
    if(input.value.trim() !== '') {
      addMessage('You: ' + input.value, 'user');
      input.value = '';
      
      // Respuesta automática del bot
      setTimeout(() => {
        addMessage('Bot: Thanks for your message, I can talk to you soon!', 'bot');
      }, 800);
    }
  }
  
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.style.marginBottom = '8px';
    messageDiv.style.padding = '6px 10px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.maxWidth = '80%';
    messageDiv.style.wordBreak = 'break-word';
    
    if (sender === 'user') {
      messageDiv.style.backgroundColor = '#e3f2fd';
      messageDiv.style.marginLeft = 'auto';
    } else {
      messageDiv.style.backgroundColor = '#f1f1f1';
      messageDiv.style.marginRight = 'auto';
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Inicializar el chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initChatbot);
