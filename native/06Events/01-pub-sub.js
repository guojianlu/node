class PubSub {
    constructor() {
        this._events = {}
    }

    // 注册
    subscribe(event, callback) {
        if (this._events[event]) {
            this._events[event].push(callback)
        } else {
            this._events[event] = [callback]
        }
    }

    // 发布
    publish(event, ...args) {
        const items = this._events[event]
        if (items && items.length) {
            items.forEach(function (callback) {
                callback.call(this, ...args)
            })
        }
    }
}