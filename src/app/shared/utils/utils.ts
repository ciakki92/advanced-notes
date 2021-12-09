/**
 * Function that scroll chat window to bottom
 */
export const scrollChatToBottom = () => {
  let messageContainer = document.getElementById('message-container');
  let messageContainerCurrentHeight = messageContainer?.scrollHeight;
  messageContainer.scrollTop = messageContainerCurrentHeight;
}

/**
 *
 * @returns current user
 */
export const getCurrentUser = () => {
  return 'g.zaccaria'
}
