import { useEffect, useRef } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { createPortal } from 'react-dom';


export default function Modal({open}){

    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if (open){
            modal.showModal();
        } else {
            modal.close();
        }
    }, [open])


    return (
        createPortal(
        <dialog ref={dialog} className="bg-grey-900 w-3/5 p-6 text-white rounded-xl mt-4 lg:max-w-md">
            <CheckCircleOutlineIcon className='inline-block w-5 h-5 mr-2'/><h2 className='inline-block font-bold text-lg mb-2 align-top'>Message sent!</h2>
            <p className='font-light'>Thanks for completing the form. We'll be in touch soon!</p>
        </dialog>, document.getElementById("modal-root")
    ))
}