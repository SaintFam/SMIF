import React from 'react'
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from 'sonner';

const FormSub = ({ employee, SaveToDatabase }) => {
    return (
        <div className='border border-t border-gray-200 mt-10 pt-6'>
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-4">
                {/** Cancel Button  */}
                <button
                    type="button"
                    onClick={() => {

                    }}
                    className="
            w-full sm:w-44 h-12 rounded-xl border border-[#D89B17] text-[#D89B17] font-semibold flex items-center justify-center gap-2 hover:bg-yellow-50 transition-all duration-300">
                    <IoClose className="text-lg" />
                    Cancel
                </button>
                {/** Save  Button  */}
                <button

                    onClick={SaveToDatabase}
                    type="button"

                    className="
            w-full sm:w-56 h-12 rounded-xl bg-gradient-to-r from-[#E4A11B] to-[#C98500] text-white font-semibold flex items-center justify-center  gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                    <FaSave className="text-lg" />
                    Save
                </button>
            </div>
        </div>
    )
}

export default FormSub