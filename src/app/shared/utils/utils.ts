export const scrollChatToBottom = () => {
  console.log('chiamo scroll to bottom')
  let messageContainer = document.getElementById('message-container');
  let messageContainerCurrentHeight = messageContainer?.scrollHeight;
  messageContainer.scrollTop = messageContainerCurrentHeight;
}

export const getCurrentUser = () => {
  return 'g.zaccaria'
}
