import { InputHTMLAttributes } from 'react';

export default function InputNumber({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="number"
            className={
                'rounded border-gray-300 text-zinc-600 shadow-sm focus:ring-zinc-500 ' +
                className
            }
        />
    );
}