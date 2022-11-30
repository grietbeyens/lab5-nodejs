const messagesList = document.getElementById("messages");

const run = async () => {
  console.log("run() called");
  const response = await fetch("/api/v1/messages");
  const responseData = await response.json();
  console.log("responseData", responseData);
  const messages = responseData.data.messages.map(
    (message) => `<li><span class="blue">${message.user}</span> - ${message.message}</li>`
  );
  messagesList.innerHTML = messages.join("");
};

run();
