import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispach => {
    dispach(setItemsLoading());
    axios
        .get('/api/items')
        .then(res => 
            dispach({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};

export const addItem = (item) => dispach => {
    axios
        .post('/api/items', item)
        .then(res => 
            dispach({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};

export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}