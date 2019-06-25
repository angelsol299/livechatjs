//dom queries

const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");

//add a new chat
newChateForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message);
});

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "shaun");

//get chats and render
chatroom.getChats(data => chatUI.render(data));
