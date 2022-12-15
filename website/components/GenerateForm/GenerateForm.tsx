import { FormEvent } from 'react';
import Button from '../Button';
import Input from '../Input/Input';

export default function GenerateForm () {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit} className='p-4 space-y-4 rounded-md bg-neutral-900'>
      <Input required={true} placeholder='Enter your long URL' />
      <Button type='submit' appearance='primary' wide>Generate</Button>
    </form>
  )
}