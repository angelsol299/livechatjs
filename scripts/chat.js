//adding new chat documents

//setting up a real-time listener to get new chats

//updating the username

//updating the room

class Chatroom {
  constructor(room, userName) {
    this.room = room;
    this.username = userName;
    this.chats = db.collection("chats");
  }
  async addChat(message) {
    // format a chat object
    const now = new Date();
    const chat = {
      message,
      userName: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
  getChats() {
    this.chats.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          // update the ui
        }
      });
    });
  }
}

const chatroom = new Chatroom("gaming", "shaun");
chatroom
  .addChat("hello there")
  .then(() => {
    console.log("chat added");
  })
  .catch(err => console.log(err));
