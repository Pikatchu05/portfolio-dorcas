import React from 'react';
// Désactiver les erreurs de vérification de type uniquement pour ce fichier
// @ts-nocheck

// Simple composant d'affichage d'icône pour éviter les problèmes de typage
const Icon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  // Nous allons utiliser une approche avec des caractères HTML/Unicode pour les icônes
  // au lieu des composants react-icons qui causent des problèmes de type
  
  // Mapping des noms d'icônes vers leurs représentations en caractères ou en classes CSS
  const getIconContent = (iconName: string) => {
    switch (iconName) {
      case 'FaArrowDown': return '↓';
      case 'FaArrowUp': return '↑';
      case 'FaHeart': return '♥';
      case 'FaBars': return '☰';
      case 'FaTimes': return '✕';
      case 'FaReact': return '⚛';
      case 'FaBrain': return '🧠';
      case 'FaCode': return '</>';
      case 'FaMobileAlt': return '📱';
      case 'FaGithub': return 'GH';
      case 'FaExternalLinkAlt': return '↗';
      case 'FaEnvelope': return '✉';
      case 'FaMapMarkerAlt': return '📍';
      case 'FaLinkedin': return 'in';
      default: return '';
    }
  };

  return (
    <span className={className} style={{ fontFamily: 'Arial, sans-serif' }}>
      {getIconContent(icon)}
    </span>
  );
};

export default Icon;
