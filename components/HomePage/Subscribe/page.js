'use client'
import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import axios from 'axios'

export default function Subscribe() {
  const [openModal, setOpenModal] = useState(false)

  // Form state variables
  const [yourName, setYourName] = useState('')
  const [yourPhone, setYourPhone] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [post, setPost] = useState('')

  // Validation regex patterns
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const nameRegex = /^[a-zA-Z\s]*$/
  const numRegex = /^[0-9]{1,10}$/

  // List of disallowed domains
  const disallowedDomains = [
    'test.com',
    'testing',
    'gmil.com',
    'gamil.com',
    'testing.com',
  ]

  // Form validation
  const validateForm = () => {
    const validationErrors = {}
    if (!yourName || !nameRegex.test(yourName)) {
      validationErrors.yourName = 'Please enter a valid name.'
    }
    if (!yourEmail || !emailRegex.test(yourEmail)) {
      validationErrors.yourEmail = 'Please enter a valid email address.'
    } else if (
      !yourEmail.includes('.') ||
      disallowedDomains.some((domain) => yourEmail.endsWith(domain))
    ) {
      validationErrors.yourEmail =
        'Email address must contain a valid domain (e.g., example.com) and cannot be one of the disallowed domains.'
    }
    if (!yourPhone || !numRegex.test(yourPhone)) {
      validationErrors.yourPhone =
        'Please enter a valid phone number (up to 10 digits).'
    }
    return validationErrors
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const formData = new FormData()
    formData.append('yourName', yourName)
    formData.append('yourEmail', yourEmail)
    formData.append('yourPhone', yourPhone)

    try {
      const response = await axios.post(
        'https://cdn.healthcareinternational.in/wp-json/contact-form-7/v1/contact-forms/50/feedback',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      setPost(response.data.message)
      if (response.data.status === 'mail_sent') {
        resetForm()
        // Show success message for 2 seconds, then close modal
        setTimeout(() => {
          setOpenModal(false)
          setPost('') // clear the success message
        }, 2000)
      } else {
        setErrors({ form: 'Submission failed. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting the form!', error)
    }
  }

  // Reset form fields
  const resetForm = () => {
    setYourName('')
    setYourEmail('')
    setYourPhone('')
    setErrors({})
  }

  return (
    <>
      <div className="relative h-96 flex items-center px-4 md:px-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/subscribe.png')]"></div>
        <div className="absolute inset-0 bg-[#0E56A0] opacity-80"></div>
        <div className="relative flex flex-col items-center text-white lg:w-6/12 mx-auto">
          <h4 className="lg:text-3xl font-bold py-4 font-roboto sxs:text-2xl">
            Subscribe & Stay Updated{' '}
            <hr className="w-28 mx-auto h-1 bg-white" />
          </h4>
          <p className="text-xl text-center py-4 font-thin">
            Get the latest health tips, news, and exclusive offers from
            Healthcare International delivered straight to your inbox
          </p>
          <button
            type="button"
            className="border border-white hover:bg-white hover:text-black font-medium rounded-xl text-[16px] px-8 py-2.5 text-center me-2 mb-2 tracking-widest mt-6"
            onClick={() => setOpenModal(true)}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Modal for subscription form */}
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="bg-black bg-opacity-55 z-40" // Adjust backdrop opacity here
      >
        <Modal.Header>Subscribe & Stay Updated</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
                name="yourName"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
              {errors.yourName && (
                <p className="text-red-600">{errors.yourName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="yourPhone"
                value={yourPhone}
                placeholder="Phone Number"
                maxLength={10}
                onChange={(e) => setYourPhone(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.yourPhone && (
                <p className="text-red-600">{errors.yourPhone}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="yourEmail"
                value={yourEmail}
                placeholder="Email Address"
                onChange={(e) => {
                  setYourEmail(e.target.value)
                  // Validate email on input change
                  if (
                    !emailRegex.test(e.target.value) ||
                    !e.target.value.includes('.') ||
                    disallowedDomains.some((domain) =>
                      e.target.value.endsWith(domain)
                    )
                  ) {
                    setErrors((prev) => ({
                      ...prev,
                      yourEmail:
                        'Email address must contain a valid domain (e.g., example.com) and cannot be one of the disallowed domains.',
                    }))
                  } else {
                    setErrors((prev) => ({
                      ...prev,
                      yourEmail: '',
                    }))
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.yourEmail && (
                <p className="text-red-600">{errors.yourEmail}</p>
              )}
            </div>

            <Button
              type="submit"
              className="text-[#D84498] focus:ring-1 focus:outline-none focus:ring-[#D84498] font-medium rounded-xl text-sm w-full  px-10 py-1 text-center border border-[#D84498] hover:bg-[#D84498] hover:text-white"
            >
              SUBSCRIBE NOW
            </Button>

            {/* Success message */}
            {post && <p className="text-green-600">{post}</p>}

            {/* General error message */}
            {errors.form && <p className="text-red-600">{errors.form}</p>}
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
