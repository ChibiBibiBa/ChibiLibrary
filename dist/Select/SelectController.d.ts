import { type Writable } from "svelte/store";
export default class SelectController {
    options: Writable<Array<SelectOption>>;
    getOptions(): Writable<SelectOption[]>;
    RegisterOption(option: SelectOption): void;
    private lastKnownId;
    getId(): number;
    currentOption: Writable<number>;
    setCurrentOption(value: number): void;
    opened: Writable<boolean>;
    closeSelect(): void;
}
export type SelectOption = {
    name: string;
    value: string;
};
