'use server';

export const sendEmail = async (formdata: FormData) => {
  ('use server');
  console.log('Running on server');
  console.log(formdata.get('senderEmail'));
  console.log(formdata.get('message'));
};
