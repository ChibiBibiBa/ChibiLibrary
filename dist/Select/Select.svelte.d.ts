import SelectController from "./SelectController";
type $$ComponentProps = {
    defaultText?: string;
    selectedOptionIndex?: number;
    selectedOption?: string;
    controller?: SelectController;
    children: () => any;
};
/**
 * Select
 * ### Made for purpose of styling default HTML select
 * @param defaultText - text displayed when no value has been selected
 * @param selectedOptionIndex - bindable variable to view or modify currently selected option
 * @param selectedOption - bindable readonly variable to read selected option
 * @param controller - instance of SelectController class, used for advanced Select manipulation
 * @param children - can take anything but unless children are 'Option' components doesn't work properly
 * @export Reset() - sets currentOption to '-1' which is default value
 * @export SetOption(number) - sets currentOption to number
 * #### Example usage:
 * ```svelte
 * <script>
 *   // Should be set to '-1' to avoid unholy behaviour
 *   let SelectedOptionIndex = $state(-1);
 *   let SelectedOption = $state("");
 * <script>
 *
 * <Select bind:selectedOptionIndex={SelectedOption} bind:selectedOption={SelectedOption}>
 *     <Option name="option1"></Option>
 *     <Option name="option2"></Option>
 *     <Option name="option3"></Option>
 *     <Option name="option4"></Option>
 *   </Select>
 * ```
 */
declare const Select: import("svelte").Component<$$ComponentProps, {
    Reset: () => void;
    SetOption: (option: number) => void;
}, "selectedOptionIndex" | "selectedOption">;
type Select = ReturnType<typeof Select>;
export default Select;
