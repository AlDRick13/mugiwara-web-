import React from 'react'
import Card from '../components/general/Card'
import Main from '../components/home/Main'

export default function Home() {
  return (
    <>
        <Main />
        <section>
          <div className='m-20'>
            <h1 className='font-bold'> Populares en Querétaro</h1>
            <p className='text-grey2'>Lo que las personas piden más</p>
          </div>
          <div className='flex overflow-hidden w-300%'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section>
        <div className='m-20'>
            <h1 className='font-bold'> Sugerencias para ti </h1>
            <p className='text-grey2'> Publicaciones que podrías colaborar </p>
          </div>
          <div className='flex overflow-hidden w-300%'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className='bg-skyBlue p-6 flex flex-col gap-3'>
            <h1 className='font-bold text-grey2 text-20'>¡Hagámoslo más personal!</h1>
            <p className='text-grey2 text-12'>Selecciona tus intereses para brindarte sugerencias de acuerdo a tus gustos</p>
            <div className='rounded-4xl text-grey bg-white w-content px-2 py-1 text-10'>
              Artistas mexicanos
            </div>
            <a 
              className='text-blue text-12'
              href="#">Ver todos los intereses</a>
        </section>
        <section>
        <div className='m-20'>
            <h1 className='font-bold'> Recientes </h1>
            <p className='text-grey2'> Las personas últimamente están hablando de esto </p>
          </div>
          <div className='flex overflow-hidden w-300%'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
    </>
  )
}
