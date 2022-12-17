import { FormEvent, useState } from 'react';
import Button from '../Button';
import Input from '../Input/Input';

export default function GenerateForm () {
  const [destination, setDestination] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
      },
      body: JSON.stringify({ destination }),
    }).then((response) => response.json());

    console.log(data);
  }
  
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input onChange={(e) => setDestination(e.currentTarget.value)} required={true} placeholder='Enter your long URL' />
      <Button type='submit' appearance='primary' wide>Generate</Button>
    </form>
  )
}