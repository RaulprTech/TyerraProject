import React from "react"
import Select from "./Select"

export default function Filter() {
  let lugares = ["Escuela", "Parque", "Plazas", "Centro"]
  return (
    <div>
      <Select name="Cerca de" data={lugares} />
    </div>
  )
}
