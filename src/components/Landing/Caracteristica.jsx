import React from "react"

export default function Caracteristica({ title, message, illustration }) {
  return (
    <div className="container mx-auto p-12 max-w-4xl ">
      <div className="flex items-center justify-center">
        <div className="flex-1 mr-3">
          <h1 className="font-bold text-yellow text-4xl">{title}</h1>
          <p className="text-xl font-light">{message}</p>
        </div>
        <div className="flex-1">
          <img
            src={illustration}
            alt="hombre junto a wireframes"
            style={{ height: "300px" }}
          />
        </div>
      </div>
    </div>
  )
}
