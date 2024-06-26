<script lang="ts">
	import { writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsSearch } from 'svelte-icons-pack/bs';

	let query = writable('');

	const handleInput=(event:Event) =>{
		const input = event.target as HTMLInputElement;
		query.set(input.value);
	}
</script>

<div
	class="px-3 flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-[#FFFFFF] text-[#6B7280]"
>
	<Icon src={BsSearch} />
	<input type="text" placeholder="Search" class="input variant-filled" on:input={handleInput} />
</div>
