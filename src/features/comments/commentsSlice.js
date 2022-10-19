import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsApi from "./commentsApi";


const initialState = [

    // {
    //     _id: "632d6d51a5d190614c0a4ead",
    //     comment: "buen viaje",
    //     user: {
    //         name: "Aguh",
    //         photo: "https://pbs.twimg.com/profile_images/1468801620821483521/hStJB4ET_400x400.jpg"
    //     }
    // },
    // {
    //     _id: "6332cb4e5406ec9c76f14ecd",
    //     comment: "comentario 1",
    //     user: {
    //         name: "Aguh2",
    //         photo: "https://preview.redd.it/1tvg29e1bft71.jpg?auto=webp&s=b183de770615fd7f8cbea8816f41a78b9ef842c3"
    //     }
    // },
    // {
    //     _id: "6332d43e5406ec9c76f15177",
    //     comment: "hola",
    //     user: {
    //         name: "Aguh2",
    //         photo: "https://preview.redd.it/1tvg29e1bft71.jpg?auto=webp&s=b183de770615fd7f8cbea8816f41a78b9ef842c3"
    //     }
    // }

    {
        _id: "633c5cf9bfdb13bdc89c4c44",
        user: {
            _id: "633c46de997143590bb800ad",
            name: "Comprador",
            mail: "comprador@gmail.com",
            photo: "https://pbs.twimg.com/profile_images/1468801620821483521/hStJB4ET_400x400.jpg",
        },
        comment: "Cuanto seria el envio de 4 cajones hasta San Nicolas?",
        date: "24.10.2022",
        seller: {
            _id: "633c4795997143590bb800ae",
            name: "Vendedor",
            mail: "vendedor@gmail.com",
            photo: "https://preview.redd.it/1tvg29e1bft71.jpg?auto=webp&s=b183de770615fd7f8cbea8816f41a78b9ef842c3",
        },
        response: "El envio serian 1600$ por comisionista"
    },
    {
        _id: "633c5cf9bfdb13bdc89c4c45",
        user: {
            _id: "633c46de997143590bb800as",
            name: "Comprador",
            mail: "comprador@gmail.com",
            photo: "https://pbs.twimg.com/profile_images/1468801620821483521/hStJB4ET_400x400.jpg",
        },
        comment: "Y en cuanto tiempo llega?",
        date: "24.10.2022",
        seller: {
            _id: "633c4795997143590bb800ar",
            name: "Vendedor",
            mail: "vendedor@gmail.com",
            photo: "https://preview.redd.it/1tvg29e1bft71.jpg?auto=webp&s=b183de770615fd7f8cbea8816f41a78b9ef842c3",
        },
        response: "4 horas despues de abrir el mercado, si compras ahora mañana a las 7am te estaria llegando"
    },
    {
        _id: "633c5cf9bfdb13bdc89c4c46",
        user: {
            _id: "633c46de997143590bb800au",
            name: "Comprador",
            mail: "comprador@gmail.com",
            photo: "https://pbs.twimg.com/profile_images/1468801620821483521/hStJB4ET_400x400.jpg",
        },
        comment: "Listo",
        date: "24.10.2022",
    }

]


export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload)
        },
        addResponse: (state, action) => {
            const { _id, response, seller } = action.payload
            const foudComment = state.find(comment => comment._id === _id)
            if (foudComment) {
                foudComment.response = response
                foudComment.seller = seller
            }
        },
        deleteComment: (state, action) => {
            const commentFound = state.find(comment => comment.id === action.payload)
            if (commentFound) {
                state.splice(state.indexOf(commentFound), 1)
            }
        }

    }
})

export const { addComment, deleteComment, addResponse } = commentsSlice.actions
export default commentsSlice.reducer