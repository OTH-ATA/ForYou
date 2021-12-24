import React, {useCallback, useState, useContext} from 'react'


export const MainContext = React.createContext({
    theme: undefined,
    setTheme: async (theme) => null,
})

export const useMainContext = () => useContext(MainContext)

export const MainContextProvider = ({children}) => {
    const init = {
        activePage: 1,
        takeout: null,
        category: null,
        orders: null
    }
    const [state, setState] = useState(init)
    const setTakeOut = useCallback(
        (category) => {
            setState(
                {...state, category: category}
            )
        },
        [state, setState],
    );

    const setCategory = useCallback(
        (category) => {
            setState(
                {...state, takeout: category}
            )
        },
        [state, setState],
    );

    const setActivePage = useCallback(
        (page) => {
            setState(
                {...state, activePage: page}
            )
        },
        [state, setState],
    );

    return <MainContext.Provider
        value={{state, setTakeOut, setActivePage, setCategory}}>{children}</MainContext.Provider>
}