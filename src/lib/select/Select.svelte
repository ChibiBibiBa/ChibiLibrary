<!--
@component Select
### Made for purpose of styling default HTML select
@param defaultText - text displayed when no value has been selected
@param selectedOptionIndex - bindable variable to view or modify currently selected option
@param selectedOption - bindable readonly variable to read selected option
@param controller - instance of SelectController class, used for advanced Select manipulation
@param children - can take anything but unless children are 'Option' components doesn't work properly
@export Reset() - sets currentOption to '-1' which is default value
@export SetOption(number) - sets currentOption to number 
#### Example usage:
```svelte
  <script>
    // Should be set to '-1' to avoid unholy behaviour
    let SelectedOptionIndex = $state(-1);
    let SelectedOption = $state("");
  <script>

  <Select bind:selectedOptionIndex={SelectedOption} bind:selectedOption={SelectedOption}>
      <Option name="option1"></Option>
      <Option name="option2"></Option>
      <Option name="option3"></Option>
      <Option name="option4"></Option>
    </Select>
```
-->

<script lang="ts">
	import { setContext } from 'svelte';
	import SelectController, { type SelectOption } from './SelectController.js';
	import { get, type Writable } from 'svelte/store';

	let {
		defaultText = 'Pick an option',
		selectedOptionIndex = $bindable(-1),
		selectedOption = $bindable(''),
		controller = new SelectController(),
		children
	}: {
		defaultText?: string;
		selectedOptionIndex?: number;
		selectedOption?: string;
		controller?: SelectController;
		children: () => any;
	} = $props();

	let options: Writable<SelectOption[]> = controller.options;
	let currentOption: Writable<number> = controller.currentOption;
	let opened = controller.opened;

	setContext('Select', controller);

	function toggle() {
		$opened = !$opened;
	}

	export function Reset() {
		$currentOption = -1;
	}

	export function SetOption(option: number) {
		if (option < 0 || option > get(options).length) {
			return;
		}
		$currentOption = option;
	}

	$effect(() => {
		selectedOptionIndex = $currentOption;
	});
	$effect(() => {
		if ($currentOption != -1) {
			selectedOption = get(options)[$currentOption].value;
		} else {
			selectedOption = '';
		}
	});
</script>

<div class="select">
	<button class="selectHeader" onclick={toggle}>
		{#if $currentOption === -1}
			{defaultText}
		{:else}
			{$options[$currentOption].name}
		{/if}
	</button>

	<div class="selectBody {$opened ? 'visible' : 'invisible'}">
		{@render children()}
	</div>
</div>

<style>
	.select {
		width: fit-content;
		min-width: 100%;
		position: relative;
	}
	.selectHeader {
		width: 100%;
		height: 100%;
	}
	.selectBody {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 1000;
		background-color: var(--accent);
		transition:
			visibility 0.15s ease,
			opacity 0.15s ease;
	}
	.visible {
		visibility: visible;
		opacity: 1;
	}
	.invisible {
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}
</style>
