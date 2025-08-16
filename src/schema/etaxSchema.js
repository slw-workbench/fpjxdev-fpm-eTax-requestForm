import { z } from 'zod';
import { validateThaiTaxId } from '../utils/thaiId.js';
import { emailRegex } from '../utils/email.js';

export const createEtaxSchema = (t) =>
  z.object({
    orderChannel: z.string().min(1, t('validation.required')),
    orderRef: z
      .string()
      .min(2, t('validation.min'))
      .max(50, t('validation.max')),
    personType: z.string().min(1, t('validation.required')),
    taxId: z
      .string()
      .refine((v) => validateThaiTaxId(v), t('validation.taxId')),
    firstName: z.string().min(1, t('validation.required')),
    lastName: z.string().min(1, t('validation.required')),
    addressLine: z
      .string()
      .min(10, t('validation.min'))
      .max(300, t('validation.max')),
    provinceId: z.string().min(1, t('validation.required')),
    amphureId: z.string().min(1, t('validation.required')),
    tambonId: z.string().min(1, t('validation.required')),
    postalCode: z.string().min(5, t('validation.required')),
    email: z.string().regex(emailRegex, t('validation.email')),
  });
