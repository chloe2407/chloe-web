import React, { useEffect } from 'react';

const EmbeddedChatbot = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: 'u6ZmqqfSSxKo4jwd7MLEO',
      domain: 'www.chatbase.co',
    };

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.chatbotId = 'u6ZmqqfSSxKo4jwd7MLEO';
    script.domain = 'www.chatbase.co';
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // React components must return something, null is fine for this case
};

export default EmbeddedChatbot;
