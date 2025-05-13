// This file contains the configuration for the layout of the hospital website.

export const layoutData = {
  topBar: {
    color: '#263477',
    text: 'Emergencias: +591 4-1234567'
  },
  navBar: {
    color: 'white'
  },
  logo: {
    main: 'Hosp',
    alt: 'ital',
    symbol: '+',
    subtitle: 'Universitario SFX',
    fullTitle: 'Hospital'
  },
  menuItems: [
    { title: 'Inicio', to: '/' },
    { title: 'Nosotros', to: '/about' },
    { title: 'Servicios', to: '/service' },
    { title: 'Noticias', to: '/notice' },
    { title: 'Contacto', to: '/contact' }
  ],
  contact: {
    phone: '(591) 4-1234567',
    email: 'contacto@hospital.com',
    address: 'Avenida Villar, Sucre - Bolivia'
  },
  social: [
    { name: 'Facebook', icon: 'mdi-facebook', url: '#' },
    { name: 'Instagram', icon: 'mdi-instagram', url: '#' },
    { name: 'WhatsApp', icon: 'mdi-whatsapp', url: '#' },
    { name: 'Twitter', icon: 'mdi-twitter', url: '#' }
  ],
  legal: [
    { label: 'Aviso de privacidad', to: '/#' },
    { label: 'Términos de uso', to: '/#' }
  ],
  description:
    'Hospital Universitario San Francisco Xavier, comprometido con la salud de nuestra comunidad.',
  copyright:
    'Hospital Universitario de San Francisco Xavier de Chuquisaca.'
};
