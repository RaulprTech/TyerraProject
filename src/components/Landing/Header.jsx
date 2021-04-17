import React from "react"
import background from "../../imgs/background.jpg"
import Search from "../Search"

export default () => {
  return (
    <header
      className="pb-24 pt-12 z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <h1 className="font-bold text-5xl m-4 text-center z-50">
              Encuentra la casa de tus sueños
            </h1>
            <p className="text-xl font-semibold m-4 text-center z-50">
              Busca, Compara y Compra en un solo lugar. Realiza todo el proceso
              de forma facil, rapida y con la mayor seguridad.
            </p>
            <Search />
          </div>
        </div>
      </div>
    </header>
  )
}
