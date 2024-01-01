<template>


    <div class="visa-type">
    
        <slot name="head"></slot>
        <slot name="left" class="left-border">

        </slot>
        <slot name="right">

        </slot>

    </div>
    

</template>

<script>

</script>

<style scoped>

.visa-type {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 30px #6d6c6c;
    padding: 20px;
    min-width: 300px;
    max-width: 50%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.left-border {
    border-right: 1px solid black;
}



</style>