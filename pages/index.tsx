import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-800">
      <Head>
        <title>Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-9"> 
        <p className="font-bold text-white font-bold font-sans text-3xl text-center">TeamLitho Company </p>
        <br/>
         <hr/>
        <div className="text-center p-9">
            <button className="bg-blue-800 p-2 rounded hover:bg-blue-500 font-bold">
               Get Started
            </button>
        </div>
      </main>
      <div className="w-full m-auto">
         <h1 className="text-white font-bold font-sans text-center">
            Technology is defined as “purposeful intervention by design”, and technological practice as the activity through which technological outcomes are created and have impact in the world. Technological outcomes are designed to enhance the capabilities of people and expand human possibilities
         </h1>
      </div>
    </div>
  )
}

export default Home