import {Search} from 'lucide'

function RecordTable() {
  return (
    <div className="nin-h-screen bg-gray-500 p-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-gray-300 rounded-b-lg shadow-md p-8 mb-8">
                <h1 className="text-3xl font-bold text-gray-700">Employee Management</h1>
                <p className="text-gray-800">
                    {" "}
                    Manage employee records with Reduc Toolkit
                </p>
            </div>

            <div className="bg-blue-200 rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className='absolute left-3top-1/2 transform -translate-y-1/2 text-orange-50 size={20}' />
                        <input type="text" placeholder="Search by name" 
                        className="w-fit pl-10 pr-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                         />
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecordTable