import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
        const [value, setValue] = useState(() => {
            const valueSave = JSON.parse(localStorage.getItem(key))
            return valueSave? valueSave: initialValue
        })

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);

        return [value, setValue];
}