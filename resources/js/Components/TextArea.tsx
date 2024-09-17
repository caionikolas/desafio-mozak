import { TextareaHTMLAttributes } from 'react';

export default function TextArea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
          {...props}
          className={
              'rounded border-gray-300 text-zinc-600 shadow-sm focus:ring-zinc-500 ' +
              className
          }
        />
    );
}