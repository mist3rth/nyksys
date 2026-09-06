import React, { useState } from 'react';
import { X, Check, Mail, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Résidence Privée / Penthouse',
    location: '',
    timeline: 'Dans les 6 mois',
    notes: '',
  });

  // Handle Escape key to close modal
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-end animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="contact-modal-drawer"
        data-lenis-prevent
        className="bg-[#faf9f6] text-neutral-900 w-full max-w-xl h-full overflow-y-auto p-8 sm:p-12 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-300">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                Consultation Privée
              </span>
              <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                Initier une Conversation
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-neutral-800 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              aria-label="Fermer la boîte de dialogue"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Demande Transmise
              </h3>
              <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                Merci de votre intérêt pour Nyksys. Les associés du studio étudient chaque projet avec la plus grande discrétion. Un directeur de création prendra contact avec vous sous deux jours ouvrés.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Nom et Prénom *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="ex. Hélène de Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500 outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Adresse Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="contact@domaine.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500 outline-none text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Téléphone / WhatsApp
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-project-type" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Type de Projet
                  </label>
                  <select
                    id="modal-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500 outline-none text-sm"
                  >
                    <option>Résidence Privée / Penthouse</option>
                    <option>Restauration d’Hôtel Particulier</option>
                    <option>Architecture Contemporaine Neuve</option>
                    <option>Mobilier & Curation Artistique</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="modal-location" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Localisation / Ville
                  </label>
                  <input
                    id="modal-location"
                    type="text"
                    placeholder="ex. Paris 7e, Genève, Côte d'Azur"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Détails & Ambition du Projet
                </label>
                <textarea
                  id="modal-notes"
                  rows={4}
                  placeholder="Partagez quelques détails sur la surface, les délais souhaités ou vos aspirations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500 outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <Send size={16} aria-hidden="true" />
                <span>Envoyer ma demande confidentielle</span>
              </button>
            </form>
          )}
        </div>

        {/* Direct Studio Contacts */}
        <div className="pt-8 mt-8 border-t border-neutral-300 text-xs text-neutral-600 space-y-2">
          <div className="font-semibold text-neutral-800 uppercase tracking-wider mb-1">
            Contact Direct Studio
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={13} className="text-amber-800" />
            <a href="mailto:inquiries@nyksys.com" className="hover:underline">
              inquiries@nyksys.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={13} className="text-amber-800" />
            <span>540 West 26th Street, New York • 12 Rue de la Paix, Paris</span>
          </div>
        </div>
      </div>
    </div>
  );
};
