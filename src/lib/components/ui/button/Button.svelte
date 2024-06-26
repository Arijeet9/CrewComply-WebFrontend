<script lang="ts">
    export let text: string;
    export let iconSrc: string | undefined=undefined;
    export let buttonClass: string = 'btn btn-filled-primary';
</script>

<button type="button" class={buttonClass}>
    {#if iconSrc}
    <span>
      <img src={iconSrc} alt="" class="w-5 h-5 object-contain">
    </span>
    {/if}
    <span>{text}</span>
</button>
