import {Plus, Search} from 'lucide-react'

function RecordTable() {
  return (
    <div className="nin-h-screen bg-gray-500 p-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-gray-300 rounded-b-lg shadow-md p-8 mb-8">
                <h1 className="text-3xl font-bold text-gray-700">Employee Management</h1>
                <p className="text-gray-800 font-semibold m-auto">
                    {" "}
                    Manage employee records with Reduc Toolkit
                </p>
            </div>

            {/*Input add */}
            <div className="bg-blue-100 rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 size={20}' />
                        <input type="text" placeholder="Search by name" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                         />
                    </div> 
                    <button className='flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-2 active:scale-90 rounded-lg hover:bg-blue-800'>
                        <Plus size={20} /> Add New Record
                    </button> 
                </div>
            </div>

            {/* Employee table */}
            <div className='bg-gray-300 rounded-lg shadow-md overflow-hidden'>
                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <tr>
                            <th className='px-6 py-4 tetx-left text-xl font-semibold text-gray-800 uppercase'>
                                ID
                            </th>
                            <th className='px-6 py-4 tetx-left text-xl font-semibold text-gray-800 uppercase'>
                                Name
                            </th>
                            <th className='px-6 py-4 tetx-left text-xl font-semibold text-gray-800 uppercase'>
                                E-mail
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
           

        </div>
    </div>
  )
}

export default RecordTable