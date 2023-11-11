import z from 'zod';

const customErrorMap: z.ZodErrorMap = () => {
  return { message: 'パスワードが違うよ！' };
};

export const schema = z.object({
  password: z
    .string({ errorMap: customErrorMap })
    .regex(/^深夜の遊び人$/, 'パスワードが違うよ！'),
});

export type Schema = z.infer<typeof schema>;
