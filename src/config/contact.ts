export const CONTACT_EMAIL = 'andur-design@outlook.com';
export const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/agustin-esn/';
export const CONTACT_GITHUB = 'https://github.com/AndurEsn';
/** Digits with country code, no +. Mexican mobile uses 52 + 1 + 10 digits. */
export const CONTACT_WHATSAPP_E164 = '';
export const CONTACT_WHATSAPP = CONTACT_WHATSAPP_E164
  ? `https://wa.me/${CONTACT_WHATSAPP_E164}`
  : 'https://wa.me/';
