export default {
  header: {
    title: 'e-Tax Request Form',
    subtitle: 'Contact Customer Service',
  },
  form: {
    orderChannel: { label: 'Order Channel', placeholder: 'Select channel' },
    orderRef: { label: 'Order Reference No.', placeholder: 'Enter order reference' },
    personType: {
      label: 'Person Type',
      options: { individual: 'Individual', juristic: 'Juristic' },
    },
    taxId: { label: 'Tax Identification No.', placeholder: '13-digit tax ID' },
    firstName: { label: 'First Name', placeholder: 'Enter first name' },
    lastName: { label: 'Last Name', placeholder: 'Enter last name' },
    addressLine: {
      label: 'Address Line',
      placeholder: 'House/building/village/road/soi',
    },
    province: { label: 'Province', placeholder: 'Select province' },
    amphure: { label: 'District', placeholder: 'Select district' },
    tambon: { label: 'Sub-district', placeholder: 'Select sub-district' },
    postalCode: { label: 'Postal Code', placeholder: '' },
    email: { label: 'Email', placeholder: 'Enter email' },
    submit: 'Submit',
  },
  orderChannel: { options: { POS: 'POS', LINE: 'Line OA', WEB: 'Website' } },
  validation: {
    required: 'This field is required',
    email: 'Invalid email',
    taxId: 'Invalid tax ID',
    min: 'Too short',
    max: 'Too long',
  },
  toasts: {
    confirmSubmit: 'Confirm submission?',
    success: 'Request submitted successfully',
    error: 'Something went wrong. Please try again.',
  },
  buttons: { confirm: 'Confirm', cancel: 'Cancel' },
};
