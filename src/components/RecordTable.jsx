import { Edit2, Plus, Search, Trash2 } from 'lucide-react'
import RecordModel from './RecordModel'

function RecordTable() {
    return (
        <div className="min-h-screen bg-gray-500 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-300 rounded-b-lg shadow-md p-8 mb-8">
                    <h1 className="text-3xl font-bold text-gray-700">Employee Management</h1>
                    <p className="text-gray-800 font-semibold m-auto">
                        {" "}
                        Manage employee records with Reduc Toolkit
                    </p>
                </div>

                {/*Input add */}
                <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-6">
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
                            <thead>
                                <tr>
                                    <th className='px-6 py-4 text-left  font-medium text-gray-800 uppercase'>
                                        ID
                                    </th>
                                    <th className='px-6 py-4 text-left font-medium text-gray-800 uppercase'>
                                        Name
                                    </th>
                                    <th className='px-6 py-4 text-left font-medium text-gray-800 uppercase'>
                                        E-mail
                                    </th>
                                    <th className='px-6 py-4 text-left font-medium  text-gray-800 uppercase'>
                                        Phone
                                    </th>
                                    <th className='px-6 py-4 text-left font-medium text-gray-800 uppercase'>
                                        Position
                                    </th>
                                    <th className='px-6 py-4 text-left font-medium text-gray-800 uppercase'>
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className='divided-y bg-gray-200 divide-gray-200'>
                                {/* Conditional rendering */}
                                <tr className='px-6 py-12 text-center text-gray-500 '>
                                    <td className='font-semibold text-2xl col-span-6'>No Record Found ... </td>
                                </tr>
                                {/* else => map them*/}
                                <tr className='hover:bg-amber-50 transition-colors'>
                                    <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-800'>
                                        1
                                    </td>
                                    <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-800'>
                                        Thomad Rook
                                    </td>
                                    <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-800'>
                                        rook@gmail.com
                                    </td>
                                    <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-800'>
                                        7788-8899-90
                                    </td>
                                    <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-800'>
                                        Full Stack Developer
                                    </td>
                                    <td className='px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-800'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <button className='flex item-center gap-1 bg-blue-700 active:scale-90 text-white px-3 py-1.5 rounded hover:bg-blue-800 transition-all text-sm font-medium'>
                                                <Edit2 size={16} /> Edit
                                            </button>
                                            <button className='flex item-center gap-1 bg-red-500 active:scale-90 text-white px-3 py-1.5 rounded hover:bg-red-700 transition-all text-sm font-medium'>
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* footer for filtered and total records. */}

                    <div className='bg-gray-100 px-6 py-3 border-t border-gray-400'>
                        <p className='font-medium text-gray-900'>
                            Showing Records...
                        </p>
                    </div>
                </div>
            </div>
            {/* Model */}
            <RecordModel />
        </div>
    )
}

export default RecordTable