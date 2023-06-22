import createElement from './create-element';

function createContactTab() {
  const contactCard = createElement('div', '', '', 'contact-card');

  const phone = createElement('h2', '📱 +34 699 99 99 99', '');
  const mail = createElement('h2', '📧 mail@mail.com', '');
  const map = createElement('iframe', '', '');
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6014.6174205803445!2d-3.00930357127834!3d41.084101103998584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd437a0902d3586d%3A0x92751c1ece50bce7!2s19242%20Hiendelaencina%2C%20Guadalajara!5e0!3m2!1sen!2ses!4v1657224312955!5m2!1sen!2ses';
  map.loading = 'lazy';
  map.referrerpolicy = 'no-referrer-when-downgrade';

  contactCard.appendChild(phone);
  contactCard.appendChild(mail);
  contactCard.appendChild(map);

  return contactCard;
}

export default createContactTab;
