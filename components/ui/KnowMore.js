import React from 'react'

function KnowMore({ title }) {
  return (
    <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
      <a href="#">To know more about {title} and its causes and treatment, click here.</a>
    </p>
  )
}

export default KnowMore
