export default function Input({id, name, label, textArea, radioInput, error, ...props}){
    let inputClass = "w-full border rounded-lg px-3 mt-2 hover:cursor-pointer focus:outline-none focus:border-green-600 focus:ring-green-600";

    if (textArea) {
        inputClass = inputClass + " h-auto";
    } else {
        inputClass = inputClass + " h-12";
    }

    if (error) {
        inputClass = inputClass + " border-red-error";
    } else {
        inputClass = inputClass + " border-grey-500";
    }

    return (
        <>
        {radioInput ? 
            <div className={`${inputClass} leading-10 has-[:checked]:bg-green-200 has-[:checked]:border-green-600`}>
                <input type="radio" name={name} id={id} {...props} className="w-4 h-4 ml-3 align-middle hover:cursor-pointer focus:outline-none text-green-600 focus:ring-green-600"/>
                <label htmlFor={id} className="text-grey-900 text-base align-middle ml-3 hover:cursor-pointer">{label}</label>
            </div> 
            : 
            <>
                <label htmlFor={name} className="text-base block">{label} <span className="text-green-600">*</span></label>
                { textArea ? 
                <textarea rows="5" name={name} {...props} className={inputClass}/> : 
                <input name={name} {...props} className={inputClass}/> 
                }
                {error && <p className="text-red-error mt-2">{error}</p>}
            </>
        }
        </>
    )
}