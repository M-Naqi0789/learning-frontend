// redux 
// one shared place storing important stuff



// why redux exists

// react state is local
// once multiple pages need the same data,
// passing props becomes difficult

// redux is for:
// user
// auth
// settings
// anything that shouldn’t reset when you change pages


// the basic idea

// UI does something
// you dispatch an action
// a reducer changes the state
// the store holds the new state
// UI re-renders

// no one touches the state directly
// everything goes through actions

// store
// the big box holding all global data

// state
// the actual data inside the store

// action
// a simple object saying what happened
// { type: "cart/add", payload: item }

// reducer
// function that takes old state + action
// returns new state
// never mutates, always copies

// redux toolkit (RTK)

// this is the only way redux should be used now

// createSlice
// defines state + reducers together

// configureStore
// creates the store
// adds middleware
// sets up devtools

// immer
// lets you mutate state
// but actually makes safe copies behind the scenes

// connecting to react

// <Provider store={store}>
// wraps the app

// useSelector()
// read data from the store

// useDispatch()
// send actions

// async stuff (for api calls)

// createAsyncThunk
// handles calling APIs
// gives pending / fulfilled / rejected

// extraReducers
// reducers that listen to async results

// middleware

// code that runs between dispatch and reducer
// used for async, logging, debugging
// thunk is already included in RTK

// structuring redux

// slice per feature
// authSlice
// cartSlice
// userSlice
// don’t put everything in one file

// when redux makes sense

// when data is:
// used on many screens
// shared between unrelated components
// must survive navigation

// when it doesn’t

// form inputs
// modals
// toggle buttons
// anything local to one screen


// redux vs zustand

// redux = strict, predictable, big apps
// zustand = simple, fast, most projects

