import clsx from 'clsx';

export default function Button ({ appearance = 'default', children, wide, ...props }) {
  return (
    <button 
      className={clsx([
        'h-12 px-12 rounded', 
        { 'bg-neutral-800 hover:bg-neutral-700': appearance === 'default' },
        { 'bg-purple-600 hover:bg-purple-500': appearance === 'primary' },
        { 'w-full': wide },
      ])} 
      {...props}
    >
      {children}
    </button>
  )
}