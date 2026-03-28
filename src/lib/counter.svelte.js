class CounterStore {
    count = $state(0);

    increment() {
        this.count += 1;
    }

    reset() {
        this.count = 0;
    }
}

export const myCounter = new CounterStore();
