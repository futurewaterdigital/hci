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
    setLoading(false)
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
    setLoading(false)
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
        <form className="mx-auto group-hover:bg-white">
          <div className="relative flex items-center z-50 bg-white group">
            <input
              type="search"
              id="default-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className="block w-0 group-hover:w-full focus:w-full transition-all duration-300 ease-in-out p-4 pe-10 text-sm text-gray-900 border-0 bg-transparent border-b-white border-b-0 group-hover:border-b-2 focus:border-b-blue-500 focus:ring-0"
              placeholder={currentPlaceholder}
              required
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3">
              <svg
                className="w-6 h-6 text-gray-500 group-hover:text-blue-500 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
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
        </form>

        {isFocused && results && (
          <div className="absolute w-full bg-white p-2 border border-black rounded-sm">
            {loading ? (
              <div>
                <p>Loading...</p>
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                </div>
              </div>
            ) : (
              <>
                {!loading && results.length === 0 && searchQuery.length > 2 && (
                  <p>No results found</p>
                )}
                {results.length > 0 && (
                  <div className="mt-4">
                    <ul>
                      {results.map((result) => (
                        <li
                          key={result.id}
                          className="border-b border-gray-300 py-2 last:border-b-0 cursor-pointer"
                          onClick={() =>
                            handleResultClick(result.categories[0]?.slug)
                          }
                        >
                          {result.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchBar
