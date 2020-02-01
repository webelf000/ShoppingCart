export function initState() {
    return {
        type : 'INITIALIZE'
    }
}

export function check(index) {
    return {
        type : 'CHECK',
        index
    }
}

export function fill(index) {
    return {
        type : 'FILL',
        index
    }
}