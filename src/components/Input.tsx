import { InputHTMLAttributes } from 'react';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="text"
            className="block w-full border border-rose-400 rounded p-3"
            {...props}
        />
    );
}

export default Input;
