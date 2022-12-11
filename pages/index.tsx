import SigningContainer from '../components/SigningIn/SigningContainer';

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <div className='relative w-screen h-screen'>
        <h1 className='absolute top-1/3 left-60 text-5xl font-extrabold'>
          Blogify
        </h1>
        <h2 className='absolute top-[calc(33%+60px)] left-60 text-xl'>
          The blog hosting website
        </h2>

        <SigningContainer />
      </div>
      <div className='h-96 w-full bg-gray-100 relative'>
        <h2 className='text-3xl text-center p-10'>Our platform has</h2>
        <div className='w-full h-[calc(100%-120px)] flex text-2xl justify-evenly items-center'>
          <div>registered 0 users</div>
          <div>created 0 blogs</div>
          <div>hosted 0 posts</div>
        </div>
      </div>
      <div className='h-screen'>
        <h1 className='text-3xl text-center p-10'>Most popular blogs</h1>
      </div>
    </div>
  );
}
