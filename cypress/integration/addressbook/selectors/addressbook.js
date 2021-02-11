module.exports = {
  tab: {
    home: 'a[data-test="home"]',
    addresses: 'a[data-test="addresses"]',
    signOut: 'a[data-test="sign-out"]'
  },
  newAddressBtn: 'a[data-test="create"]',
  createAddressBtn: 'input[data-test="submit"]',
  address: {
    firstName: '#address_first_name',
    lastName: '#address_last_name',
    line1: '#address_street_address',
    line2: '#address_secondary_address',
    city: '#address_city',
    state: '#address_state',
    zipCode: '#address_zip_code',
    country: {
      us: '#address_country_us',
      ca: '#address_country_canada'
    },
    birthday: '#address_birthday',
    color: '#address_color',
    age: '#address_age',
    web: '#address_website',
    picture: '#address_picture',
    phone: '#address_phone',
    interests: {
      climbing: '#address_interest_climb',
      dancing: '#address_interest_dance',
      reading: '#address_interest_read'
    },
    note: '#address_note',
    validation: '#error_explanation',
    notice: '#notice'
  },
  createdAddress:{
    container: '.container',
    firstName: 'span[data-test="first_name"]',
    list: 'a[data-test="list"]'
  },
  signedOut: '#clearance',
  currentUser: 'span[data-test="current-user"]'
}
