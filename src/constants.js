export const API_ENDPOINT =
  import.meta.env.VITE_ETAX_ENDPOINT || '/api/etax';

export const PRIMARY_COLOR = '#F05A22';

export const ORDER_CHANNEL_OPTIONS = [
  { value: 'POS', labelKey: 'orderChannel.options.POS' },
  { value: 'LINE', labelKey: 'orderChannel.options.LINE' },
  { value: 'WEB', labelKey: 'orderChannel.options.WEB' },
];

export const PERSON_TYPE_OPTIONS = [
  { value: 'individual', labelKey: 'form.personType.options.individual' },
  { value: 'juristic', labelKey: 'form.personType.options.juristic' },
];
