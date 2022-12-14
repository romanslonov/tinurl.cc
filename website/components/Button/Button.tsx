export default function Button ({ children }) {
  return (
    <button className='h-10 bg-neutral-700 rounded px-4'>
      {children}
    </button>
  )
}