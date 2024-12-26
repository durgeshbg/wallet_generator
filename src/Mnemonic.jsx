export default function Mnemonic({ mnemonic }) {
  let words = Array(12).join('.').split('.');
  if (mnemonic) {
    words = mnemonic.split(' ');
  }

  return (
    <div className='flex justify-around text-3xl text-center m-2 p-4 rounded text-white'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[0]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[4]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[8]}</div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[1]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[5]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[9]}</div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[2]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[6]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[10]}</div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[3]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[7]}</div>
        <div className='flex justify-center items-center rounded mx-auto my-4  w-44 h-20 bg-gradient-to-r from-blue-600  to-blue-400'>{words[11]}</div>
      </div>
    </div>
  );
}
