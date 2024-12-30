import { useRecoilValue } from 'recoil';
import ClipBoardSVG from '../../assets/svgs/ClipBoardSVG';
import { mnemonicAtom } from '../../Atom';

function DisplayMnemonic() {
  const mnemonic = useRecoilValue(mnemonicAtom);
  let words = Array(12).join('.').split('.');
  if (mnemonic) {
    words = mnemonic.split(' ');
  }

  return (
    <>
      <h2 className='btn btn-ghost bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text text-3xl md:text-4xl font-semibold'>
        Current mnemonic
      </h2>
      <div className='flex flex-col md:flex-row justify-around md:text-3xl text-xl text-center m-2 p-4 rounded text-white'>
        <div className='flex md:flex-col'>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[0] === '' ? '' : '1. ' + words[0]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[4] === '' ? '' : '5. ' + words[4]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[8] === '' ? '' : '9. ' + words[8]}
          </div>
        </div>
        <div className='flex md:flex-col'>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[1] === '' ? '' : '2. ' + words[1]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[5] === '' ? '' : '6. ' + words[5]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[9] === '' ? '' : '10. ' + words[9]}
          </div>
        </div>
        <div className='flex md:flex-col'>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[2] === '' ? '' : '3. ' + words[2]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[6] === '' ? '' : '7. ' + words[6]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[10] === '' ? '' : '11. ' + words[10]}
          </div>
        </div>
        <div className='flex md:flex-col'>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[3] === '' ? '' : '4. ' + words[3]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[7] === '' ? '' : '8. ' + words[7]}
          </div>
          <div className='flex justify-center items-center rounded mx-auto my-4  md:w-44 w-28 md:h-20 h-14 glass btn md:text-xl uppercase'>
            {words[11] === '' ? '' : '12. ' + words[11]}
          </div>
        </div>
      </div>
      <button
        className='mx-auto btn btn-info'
        onClick={() => {
          navigator.clipboard.writeText(mnemonic);
        }}
      >
        Copy mnemonic <ClipBoardSVG />
      </button>
    </>
  );
}

export default DisplayMnemonic;
