function MyEvent() {
    this._events = Object.create(null)
}

MyEvent.prototype.on = function(event, callback) {
    if (this._events[event]) {
        this._events[event].push(callback)
    } else {
        this._events[event] = [callback]
    }
}

MyEvent.prototype.emit = function(event, ...args) {
    if (this._events && this._events[event].length) {
        this._events[event].forEach(function(callback) {
            callback.call(this, ...args)
        })
    }
}

MyEvent.prototype.off = function(event, callback) {
    if (this._events && this._events[event]) {
        this._events[event] = this._events[event].filter(item => item !== callback && item.link !== callback)
    }
}

MyEvent.prototype.once = function(event, callback) {
    const wrapperFn = function(...args) {
        callback.call(this, ...args)
        this.off(event, wrapperFn)
    }
    wrapperFn.link = callback
    this.on(event, wrapperFn)
}