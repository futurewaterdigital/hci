'use client'
import { Button, Modal } from 'flowbite-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SearchModal() {
  const [openModal, setOpenModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchTime, setFetchTime] = useState(null) // State for fetch time
  const [resultCount, setResultCount] = useState(0) // State for result count

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery) {
        setResults([]) // Clear results if query is empty
        setResultCount(0)
        setFetchTime(null)
        return
      }

      setLoading(true)
      const startTime = performance.now() // Start timer
      const response = await fetch(
        `https://cdn.healthcareinternational.in/wp-json/custom/v1/search?search=${searchQuery}`
      )
      const data = await response.json()
      const endTime = performance.now() // End timer
      console.log(data)
      setResults(data) // Assuming the response data is an array of results
      setResultCount(data.length) // Set the count of results
      setFetchTime((endTime - startTime).toFixed(2)) // Calculate and set fetch time in milliseconds
      setLoading(false)
    }

    const debounceTimer = setTimeout(() => {
      fetchResults()
    }, 300) // Adjust the debounce time as needed

    return () => clearTimeout(debounceTimer) // Cleanup the timer
  }, [searchQuery]) // Fetch results when searchQuery changes

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="text-black focus:ring-0"
      >
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
      </Button>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        position="top-center"
        className="pt-4"
      >
        <div className="flex items-center justify-between relative top-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center absolute bottom-2 right-0"
            onClick={() => setOpenModal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <Modal.Body className="w-full p-2">
          <div>
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 w-full"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            {loading ? (
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                {/* <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div> */}
              </div>
            ) : (
              <>
                {resultCount > 0 && (
                  <p className="mt-2 border-b-2 mb-6">
                    Total <span className="font-semibold">{resultCount}</span>{' '}
                    results in{' '}
                    <span className="font-semibold">{fetchTime}</span> ms.
                  </p> // Show fetch time and count
                )}
                {results.length > 0 ? (
                  <ul>
                    {results.slice(0, 6).map((result, index) => (
                      <li key={index}>
                        <Link
                          // href={`/${result.categories[0].slug}/${result.slug}`}
                          href={`/${result.slug}`}
                          className="p-2 border-b flex justify-between"
                        >
                          {result.title}{' '}
                          <span className="bg-pink-600 text-white text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300 right-0">
                            {result.categories[0].name}
                            {/* {result.slug} */}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  searchQuery && <p>No results found.</p> // Show only if searchQuery is not empty
                )}
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
