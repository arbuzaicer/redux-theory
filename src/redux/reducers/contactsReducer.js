import homeReducer from "./homeReducer";

const initialState = {
  title: "Hello from Contacts Reducer",
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactsReducer;
