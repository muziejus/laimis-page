import React from "react"
import { navigate } from "gatsby"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default function TestimonialSubmit({ location }) {
  const url = location.pathname;
  const [state, setState] = React.useState({})
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="file-upload"
      method="post"
      action={url}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="file-upload" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br />
          <input type="text" name="name" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br />
          <input type="text" name="email" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your testimonial:
          <br />
          <textarea name="testimonial" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Accompanying Photo:
          <br />
          <input type="file" name="attachment" onChange={handleAttachment} />
        </label>
      </p>
      <p>
        <button className="button" type="submit">Send</button>
      </p>
    </form>
  );
}