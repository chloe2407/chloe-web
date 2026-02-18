import React from 'react';

/** Parses description text with **bold** markers and returns React nodes */
export function formatDescriptionWithBold(text) {
  if (!text || typeof text !== 'string') return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
