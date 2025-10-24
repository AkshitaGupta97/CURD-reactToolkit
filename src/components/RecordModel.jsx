import { X } from 'lucide-react'
import React from 'react'

function RecordModel() {
  return (
    <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
        <div className='bg-amber-100 rounded-lg shadow-2xl max-w-lg w-full max-h-10/12'>
            {/* Header */}
            <div className='flex items-center justify-between p-6 border-b border-amber-200'>
                <h2 className='text-xl font-bold text-amber-900'>
                    Register New record
                </h2>
                <button className='text-gray-500 hover:text-gray-700 transition-all'>
                    <X size={24} />
                </button>
            </div>
            {/* Form field */}
            <div className='p-2 '>
                {/* NAme */}
                <div className='p-2 '>
                    <label className='block font-semibold'>
                        Name *
                    </label>
                    <input type="text" placeholder='Enter Name'
                        className='w-full px-4 py-2 border font-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                {/* email */}
                <div className='p-2'>
                    <label className='block font-semibold'>
                        Email *
                    </label>
                    <input type="email" placeholder='Enter Email'
                        className='w-full px-4 py-2 border font-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                {/* Phone */}
                <div className='p-2'>
                    <label className='block font-semibold'>
                        Phone *
                    </label>
                    <input type="tel" placeholder='Enter Phone no.'
                        className='w-full px-4 py-2 border font-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                {/* Position */}
                <div className='p-2'>
                    <label className='block font-semibold'>
                        Position *
                    </label>
                    <input type="text" placeholder='Enter Position'
                        className='w-full px-4 py-2 border font-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            </div>
            {/* Footer buttons */}
            <div className='flex gap-3 p-6 border-t border-amber-200'>
                <button className='flex-1 px-4 py-2 bg-amber-300 text-gray-800 rounded-lg hover:bg-amber-400 active:scale-90 transition-all font-medium'>
                    Cancel
                </button>
                <button className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 active:scale-90 transition-all font-medium'>
                    Register
                </button>

            </div>
        </div>
    </div>
  )
}

export default RecordModel