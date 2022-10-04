import { BehaviorSubject } from 'rxjs';
import { writable } from 'svelte/store';

class Cubit {

    states = null;
    actions = null;
    context = null;
    initial = null;
    context = null;

    stream = writable();

    constructor(initial = null) {
        this.initial = initial;
        this.stream.set(initial);
    }

    emit(newState = null, newContext) {
        console.log(`Emitting new state : ${newState}`);
        this.stream.set(newState);
        this.context = newContext;
    }

    setContext(newContext = {}) {
        this.context = newContext;
    }

}

export { Cubit };