import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import Header from '../components/Header.jsx';
import FormCard from '../components/FormCard.jsx';
import Input from '../components/Input.jsx';
import Select from '../components/Select.jsx';
import TextArea from '../components/TextArea.jsx';
import RadioGroup from '../components/RadioGroup.jsx';
import Footer from '../components/Footer.jsx';
import { ORDER_CHANNEL_OPTIONS, PERSON_TYPE_OPTIONS } from '../constants.js';
import { canSubmit } from '../form.js';
import { createEtaxSchema } from '../schema/etaxSchema.js';
import { useAddressData } from '../hooks/useAddressData.js';
import { useI18n } from '../hooks/useI18n.js';
import { useToast } from '../state/ToastProvider.jsx';
import { submitETaxRequest } from '../services/api.js';

export default function ETaxFormPage() {
  const { t, lang } = useI18n();
  const schema = useMemo(() => createEtaxSchema(t), [t]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState,
    reset,
  } = useForm({ resolver: zodResolver(schema), mode: 'onChange' });

  const {
    provinces,
    loading: addressLoading,
    getAmphuresByProvinceId,
    getTambonsByAmphureId,
    getPostalCodesByTambonId,
    displayName,
  } = useAddressData();

  const { toast, confirm } = useToast();

  const provinceId = watch('provinceId');
  const amphureId = watch('amphureId');
  const tambonId = watch('tambonId');

  useEffect(() => {
    setValue('amphureId', '');
    setValue('tambonId', '');
    setValue('postalCode', '');
  }, [provinceId, setValue]);

  useEffect(() => {
    setValue('tambonId', '');
    setValue('postalCode', '');
  }, [amphureId, setValue]);

  useEffect(() => {
    const codes = getPostalCodesByTambonId(tambonId);
    setValue('postalCode', codes[0] || '');
  }, [tambonId, getPostalCodesByTambonId, setValue]);

  const amphures = getAmphuresByProvinceId(provinceId);
  const tambons = getTambonsByAmphureId(amphureId);

  const onSubmit = async (values) => {
    const ok = await confirm(t('toasts.confirmSubmit'));
    if (!ok) return;
    try {
      await submitETaxRequest({
        ...values,
        language: lang,
        submittedAt: dayjs().toISOString(),
      });
      toast(t('toasts.success'));
      reset();
    } catch (e) {
      toast(t('toasts.error'));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <FormCard>
        <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            name="orderChannel"
            label={t('form.orderChannel.label')}
            register={register}
            error={formState.errors.orderChannel}
            disabled={addressLoading}
          >
            <option value="">{t('form.orderChannel.placeholder')}</option>
            {ORDER_CHANNEL_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.labelKey)}
              </option>
            ))}
          </Select>

          <Input
            name="orderRef"
            label={t('form.orderRef.label')}
            placeholder={t('form.orderRef.placeholder')}
            register={register}
            error={formState.errors.orderRef}
          />

          <div className="mb-4">
            <span className="block mb-1 font-medium">
              {t('form.personType.label')}
            </span>
            <RadioGroup
              name="personType"
              options={PERSON_TYPE_OPTIONS.map((o) => ({
                value: o.value,
                label: t(o.labelKey),
              }))}
              register={register}
              error={formState.errors.personType}
            />
          </div>

          <Input
            name="taxId"
            label={t('form.taxId.label')}
            placeholder={t('form.taxId.placeholder')}
            register={register}
            error={formState.errors.taxId}
            inputMode="numeric"
            pattern="[0-9]*"
          />

          <Input
            name="firstName"
            label={t('form.firstName.label')}
            placeholder={t('form.firstName.placeholder')}
            register={register}
            error={formState.errors.firstName}
          />

          <Input
            name="lastName"
            label={t('form.lastName.label')}
            placeholder={t('form.lastName.placeholder')}
            register={register}
            error={formState.errors.lastName}
          />

          <TextArea
            name="addressLine"
            label={t('form.addressLine.label')}
            placeholder={t('form.addressLine.placeholder')}
            register={register}
            error={formState.errors.addressLine}
            rows={3}
          />

          <Select
            name="provinceId"
            label={t('form.province.label')}
            register={register}
            error={formState.errors.provinceId}
            disabled={addressLoading}
          >
            <option value="">{t('form.province.placeholder')}</option>
            {provinces.map((p) => (
              <option key={p.id} value={p.id}>
                {displayName(p, lang)}
              </option>
            ))}
          </Select>

          <Select
            name="amphureId"
            label={t('form.amphure.label')}
            register={register}
            error={formState.errors.amphureId}
            disabled={!provinceId}
          >
            <option value="">{t('form.amphure.placeholder')}</option>
            {amphures.map((a) => (
              <option key={a.id} value={a.id}>
                {displayName(a, lang)}
              </option>
            ))}
          </Select>

          <Select
            name="tambonId"
            label={t('form.tambon.label')}
            register={register}
            error={formState.errors.tambonId}
            disabled={!amphureId}
          >
            <option value="">{t('form.tambon.placeholder')}</option>
            {tambons.map((tmb) => (
              <option key={tmb.id} value={tmb.id}>
                {displayName(tmb, lang)}
              </option>
            ))}
          </Select>

          <Input
            name="postalCode"
            label={t('form.postalCode.label')}
            register={register}
            error={formState.errors.postalCode}
            readOnly
          />

          <Input
            name="email"
            label={t('form.email.label')}
            placeholder={t('form.email.placeholder')}
            register={register}
            error={formState.errors.email}
          />

          <button
            type="submit"
            disabled={!canSubmit(formState) || addressLoading}
            className="mt-4 w-full md:w-auto bg-primary text-white font-semibold px-6 py-3 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('form.submit')}
          </button>
        </form>
      </FormCard>
      <Footer />
    </div>
  );
}
