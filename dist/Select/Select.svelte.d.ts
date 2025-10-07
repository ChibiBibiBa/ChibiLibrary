import SelectController from './SelectController.js';
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
 * @param selectedOptionIndex - bindable readonly variable to read index of selected option
 * @param selectedOption - bindable readonly variable to read selected option
 * @param controller - instance of SelectController class, used for advanced Select manipulation
 * @param children - can take anything but unless children are 'Option' components doesn't work properly
 * @export Reset() - sets currentOption to '-1' which is default value
 * @export SetOption(number) - sets currentOption to number; also checks if option is within the bounds of options; cannot set the option to -1, for reseting use Select.Reset
 * @export GetControllerInstance() - self explanatory
 * #### Example usage:
 * ```svelte
 *  <script>
 *    // Should be set to '-1' since '-1' is a default value
 *    let SelectedOptionIndex = $state(-1); // contains index of option selected by user
 *    let SelectedOption = $state(""); // contains option selected by user as string
 * let select:Select;
 *
 * <script>
 *
 *  <Select bind:selectedOptionIndex={SelectedOption} bind:selectedOption={SelectedOption} {controller} bind:this={select}>
 *      <Option name="option1"></Option>
 *      <Option name="option2"></Option>
 *      <Option name="option3"></Option>
 *      <Option name="option4"></Option>
 *    </Select>
 * <button onclick={()=>{c.Reset()}}>Reset select</button>
 * ```
 */
declare const Select: import("svelte").Component<$$ComponentProps, {
    Reset: () => void;
    SetOption: (option: number) => void;
    GetControllerInstance: () => SelectController;
}, "selectedOptionIndex" | "selectedOption">;
type Select = ReturnType<typeof Select>;
export default Select;
