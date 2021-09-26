export const SpeakMessage = (message) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = message;
  console.log(msg);

  window.speechSynthesis.speak(msg);
} 