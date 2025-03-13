'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn, sectionStyle } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name is too long (must be 50 characters or fewer)' }),
  email: z.string({ required_error: 'Email is required' }).email({
    message: 'Invalid email address.',
  }),
  message: z
    .string({ required_error: 'Message is required' })
    .min(10, { message: 'Must be 10 or more characters long' })
    .max(1000, { message: 'Must be 1000 or fewer characters long' }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve();
            toast.success('Success: Message sent!');
          } else {
            reject(new Error('Server error: Unable to send message'));
          }
        }, 2000);
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Unknown error occurred');
      }
    }
  }

  React.useEffect(() => {
    console.log('isSubmitting', isSubmitting);
  }, [isSubmitting]);

  return (
    <section id='contact' className={cn(sectionStyle)}>
      <h2 className='text-lg font-semibold mb-4'>Contact Me</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Your name.' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder='example@mail.com' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Type your message here.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-40 hover:cursor-pointer'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className='animate-spin' /> Sending message...
              </>
            ) : (
              'Send message'
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
}
