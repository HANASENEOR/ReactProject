import produce from 'immer'


const initialState = {
    status:"",
    
    UserChild: {
        id: 0,
        FNAME: "",
        LNAME: "",
        HospitalName: "",
        SickName: "",

    },

    UserVolunteer:{
        id: 0,
        FNAME: "",
        LNAME: "",
        Profession:"",




    }
}

export default Reducers = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_CLASS':
            { state.UserChild = action.payLoad }
            break;
    }

}, initialState)
