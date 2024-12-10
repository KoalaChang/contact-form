import { useContext, useEffect, useState } from "react"
import { UserContext }  from "../store/user-context"
import Input from "./UI/Input"
import Modal from "./UI/Modal";

export default function Form(){
    const userCtx = useContext(UserContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    let error = {}

    function contactAction(formData){
        const data = {
            firstName: formData.get("first-name"),
            lastName: formData.get("last-name"),
            email: formData.get("email"),
            queryType: formData.getAll("query-type"),
            message: formData.get("message"),
            consent: formData.get("consent")
        }
        
        userCtx.updateUserData(data);
        console.log(userCtx.user);

        if (data.firstName.trim().length === 0) {
            error.firstName = "This field is required";
        }

        if (data.lastName.trim().length === 0) {
            error.lastName = "This field is required";
        }

        if (data.email.trim().length === 0 || !data.email.includes('@')) {
            error.email = "Please enter a valid email address";
        }

        if (data.queryType.length === 0) {
            error.queryType = "Please select a query type";
        }

        if (data.message.trim().length < 10 || data.message.trim().length > 300) {
            error.message = "Message must be between 10 and 300 characters";
        }

        if (data.consent === null) {
            error.consent = "To submit this form, please consent to being contacted";
        }

        if (Object.keys(error).length !== 0) {
            userCtx.updateUserError(error);
            return;
        }

        userCtx.updateUserError({});
        userCtx.updateUserData({});
        setModalIsOpen(true);
    }

    useEffect(() => {
        const timer =setTimeout(() => {
            setModalIsOpen(false)}, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [modalIsOpen])

    return (
        <>
        <Modal open={modalIsOpen}/>
        <div className="flex flex-col w-mobile bg-white mx-4 my-8 rounded-xl md:w-tablet ">
            <h1 className="text-3xl text-grey-900 m-6 mb-0 font-bold md:m-10 md:mb-0">Contact Us</h1>
            <form action={contactAction}>

                <div className="text-grey-900 m-6 md:grid md:grid-cols-2 md:gap-4 md:mx-10 md:mt-8">
                    <div>
                        <Input name="first-name" label="First Name" type="text" 
                        error={userCtx.error.firstName && userCtx.error.firstName}
                        defaultValue={userCtx.user.firstName}
                        />
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Input name="last-name" label="Last Name" type="text" 
                        error={userCtx.error.lastName && userCtx.error.lastName}
                        defaultValue={userCtx.user.lastName}
                        />
                    </div>
                </div>

                <div className="m-6 text-grey-900 md:mx-10 md:mt-6">
                    <Input name="email" label="Email Address" type="email" placeholder="example@email.com" 
                    error={userCtx.error.email && userCtx.error.email}
                    defaultValue={userCtx.user.email}
                    />
                </div>

                <fieldset className="m-6 md:grid md:grid-cols-2 md:gap-x-4 md:mx-10 md:mt-6">
                    <legend className="text-grey-900">Query Type<span className="text-green-600"> *</span></legend>
                    <Input name="query-type" id="general-enquiry" value="general-enquiry" label="General Enquiry" radioInput/>
                    <Input name="query-type" id="support-request" value="support-request" label="Support Request" radioInput/>
                    {userCtx.error.queryType && <p className="text-red-error mt-2">{userCtx.error.queryType}</p>}
                </fieldset>

                <div className="text-grey-900 m-6 md:mx-10 md:mt-6">
                    <Input name="message" label="Message" textArea 
                    error={userCtx.error.message && userCtx.error.message}
                    defaultValue={userCtx.user.message}
                    />
                </div>

                <div className="text-grey-900 mx-6 my-10 md:mx-10 md:mt-6">
                    <input type="checkbox" id="consent" name="consent" 
                    className="inline-block mr-4 hover:cursor-pointer form-checkbox text-green-600 outline-none focus:ring-green-600"
                    />
                    <label htmlFor="consent" className="hover:cursor-pointer inline-block w-5/6 align-top">
                        I consent to being contacted by the team <span className="text-green-600">*</span> 
                    </label>
                    {userCtx.error.consent && <p className="text-red-error mt-2">{userCtx.error.consent}</p>}
                </div>

                <div className="bg-green-600 m-6 text-center rounded-lg hover:bg-green-950 md:m-10 md:mt-6">
                    <button className="text-white text-lg py-4 px-24 md:px-64">
                        Submit
                    </button>
                </div>
        
            </form>
        </div>
        </>
    )
}