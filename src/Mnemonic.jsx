export default function Mnemonic({ mnemonic }) {
  let words = Array(12).join('.').split('.');
  if (mnemonic) {
    words = mnemonic.split(' ');
  }

  return (
    <div className='flex flex-col md:flex-row justify-around md:text-3xl text-xl text-center m-2 p-4 rounded text-white'>
      <div className='flex md:flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>1. {words[0]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>5. {words[4]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>9. {words[8]}</div>
      </div>
      <div className='flex md:flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>2. {words[1]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>6. {words[5]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>10. {words[9]}</div>
      </div>
      <div className='flex md:flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>3. {words[2]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>7. {words[6]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>11. {words[10]}</div>
      </div>
      <div className='flex md:flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>4. {words[3]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>8. {words[7]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 bg-gradient-to-r from-blue-600  to-blue-400'>12. {words[11]}</div>
      </div>
    </div>
  );
}
