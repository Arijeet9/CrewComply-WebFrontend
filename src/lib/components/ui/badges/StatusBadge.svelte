<script lang="ts">
	export let rowHovered;
	export let label;
    export let index;
</script>

<div
	class={`p-2 rounded-full text-center text-xs flex items-center gap-1 ${label === 'Active' ? 'text-[#166534] bg-[#DCFCE7]' : `text-[#52525B]  ${rowHovered === index ? 'bg-[#FFFFFF]' : 'bg-[#F4F4F5]'}`} `}
>
	<div class={`w-2 h-2 rounded-full ${label === 'Active' ? 'bg-[#166534]' : `bg-[#52525B]`} `} />
	<div>{label}</div>
</div>
