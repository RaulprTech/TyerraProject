import React, { useEffect, useState } from "react"

export default function Select({ name, data }) {
  const [open, setOpen] = useState(false)
  const [val, setVal] = useState("")
  const [fondo, setFondo] = useState("")

  useEffect(() => {
    if (open === false) {
      setFondo("")
    } else {
      setFondo("bg-white")
    }
  }, [open])

  return (
    <div className="mr-3">
      <label id="listbox-label" className="block text-sm font-medium">
        {name}
      </label>
      <div className="mt-1 relative">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <span className="flex items-center">
            <img
              src="https://www.flaticon.es/svg/static/icons/svg/1464/1464213.svg"
              alt=""
              className="flex-shrink-0 h-6 w-6 rounded-full"
            />
            <input className="ml-3 block truncate" value={val || name} />
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div className={`absolute mt-1 w-full rounded-md ${fondo}`}>
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            {open &&
              data.map(d => {
                return (
                  <li
                    id="listbox-item-0"
                    role="option"
                    className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                  >
                    <div className="flex items-center">
                      <img
                        src="https://www.flaticon.es/svg/static/icons/svg/1464/1464213.svg"
                        alt=""
                        className="flex-shrink-0 h-6 w-6 rounded-full"
                      />
                      <span
                        className="ml-3 block font-normal truncate"
                        onClick={() => {
                          setOpen(!open)
                          setVal(d)
                        }}
                      >
                        {d}
                      </span>
                    </div>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}
