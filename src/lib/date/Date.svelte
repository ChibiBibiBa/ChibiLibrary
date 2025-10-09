<script lang="ts">
	let {
		labelText = 'Pick a date',
		value = $bindable(new Date())
	}: { labelText?: string; value?: Date } = $props();

	let opened = $state(false);

	const defaultValue = 'dd.mm.yyyy';

	let internal = $state({
		value: defaultValue
	});

	function toggle() {
		opened = !opened;
	}
</script>

<div class="datePicker">
	<div class="datePickerHeader">
		{internal.value}
		<button onclick={toggle}>open</button>
	</div>
	<div class={opened ? 'visible ' : 'invisible ' + 'datePicker'}>s</div>
</div>

<style>
	.datePicker {
		width: fit-content;
		min-width: 100%;
		height: fit-content;
		position: relative;
	}
	.datePickerHeader {
		width: 100%;
		height: 100%;
	}
	.datePickerBody {
		position: absolute;
		top: 100%;
		left: 0;
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
