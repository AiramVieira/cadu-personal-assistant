export const SpeakMessage = (message) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = message;
  window.speechSynthesis.speak(msg);
} 