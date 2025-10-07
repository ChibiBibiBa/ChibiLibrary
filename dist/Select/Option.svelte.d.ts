type $$ComponentProps = {
    name: string;
    value?: string;
};
/**
 * Option
 * ### Made to be used with 'Select' component
 * @param name - text to be displayed in 'Select'
 * @param value - value to be set, by default set to name
 * #### For example usage go to 'Select' component
 */
declare const Option: import("svelte").Component<$$ComponentProps, {}, "">;
type Option = ReturnType<typeof Option>;
export default Option;
