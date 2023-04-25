const config = {
    localStorageKey: "root",
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
    tableName: "oyatsu",
    categories: {
        snacks: "snacks",
        drinks: "drinks"
    }
}

export default config