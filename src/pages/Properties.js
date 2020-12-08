import React from "react"
import Property from "../components/Property"
import Nav from "../components/Nav"
import Select from "../components/Select"

export default function Properties() {
  let lugares = ["Escuelas", "Parques", "Plazas", "Centro", "playa"]
  let cuartos = ["1", "2", "3", "4 o mas"]
  return (
    <div>
      <Nav />
      <header className="bg-white shadow">
        <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="inline-block text-3xl font-bold leading-tight text-gray-900">
            Casas en Merida, Yucatan
          </h1>
          <div className="flex items-center justify-center rounded ml-12">
            <Select name="Cerca de" data={lugares} />
            <Select name="Cuartos" data={cuartos} />
          </div>
        </div>
      </header>
      <main className="flex">
        <div className="flex flex-wrap overflow-auto md:overflow-scroll">
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
        </div>
      </main>
    </div>
  )
}
