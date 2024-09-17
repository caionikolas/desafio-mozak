import { InputHTMLAttributes } from 'react';

export default function DatetimeLocal({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="datetime-local"
            className={
                'rounded border-gray-300 text-zinc-600 shadow-sm focus:ring-zinc-500 ' +
                className
            }
        />
    );
}