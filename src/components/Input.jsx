const Input = ({register, errors, type = "text", label, placeholder, registerOptions = null }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className='input input-bordered w-full'
                {...register(label, registerOptions ? registerOptions : { required: true })}
            />
            {errors[label] && (
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors[label].message}</span>
                </label>
            )}
        </div>
    )
}

export default Input