export default function Register() {
  return (
    <form className='w-full h-full'>
      <input type='text' placeholder='Username' className='input' />
      <input type='text' placeholder='E-Mail' className='input' />
      <input type='password' placeholder='Password' className='input' />
      <button type='submit' className='input bg-gray-700 text-white font-bold'>
        Login
      </button>
    </form>
  );
}
