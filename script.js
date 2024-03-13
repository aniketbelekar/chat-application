const input = document.getElementById('user-input');
const send = document.getElementById('send-btn');
const chatMessages = document.querySelector('.chatbox'); // Assuming this is the element where chat messages are displayed

const chat = {
  "hi": "Hello!",
  "hello": "Hi there!",
  "how are you": "I am fine. How are you?",
  "good": "That's great to hear!",
  "bad": "I'm sorry to hear that. Is there anything I can do to help?",
  "what's your name": "I'm just a chatbot. You can call me ChatBot!",
  "thanks": "You're welcome!",
  "bye": "Goodbye! Have a great day!"
};

function chats() {
  const message = input.value.trim();
  if (message !== "") {
    displayMessage(message, true);
    const response = chat[message.toLowerCase()] || "I'm not sure what you mean. Can you please clarify?";
    displayMessage(response, false);
    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
};

function displayMessage(message, isUser) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.style.margin = "5px 0";
    messageDiv.style.padding = "10px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.backgroundColor = isUser ? "#007bff" : "#f0f0f0";
    messageDiv.style.color = isUser ? "#fff" : "#000";
    messageDiv.style.alignSelf = isUser ? "flex-end" : "flex-start";
    messageDiv.style.maxWidth = "70%";
    chatMessages.appendChild(messageDiv);
  };

send.addEventListener('click', chats);
