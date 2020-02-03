const initState = () => {
    const itemlist = [
        {key: 0, itemname: "Bread", value: 30, leftcount: 20},
        {key: 1, itemname: "Butter", value: 40, leftcount: 20},
        {key: 2, itemname: "Meat", value: 50, leftcount: 20}
    ];

    const resultlist = itemlist.map((item, key) => { return {key, itemcount: 0} });
    let state = {};
    state.itemlist = [...itemlist];
    state.resultlist = [...resultlist];
    state.total = 0;
    state.completed = false;
    return state;
}

function rootReducer(state=null, action) {
    if (state == null) {
        state = initState();
    }
    let tempstate = {
        ...state
    }
    tempstate.completed = false;
    switch (action.type) {
        case "CHECK":
            if (tempstate.itemlist[action.index].leftcount > 0)
            {
                tempstate.itemlist[action.index].leftcount--;
                tempstate.resultlist[action.index].itemcount++;
                tempstate.total += tempstate.itemlist[action.index].value;
            }
            return tempstate;
        case "FILL":
            tempstate.completed = true;
            tempstate.itemlist[action.index].leftcount = 20;
            return tempstate;
        default:
            return tempstate;
    }
}

export default rootReducer;