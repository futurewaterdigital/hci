'use client'
import React, { useState, useEffect } from 'react'
import { medicalConditions, countryCode } from '@/utils/data' // Assuming you've updated the data to include hospital and doctor mappings
// import { FaFileAlt } from 'react-icons/fa'
import axios from 'axios'
import Link from 'next/link'

function ConsultantForm() {
  const [yourName, setYourName] = useState('')
  const [yourPhone, setYourPhone] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [medicalCondition, setMedicalCondition] = useState('')
  const [hospital, setHospital] = useState('')
  const [doctor, setDoctor] = useState('')
  // const [yourFile, setYourFile] = useState(null)
  const [additionalMessage, setAdditionalMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [post, setPost] = useState('')
  // const [fileName, setFileName] = useState('')
  const [hospitalOptions, setHospitalOptions] = useState([])
  const [doctorOptions, setDoctorOptions] = useState([])
  const [loading, setLoading] = useState(false) // To manage the loading state

  const [filteredCountryCodes, setFilteredCountryCodes] = useState([])
  const [selectedCode, setSelectedCode] = useState('+91')

  // Handle input change for filtering country codes
  const handleCodeInputChange = (e) => {
    const input = e.target.value.toLowerCase()
    const filtered = countryCode.filter(
      (country) =>
        country.name.toLowerCase().includes(input) ||
        country.code.includes(input)
    )
    setFilteredCountryCodes(filtered)
    setSelectedCode(input)
  }

  // Handle selecting a country from the list
  const handleCountrySelect = (code) => {
    setSelectedCode(code)
    setFilteredCountryCodes([]) // Hide the dropdown after selection
  }

  // Regex for email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const customErrors = {
    field: 'yourEmail',
    message: 'Please enter a valid email address.',
  }
  const customDomainErrors = {
    field: 'yourEmail',
    message: 'This email domain is not allowed.',
  }
  const notAllowedDomains = [
    'test.com',
    'sample.com',
    'example.com',
    'testing.com',
    'gmail.co',
    'gmail.c',
    'gmail.',
  ]

  const isValidEmail = (email) => {
    const [, domain] = email.split('@')
    return !notAllowedDomains.includes(domain)
  }

  // Regex for name and phone number validation
  const nameRegex = /^[a-zA-Z\s]*$/
  const nameErrors = {
    field: 'yourName',
    message: 'Invalid character in name',
  }

  const numRegex = /^[0-9]{1,10}$/ // Adjusted to allow up to 10 digits
  const numErrors = {
    field: 'yourPhone',
    message: 'Please enter a valid phone number (up to 10 digits).',
  }

  // Validate the medical condition, hospital, and doctor fields
  // const selectErrors = {
  //   field: 'medicalCondition',
  //   message: 'Please select a speciality.',
  // }
  // const hospitalErrors = {
  //   field: 'hospital',
  //   message: 'Please select a hospital.',
  // }
  // const doctorErrors = {
  //   field: 'doctor',
  //   message: 'Please select a doctor.',
  // }

  // Validate file input
  // const fileErrors = {
  //   field: 'yourFile',
  //   message:
  //     'Please upload a valid file (PDF, JPG, JPEG,PNG) not exceeding 4MB.',
  // }

  const handleTextChange = (e) => {
    const { name, value } = e.target

    if (name === 'yourName') {
      if (!nameRegex.test(value)) {
        setErrors({ [name]: nameErrors.message })
      } else {
        setErrors({})
        setYourName(value)
      }
    }

    if (name === 'yourEmail') {
      if (!emailRegex.test(value)) {
        setErrors({ [name]: customErrors.message })
      } else if (!isValidEmail(value)) {
        setErrors({ [name]: customDomainErrors.message })
      } else {
        setErrors({})
      }
      setYourEmail(value)
    }

    if (name === 'yourPhone') {
      if (!numRegex.test(value)) {
        setErrors({ [name]: numErrors.message })
      } else {
        setErrors({})
        setYourPhone(value)
      }
    }

    if (name === 'additionalMessage') {
      setAdditionalMessage(value)
    }
  }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]

  //   if (!file) {
  //     setErrors({ yourFile: 'Please select a file.' })
  //     setYourFile(null)
  //     return
  //   }

  //   const fileTypes = ['application/pdf', 'image/jpeg', 'image/png']

  //   if (!fileTypes.includes(file.type)) {
  //     setErrors({ yourFile: 'Please select a PDF, DOC, or DOCX file.' })
  //     setYourFile(null)
  //     setFileName('')
  //     return
  //   }

  //   if (file.size > 4 * 1024 * 1024) {
  //     setErrors({ yourFile: 'File size exceeds 4MB limit.' })
  //     setYourFile(null)
  //     setFileName('')
  //   } else {
  //     setErrors({})
  //     setYourFile(file)
  //     setFileName(file.name)
  //   }
  // }

  // Handle change in medical condition
  const handleConditionChange = (condition) => {
    setMedicalCondition(condition)

    const selectedCondition = medicalConditions.find(
      (item) => item.condition === condition
    )

    if (selectedCondition) {
      setHospitalOptions(selectedCondition.hospitals.map((h) => h.name))
      setDoctorOptions([]) // Reset doctors when condition changes
      setHospital('')
      setDoctor('')
    } else {
      setHospitalOptions([])
      setDoctorOptions([])
    }
  }

  // Handle change in hospital
  const handleHospitalChange = (selectedHospital) => {
    setHospital(selectedHospital)

    const selectedCondition = medicalConditions.find(
      (item) => item.condition === medicalCondition
    )

    if (selectedCondition) {
      const selectedHospitalData = selectedCondition.hospitals.find(
        (h) => h.name === selectedHospital
      )

      if (selectedHospitalData) {
        setDoctorOptions(selectedHospitalData.doctors)
      } else {
        setDoctorOptions([])
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const validationErrors = {}
    if (!yourName) validationErrors.yourName = 'Name is required.'
    if (!yourEmail) validationErrors.yourEmail = 'Email is required.'
    if (!yourPhone) validationErrors.yourPhone = 'Phone number is required.'
    if (yourPhone.length > 10)
      validationErrors.yourPhone = 'Phone number cannot exceed 10 digits.'

    // if (!medicalCondition)
    //   validationErrors.medicalCondition = selectErrors.message
    // if (!hospital) validationErrors.hospital = hospitalErrors.message
    // if (!doctor) validationErrors.doctor = doctorErrors.message
    // if (!yourFile) validationErrors.yourFile = fileErrors.message
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setLoading(false) // Stop loading if validation fails
      return
    }

    const formData = new FormData()
    formData.append('yourName', yourName)
    formData.append('yourEmail', yourEmail)
    formData.append('yourPhone', selectedCode + '-' + yourPhone)
    formData.append('medicalCondition', medicalCondition)
    formData.append('hospital', hospital)
    formData.append('doctor', doctor)
    formData.append('additionalMessage', additionalMessage)

    // if (yourFile) {
    //   formData.append('yourFile', yourFile)
    // }

    try {
      const response = await axios.post(
        'https://cdn.healthcareinternational.in/wp-json/contact-form-7/v1/contact-forms/8/feedback',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      setPost(response.data.message)
      console.log(response.data.message)
      console.log(response.data)
      const msg = response.data.status
      if (msg === 'mail_sent') {
        resetForm()
        setLoading(false)
      } else if (msg === 'validation_failed') {
        const fieldErrors = {}
        response.data.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message
        })
        setLoading(false)
        setErrors(fieldErrors)
      } else if (msg === 'mail_failed') {
        setPost('Failed to send request')
        setLoading(false)
      }
    } catch (error) {
      console.error('Error submitting the form!', error)
      setLoading(false)
    } finally {
      setLoading(false) // Stop the loading once the request is done
    }
  }

  const resetForm = () => {
    setYourName('')
    setYourEmail('')
    setYourPhone('')
    setMedicalCondition('')
    setHospital('')
    setDoctor('')
    // setYourFile(null)
    setAdditionalMessage('')
    setErrors({})
  }

  return (
    <div className="w-full mb-20 px-2 lg:px-0">
      <div className="bg-white lg:w-11/12 xl:w-9/12 mx-auto text-center rounded-lg drop-shadow-lg border border-grey-100">
        <h3 className="py-4 lg:text-3xl text-1xl p-4 lg:p-4">
          To Get The Best Treatment Options, Please Provide Details
        </h3>
        <div className="w-full mx-auto p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <input
                  type="text"
                  name="yourName"
                  value={yourName}
                  onChange={handleTextChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                  placeholder="Name"
                />
                {errors.yourName && (
                  <p className="text-red-500 text-start text-[14px]">
                    {errors.yourName}
                  </p>
                )}
              </div>

              <div>
                <div className="flex">
                  {/* Country Code Input */}
                  <div className="w-3/12">
                    <input
                      type="text"
                      name="countryCode"
                      value={selectedCode}
                      onChange={handleCodeInputChange}
                      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 p-4"
                      placeholder="Code"
                    />
                    {filteredCountryCodes.length > 0 && (
                      <div className="absolute z-10 bg-white border border-gray-300 mt-1 lg:w-2/12 max-h-40 overflow-y-auto rounded-md shadow-lg text-start">
                        <ul className="py-2 text-sm text-gray-700">
                          {filteredCountryCodes.map((country) => (
                            <li
                              key={country.code}
                              onClick={() => handleCountrySelect(country.code)}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {country.name} ({country.code})
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div className="relative w-9/12">
                    <input
                      type="tel"
                      name="yourPhone"
                      value={yourPhone}
                      onChange={handleTextChange}
                      maxLength="10"
                      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 p-4"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                {errors.yourPhone && (
                  <p className="text-red-500 text-start text-[14px]">
                    {errors.yourPhone}
                  </p>
                )}
              </div>

              {/* <div>
                <input
                  type="tel"
                  name="yourPhone"
                  value={yourPhone}
                  onChange={handleTextChange}
                  maxLength="10"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                  placeholder="Phone Number"
                />
                {errors.yourPhone && (
                  <p className="text-red-500 text-start text-[14px]">
                    {errors.yourPhone}
                  </p>
                )}
              </div> */}

              <div>
                <input
                  type="email"
                  name="yourEmail"
                  value={yourEmail}
                  onChange={handleTextChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                  placeholder="Email"
                />
                {errors.yourEmail && (
                  <p className="text-red-500 text-start text-[14px]">
                    {errors.yourEmail}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <select
                  id="medicalCondition"
                  value={medicalCondition}
                  onChange={(e) => handleConditionChange(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                >
                  <option value="">Select Speciality</option>
                  {medicalConditions.map((condition) => (
                    <option
                      key={condition.condition}
                      value={condition.condition}
                    >
                      {condition.condition}
                    </option>
                  ))}
                </select>
                {errors.medicalCondition && (
                  <p className="text-red-500 text-start text-[14px]">
                    {errors.medicalCondition}
                  </p>
                )}
              </div>
              <div>
                {/* {hospitalOptions.length > 0 && ( */}
                <div className="mb-4">
                  <select
                    id="hospital"
                    value={hospital}
                    onChange={(e) => handleHospitalChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                    disabled={!hospitalOptions.length}
                  >
                    <option value="">Select Hospital</option>
                    {hospitalOptions.map((hosp) => (
                      <option key={hosp} value={hosp}>
                        {hosp}
                      </option>
                    ))}
                  </select>
                  {/* {errors.hospital && (
                    <p className="text-red-500 text-start text-[14px]">
                      {errors.hospital}
                    </p>
                  )} */}
                </div>
                {/* )} */}
              </div>
              <div>
                <select
                  name="doctor"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                  disabled={!doctorOptions.length}
                >
                  <option value="">Select Doctor</option>
                  {doctorOptions.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
                {/* {errors.doctor && (
                  <p className="text-red-500 text-start text-[14px]">
                    {errors.doctor}
                  </p>
                )} */}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="additionalMessage"
                value={additionalMessage}
                onChange={handleTextChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                placeholder="Additional information"
              />
            </div>
            <div className="grid gap-6 my-6 ">
              <Link
                href="mailto:info@healthcareinternational.in"
                className="text-[15px]"
              >
                For a free medical opinion from global experts, Email your
                updated reports to{' '}
                <Link
                  href="mailto:info@healthcareinternational.in"
                  className="text-blue-600"
                >
                  info@healthcareinternational.in
                </Link>{' '}
                or WhatsApp{' '}
                <Link
                  href="https://wa.me/+919008764954"
                  className="text-blue-600"
                >
                  +91 9008764954
                </Link>
              </Link>
              {/* <div className="relative w-full">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-between w-full h-[53px] mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-200 transition-colors"
                >
                  <span className="pl-4 text-start">
                    {fileName || 'Upload Report'}
                  </span>
                  <FaFileAlt className="text-gray-600 mr-2" size={20} />
                </label>
                {errors.yourFile && (
                  <p className="text-red-500 text-start text-[14px] mt-[-20px]">
                    {errors.yourFile}
                  </p>
                )}
              </div> */}
            </div>

            <div>
              {loading ? (
                <div className="mt-4 w-full text-center">
                  <div className=" bg-gray-200 rounded-lg w-7/12 mx-auto animate-pulse py-2 text-[#D84498] border border-[#D84498]">
                    Please wait...
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className={`text-[#D84498] focus:ring-1 focus:outline-none focus:ring-[#D84498] font-medium rounded-xl text-sm w-full sm:w-auto lg:px-60 sm:px-12 md:px-24 py-2.5 text-center border border-[#D84498] hover:bg-[#D84498] hover:text-white ${
                    loading ? 'bg-gray-200 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Processing...' : 'Submit'}
                </button>
              )}

              {post && (
                <p className="mt-4 text-[15px] text-green-500 text-center">
                  {post}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConsultantForm
