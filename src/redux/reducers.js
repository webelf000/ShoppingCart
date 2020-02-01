function rootReducer(state={}, action) {
    switch (action.type) {
        case 'INITIALIZE':
            const itemlist = [
                {key: 0, itemname: "Bread", value: 30, leftcount: 20},
                {key: 1, itemname: "Butter", value: 40, leftcount: 20},
                {key: 2, itemname: "Meat", value: 50, leftcount: 20}
            ];
        
            const resultlist = itemlist.map((item, key) => { return {key, itemcount: 0} });
            
            state.itemlist = {...itemlist};
            state.resultlist = {...resultlist};
            state.total = 0;
            break;
        case 'CHECK':
            if (state.result[action.index] > 0)
            {
                state.result[action.index]--;
                state.product[action.index].itemcount++;
                state.total += state.itemlist[action.index].value;
            }
            break;
        case 'FILL':
            state.result[action.index] = 20;
            break;
        default:
    }
    return state;
}

export default rootReducer;