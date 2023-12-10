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
            <input type="radio" id="male" name="sex">
            <label for="female">Female</label>
            <input type="radio" id="female" name="sex">
        </div>
        <div class="input-wrapper">
            <label for="status">Marital status</label>
            <label for="single">Single</label>
            <input type="radio" id="single" name="status" value="single">
            <label for="married">Married</label>
            <input type="radio" id="married" name="status" value="married">
            <label for="separate">Separate</label>
            <input type="radio" id="separate" name="status" value="separate">
            <label for="divorced">Divorced</label>
            <input type="radio" id="divorced" name="status" value="divorced">
            <label for="widowed">Widowed</label>
            <input type="radio" id="widowed" name="status" value="widowed">
            <label for="other">Other</label>
            <input type="radio" id="other" name="status" value="other">
        </div>
        <div class="input-wrapper">
            <label for="id-number">National identification number (if applicable)</label>
            <input type="text" id="id-number">
        </div>
        <div class="input-wrapper">
            <label for="travel-doc">Type of travel document</label>
            <label for="regular-passport">Regular passport</label>
            <input type="radio" id="regular-passport" name="travel-doc" value="regular-passport">
            <label for="diplomatic-passport">Diplomatic passport</label>
            <input type="radio" id="diplomatic-passport" name="travel-doc" value="diplomatic-passport">
            <label for="serice-passport">Service passport</label>
            <input type="radio" id="serice-passport" name="travel-doc" value="service-passport">
            <label for="official-passport">Official passport</label>
            <input type="radio" id="official-passport" name="travel-doc">
            <label for="special-passport">Special passport</label>
            <input type="radio" id="special-passport" name="travel-doc" value="special-passport">
            <label for="other-travel-doc">Other travel document (please specify)</label>
            <input type="text" id="other-travel-doc" name="travel-doc">
        </div>
        <div>
            
        </div>
        
        <button type="submit">Submit</button>
    </form>
</div>

</template>

<script>
    export default {
        data() {
            return {
                name: '',
                surname: '',
                birthday: '',
                placeOfBirth: '',
                countryOfBirth: '',
                citizenshipHeld: '',
                citizenshipAtBirth: '',
                sex: '',
            }
        }
    }
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