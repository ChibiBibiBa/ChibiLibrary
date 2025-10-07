import { writable } from "svelte/store";
export default class SelectController {
    options = writable([]);
    getOptions() {
        return this.options;
    }
    RegisterOption(option) {
        this.options.update((options) => [...options, option]);
    }
    lastKnownId = 0;
    getId() {
        return this.lastKnownId++;
    }
    currentOption = writable(-1);
    setCurrentOption(value) {
        this.currentOption.set(value);
    }
    opened = writable(false);
    closeSelect() {
        this.opened.set(false);
    }
}
