import React from 'react'
import MainNavbar from '../Header/MainNavbar'
const MainHero = () => {
  return (
   <>
        <div>
       
      <div className="relative z-20">
      <MainNavbar />
      </div>

      <div className="min-h-screen bg-gray-50 z-0">
        
        <div
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

       
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Modern Hospital Management System
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                Streamline your healthcare operations with our comprehensive solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive healthcare management solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-blue-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
                <p className="text-gray-600">Access to qualified healthcare professionals</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-blue-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
                <p className="text-gray-600">State-of-the-art medical equipment</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-blue-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">Efficient appointment booking system</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-blue-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Patient Care</h3>
                <p className="text-gray-600">24/7 dedicated patient support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default MainHero
