export const canSubmit = (formState) =>
  formState.isValid && !formState.isSubmitting;
