<script setup lang="ts">

const color = 'pink';

</script>

<template>
<div>
    <p class="py-5">This button should have pink border when hovering in dark mode:</p>
    <button type="button"
        class="p-3 border-4 border-gray-400"
        :class="[`dark:hover:border-${color}-700`, `focus:border-${color}-700`]"
    >
        Hover me
    </button>
</div>
</template>
