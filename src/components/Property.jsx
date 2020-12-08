import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Property() {
  return (
    <div
      className="shadow flex-shrink-0 m-4 rounded ox-border"
      style={{ width: "280px" }}
    >
      <header className="h-40 w-30 bg-cover bg-center">
        <div className="flex">
          <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg" />
        </div>
      </header>
      <div className="px-2 py-10">
        <h4 className="font-bold text-xl mb-2 truncate md:overflow-clip">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Casa de playa hermosa vista
          </a>
        </h4>
        <Features />
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <div className="pt-1">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <Feature figura="https://www.flaticon.es/svg/static/icons/svg/3028/3028354.svg" />
            <Feature figura="https://www.flaticon.es/svg/static/icons/svg/2452/2452227.svg" />
            <Feature figura="https://www.flaticon.es/svg/static/icons/svg/1186/1186715.svg" />
          </dl>
        </div>
      </div>
    </div>
  )
}

const Feature = ({ figura }) => {
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex items-center justify-center h-6 w-6 rounded-md text-white">
          <img src={figura} />
        </div>
        <div className="text-center ml-3 mr-3">
          <dt className="text-base text-gray-900">2</dt>
        </div>
      </div>
    </div>
  )
}

/*
      <div className="px-4 py-2">
        <footer className="mt-8"></footer>
      </div>
*/

/*

          <Link to="/" className="btn inline-block mt-4">
            Ver
          </Link>

*/
