import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import config from '../config'
import { supabase } from '../lib/supabaseClient'

import Input from './Input'
import Select from './Select'

const schema = z.object({
    name: z
        .string()
        .min(1, { message: 'Please enter a valid item name' })
        .max(50),
    quantity: z.number({ invalid_type_error: 'Please enter a valid quantity' })
        .min(1, { message: 'Please enter a valid quantity' }),
    category: z
        .string()
        .min(1, { message: 'Please select a category' })
})

const Form = ({ item = null }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema),
        values: item ? {
            name: item.name,
            quantity: item.quantity,
            category: item.category
        } : {}
    })

    const onSubmit = async (data) => {
        if (pathname === '/create') {
            //create
            const { error } = await supabase
                .from('oyatsu')
                .insert([{ ...data }])
                .select()

            if (error) {
                toast.error(error.message)
                return
            }

        } else {
            //update
            const { error } = await supabase
                .from('oyatsu')
                .update({ ...data })
                .eq('id', item.id)

            if (error) {
                toast.error(error.message)
                return
            }
        }




        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='name'
                placeholder='Type a name here'
                register={register}
                errors={errors}
            />

            <Input
                label='quantity'
                type='number'
                placeholder='Type a number here'
                register={register}
                registerOptions={{ valueAsNumber: true }}
                errors={errors}
            />

            <Select
                label='category'
                register={register}
                errors={errors}
                optionsMap={Object.keys(config.categories).map((key) => ({
                    id: crypto.randomUUID(),
                    value: config.categories[key]
                }))}
            />

            <button className={`btn my-5 ${isSubmitting ? 'loading' : ''}`} type='submit'>Submit</button>
        </form>
    )
}

export default Form