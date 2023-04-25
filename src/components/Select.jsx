const Select = ({ register, errors, label, optionsMap, registerOptions = null }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <select
                className='select select-bordered w-full capitalize'
                {...register(label)}
            >
                <option value=''>Select a category</option>
                {optionsMap.map((opt) => (
                    <option key={opt.id} value={opt.value}>{opt.value}</option>
                ))}
            </select>
            {errors[label] && (
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors[label].message}</span>
                </label>
            )}
        </div>
    )
}

export default Select