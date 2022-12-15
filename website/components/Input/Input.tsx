import { forwardRef } from 'react';

type Props = {
  label?: string;
}

const Input = ({ label, ...props }: Props, ref) => {
  return (
    <label>
      {label && <span>{label}</span>}
      <input
        ref={ref}
        className='w-full h-12 px-4 rounded outline-none border-1 bg-neutral-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-neutral-500' 
        type="text" 
        {...props} 
      />
    </label>
  )
}

export default forwardRef(Input);