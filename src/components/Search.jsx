import React from "react"
import { Link } from "gatsby"

import Select from "../components/Select"

let kinds = ["Casa", "Departamento"]
let states = ["Yucatán"]
let cities = ["Mérida"]

export default function Search() {
  return (
    <section>
      <div className="container mx-auto max-w-2xl ">
        <div className="flex items-center justify-center rounded">
          <Select name="Tipo" data={kinds} />
          <Select name="Estado" data={states} />
          <Select name="Ciudad" data={cities} />
          <Link to="/Properties" className="btn inline-block mt-6">
            Buscar
          </Link>
        </div>
      </div>
    </section>
  )
}

/*

          <span className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="flex-shrink-0 h-6 w-6 rounded-full"
            />
            <span className="ml-3 block focus:border-indigo-500 truncate">{val || "Seleccionar"}</span>
          </span>
*/
