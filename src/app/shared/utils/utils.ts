export const scrollChatToBottom = () => {
  let messageContainer = document.getElementById('message-container');
  let messageContainerCurrentHeight = messageContainer?.scrollHeight;
  messageContainer.scrollTop = messageContainerCurrentHeight;
}

export const getCurrentUser = () => {
  return 'g.zaccaria'
}
