import { useState } from 'react';

function MnemonicForm({ setUserMnemonic }) {
  const [mnemonicBlocks, setMnemonicBlocks] = useState(Array(12).join('.').split('.'));

  function handleChange(value, i) {
    const newMnemonicBlocks = [...mnemonicBlocks];
    newMnemonicBlocks[i] = value;
    setMnemonicBlocks([...newMnemonicBlocks]);
    setUserMnemonic(mnemonicBlocks.join(' '));
  }

  return (
    <div className='flex flex-col md:flex-row justify-around md:text-3xl text-xl text-center m-2 p-4 rounded text-white'>
      <div className='flex md:flex-col'>
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[0]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 0);
          }}
          placeholder='1.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[1]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 1);
          }}
          placeholder='2.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[2]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 2);
          }}
          placeholder='3.   ____'
        />
      </div>
      <div className='flex md:flex-col'>
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[3]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 3);
          }}
          placeholder='4.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[4]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 4);
          }}
          placeholder='5.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[5]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 5);
          }}
          placeholder='6.   ____'
        />
      </div>
      <div className='flex md:flex-col'>
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[6]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 6);
          }}
          placeholder='7.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[7]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 7);
          }}
          placeholder='8.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[8]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 8);
          }}
          placeholder='9.   ____'
        />
      </div>
      <div className='flex md:flex-col'>
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[9]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 9);
          }}
          placeholder='10.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[10]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 10);
          }}
          placeholder='11.   ____'
        />
        <input
          className='px-10 rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 outline-dashed bg-base-200 focus-within:outline focus-within:outline-blue-500 md:text-xl text-xs uppercase'
          value={mnemonicBlocks[11]}
          onChange={(e) => {
            handleChange(e.target.value.trim(), 11);
          }}
          placeholder='12.   ____'
        />
      </div>
    </div>
  );
}

export default MnemonicForm;
