import React from "react"

import Header from "../components/Landing/Header"
import Mensaje from "../components/Landing/Caracteristica"
import search from "../imgs/house_searching.svg"
import select from "../imgs/select_house.svg"
import buy from "../imgs/buy_house.svg"

import Advantage from "../components/Landing/Advantage"
import Nav from "../components/Nav"
import Banner from "../components/Landing/Banner"
import Property from "../components/Property"

export default function Home() {
  return (
    <div>
      <Banner />
      <Nav />
      <Header />
      <div className="ml-12">
        <h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
          Casas en la Playa cerca de ti
        </h1>
        <div className="flex justificy-center mt-8">
          <Property />
          <Property />
          <Property />
          <Property />
        </div>
      </div>
      <Mensaje
        title="Busqueda confiable"
        message="Nos aseguramos de verificar que cada oferta sea real y este vigente para que tu proceso de busqueda sea lo mas agradable posible."
        illustration={search}
      />
      <Mensaje
        title="Panorama completo"
        message="Te damos acceso a la informacion mas relevante de las propiedades para que puedas tomar la decision mas asertada."
        illustration={select}
      />
      <Mensaje
        title="Compra 100% digital"
        message="Todo el proceso es a traves de nuestra plataforma, desde la busqueda hasta la firma del contrato. Todo completamente seguro para que tu no tengas que preocuparte de nada mas que encontrar tu nuevo hogar"
        illustration={buy}
      />
      <Advantage />
    </div>
  )
}

/* 
        <Proyects/>
        <Repos/>
        <EduNav/>
        <Medium/>
*/
