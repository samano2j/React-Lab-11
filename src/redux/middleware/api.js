import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

import config from '../../config';
import { supabase } from '../../lib/supabaseClient'

export const getData = createAsyncThunk(
    "inventory/getData",
    async (mode) => {
        if (mode === 'name') {
            const { data, error } = await supabase
            .from(config.tableName)
            .select('*')
            .order('name', { ascending: true})

            if (error) {
                toast.error(error.message)
                return []
            }

            return data
        }
        else if (mode === 'quantity') {
            const { data, error } = await supabase
            .from(config.tableName)
            .select('*')
            .order('quantity', { ascending: false})


            if (error) {
                toast.error(error.message)
                return []
            }

            return data
        }
        else {
            const { data, error } = await supabase
                .from(config.tableName)
                .select('*')
                .order('created_at', { ascending: true })

            if (error) {
                toast.error(error.message)
                return []
            }

            return data
        }
    }
)

export const getDataById = createAsyncThunk(
    "inventory/getDataById",
    async (id) => {
        const { data, error } = await supabase
            .from(config.tableName)
            .select('*')
            .eq('id', id)
            .single()

        if (error) {
            toast.error(error.message)
            return []
        }

        return data
    }
)

export const getDataByName = createAsyncThunk(
    "inventory/getDataByName",
    async (id) => {
        const { data, error } = await supabase
            .from(config.tableName)
            .select('*')
            .order('name', { ascending: true})

        if (error) {
            toast.error(error.message)
            return []
        }

        return data
    }
)


export const getDataByQuantity = createAsyncThunk(
    "inventory/getDataByQuantity",
    async (id) => {
        const { data, error } = await supabase
            .from(config.tableName)
            .select('*')
            .order('quantity', { ascending: false})


        if (error) {
            toast.error(error.message)
            return []
        }

        return data
    }
)
