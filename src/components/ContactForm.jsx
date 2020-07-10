import React from 'react';
import { navigate } from 'gatsby-link'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
    }
  
export default () => {

    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
            console.log(e.target);
    }
    return(
    <form 
        className="mt-16 text-center" 
        name="contact" 
        method="POST" 
        action="/thanks/"
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        >
        <label 
            htmlFor="contact-label" 
            className="block text-gray-700 text-sm font-bold mb-2">
            Cuentame de esa idea que quieres hacer realidad
        </label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea
                id="contact-content"
                name="contact-content"
                onSubmit={handleChange}
                className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            <button className="btn ml-4" type="submit">Enviar</button>
        </div>
    </form>
    )
}