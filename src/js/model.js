export default class Model {
    constructor(callback) {
        if (typeof callback === 'function') {
            const arr = callback.name.split(' ')
            const functionName = arr[arr.length - 1]
            this[functionName] = callback
        }
    }

    set setState(payload) {
        const oldValue = this[payload.property]
        this[payload.property] = payload.value

        const arr = Object.values(this)
            .find((d) => typeof d === 'function')
            .name.split(' ')
        const functionName = arr[arr.length - 1]

        if (oldValue !== payload.value && payload) {
            this[functionName]()
        }
    }
}
