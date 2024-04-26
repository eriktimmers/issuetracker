import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Issue Tracker</h1>
      <Image
        src="/logo.webp"
        alt="Logo"
        width={200}
        height={200}
      />
    </div>
  )
}
