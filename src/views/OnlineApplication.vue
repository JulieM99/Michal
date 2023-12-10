<template>

<div class="online-app-wrapper">
    <form @submit.prevent="">
        <div class="input-wrapper">
            <label for="firstname">Names</label>
            <input type="text" id="firstname">
        </div>
        <div class="input-wrapper">
            <label for="lastname">Surname</label>
            <input type="text" id="lastname">
        </div>
        <div class="input-wrapper">
            <label for="birthday">Birthday</label>
            <input type="text" id="birthday">
        </div>
        <div class="input-wrapper">
            <label for="place-of-birth">Place of birth</label>
            <input type="text" id="place-of-birth">
        </div>
        <div class="input-wrapper">
            <label for="country-of-birth">Country of birth</label>
            <input type="text" id="country-of-birth">
        </div>
        <div class="input-wrapper">
            <label for="citizenship-held">Citizenship held</label>
            <input type="text" id="citizenship-held">
        </div>
        <div class="input-wrapper">
            <label for="citizenship-at-birth">Citizenship at birth (if different)</label>
            <input type="text" id="citizenship-at-birth">
        </div>
        <div class="input-wrapper">
            <label for="sex">Sex</label>
            <label for="male">Male</label>
            <input type="checkbox" id="male">
            <label for="female">Female</label>
            <input type="checkbox" id="female">
        </div>
        
        <button type="submit">Submit</button>
    </form>
</div>

</template>

<script>

</script>

<style scoped>
.online-app-wrapper {
    max-width: 60%;
    margin-top: 1rem;
}

.input-wrapper {
    padding: 2rem 1rem;
    border: 1px solid grey;
    border-radius: 10px;
    margin-top: 1rem;
}
</style>