import React, { useState, useEffect } from 'react'

const SearchBar = ({ currentPlaceholder }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    let isMounted = true
    if (searchQuery.length > 2) {
      setLoading(true)
      const delayDebounceFn = setTimeout(async () => {
        try {
          const response = await fetch(
            `https://cdn.healthcareinternational.in/wp-json/custom/v1/search?search=${searchQuery}`
          )
          const data = await response.json()
          if (isMounted) {
            setResults(data)
            setLoading(false)
          }
        } catch (error) {
          console.error('Error fetching search results:', error)
          if (isMounted) setLoading(false)
        }
      }, 500)

      return () => {
        clearTimeout(delayDebounceFn)
        isMounted = false
      }
    } else {
      setResults([])
    }
  }, [searchQuery])

  const handleBlur = () => {
    // setLoading(false)
    // Delay hiding results to allow click event to register
    setTimeout(() => {
      if (!searchQuery) {
        setIsFocused(false)
        setResults([])
      }
    }, 200)
  }

  const handleFocus = () => {
    setIsFocused(true)
    // setLoading(false)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResultClick = (slug) => {
    // alert(`Result clicked: ${slug}`) // Alert to show result click
    scrollToSection(slug)
    setIsFocused(false)
    setResults([]) // Hide results after clicking
  }

  return (
    <>
      <div className="w-full">
        <div className="relative flex items-center z-50 bg-white group">
          <div className="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg
              className="w-6 h-6 text-gray-500 group-hover:text-blue-500 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              onClick={() => document.getElementById('my_modal_4').showModal()}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal modal-top bg-red-500 p-4">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default SearchBar
