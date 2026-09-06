import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section
      id="contact-details-form"
      className="relative z-20 w-full bg-[#faf9f6] text-neutral-900 pt-16 sm:pt-24 md:pt-32 pb-20 sm:pb-28"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 2xl:gap-24 items-start">
          {/* Left Column: Contact Coordinates */}
          <div className="lg:col-span-5 min-w-0 w-full space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Email */}
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-1">
                Email:
              </span>
              <a
                href="mailto:contact@nyksys-architecture.com"
                className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors inline-block break-words"
              >
                contact@nyksys-architecture.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-1">
                Téléphone:
              </span>
              <a
                href="tel:+33142685500"
                className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors inline-block"
              >
                +33 (0)1 42 68 55 00
              </a>
            </div>

            {/* Office */}
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-1">
                Bureaux:
              </span>
              <address className="not-italic text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 leading-snug space-y-0.5">
                <p>Place Vendôme,</p>
                <p>75001 Paris, France</p>
              </address>
            </div>

            {/* Opening Hours */}
            <div className="pt-2">
              <span className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-2">
                Horaires d'ouverture:
              </span>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-medium text-neutral-800 leading-relaxed">
                Notre équipe est à votre disposition du lundi au vendredi, de 9h00 à 19h00. Nos architectes et directeurs de projets interviennent régulièrement sur site et restent joignables tout au long des horaires d'ouverture.
              </p>
            </div>
          </div>

          {/* Right Column: Minimalist Underline Form */}
          <div className="lg:col-span-7 min-w-0 w-full">
            {isSubmitted ? (
              <div className="py-16 px-8 bg-neutral-100 rounded-none border border-neutral-300 text-neutral-900 space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Message Transmis avec Succès
                </h3>
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg">
                  Merci de l'intérêt porté au Studio Nyksys. Notre direction de projets examinera vos éléments et prendra contact avec vous dans un délai de 24 à 48 heures ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-full space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Field: Name */}
                <div className="group w-full min-w-0">
                  <label
                    htmlFor="contact-name"
                    className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full min-w-0 max-w-full box-border bg-transparent border-b border-neutral-900 py-3 text-base sm:text-lg lg:text-xl text-neutral-900 focus:outline-none focus:border-b-2 transition-all"
                  />
                </div>

                {/* Field: Email */}
                <div className="group w-full min-w-0">
                  <label
                    htmlFor="contact-email"
                    className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full min-w-0 max-w-full box-border bg-transparent border-b border-neutral-900 py-3 text-base sm:text-lg lg:text-xl text-neutral-900 focus:outline-none focus:border-b-2 transition-all"
                  />
                </div>

                {/* Field: Phone */}
                <div className="group w-full min-w-0">
                  <label
                    htmlFor="contact-phone"
                    className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-2"
                  >
                    Numéro de Téléphone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full min-w-0 max-w-full box-border bg-transparent border-b border-neutral-900 py-3 text-base sm:text-lg lg:text-xl text-neutral-900 focus:outline-none focus:border-b-2 transition-all"
                  />
                </div>

                {/* Field: Message */}
                <div className="group w-full min-w-0">
                  <label
                    htmlFor="contact-message"
                    className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full min-w-0 max-w-full box-border bg-transparent border-b border-neutral-900 py-3 text-base sm:text-lg lg:text-xl text-neutral-900 focus:outline-none focus:border-b-2 transition-all resize-y min-h-[110px]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 sm:pt-4">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer focus:outline-none disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
