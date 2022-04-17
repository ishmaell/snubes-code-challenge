import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../models/ContactFormData';
import { ContactSchema } from '../schema/ContactSchema';
import { yupResolver } from '@hookform/resolvers/yup';

function useContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: 'all',
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = useCallback((formValues: ContactFormData) => {
    console.log(formValues);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors: errors,
    isValid: isValid,
  };
}

export default useContactForm;
