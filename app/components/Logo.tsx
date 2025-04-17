import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center px-2'>
      <Image
        src='/logo.svg'
        width={0}
        height={0}
        alt='Simple shop'
        className='w-9 h-9'
      />
      <h1 className='px-2 text-2xl font-bold text-cyan-500'>Тутbook</h1>
    </div>
  )
}
