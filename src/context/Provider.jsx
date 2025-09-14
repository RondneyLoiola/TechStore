import AppContest from "./AppContext"

function Provider({children}) {
    return(
        <AppContest.Provider>
            {children}
        </AppContest.Provider>
    )
}

export default Provider
