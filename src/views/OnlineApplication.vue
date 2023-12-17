<template>

<div class="online-app-wrapper">
    <form @submit.prevent="">
        <div class="input-wrapper">
            <label for="firstname">Names</label>
            <input type="text" id="firstname">

            <label for="lastname">Surname</label>
            <input type="text" id="lastname">

            <label for="birthday">Birthday</label>
            <input type="text" id="birthday">

            <label for="place-of-birth">Place of birth</label>
            <input type="text" id="place-of-birth">

            <label for="country-of-birth">Country of birth</label>
            <input type="text" id="country-of-birth">

            <label for="citizenship-held">Citizenship held</label>
            <input type="text" id="citizenship-held">
 
            <label for="citizenship-at-birth">Citizenship at birth (if different)</label>
            <input type="text" id="citizenship-at-birth">

            <div class="radio-wrapper">
                <label for="sex">Sex</label>
                <div>
                    <label for="male">Male</label>
                    <input type="radio" id="male" name="sex">
                </div>
                <div>
                    <label for="female">Female</label>
                    <input type="radio" id="female" name="sex">
                </div>
            </div>
            
            <div class="radio-wrapper">
                <label for="status">Marital status</label>
                <div>
                    <label for="single">Single</label>
                    <input type="radio" id="single" name="status" value="single">
                </div>
                <div>
                    <label for="married">Married</label>
                    <input type="radio" id="married" name="status" value="married">
                </div>
                <div>
                  <label for="separate">Separate</label>
                    <input type="radio" id="separate" name="status" value="separate">  
                </div>
                <div> 
                    <label for="divorced">Divorced</label>
                    <input type="radio" id="divorced" name="status" value="divorced">
                </div>
                <div>
                    <label for="widowed">Widowed</label>
                    <input type="radio" id="widowed" name="status" value="widowed">
                </div>
                <div>
                    <label for="other">Other</label>
                    <input type="radio" id="other" name="status" value="other">
                </div>
            </div>
  
            <label for="id-number">National identification number (if applicable)</label>
            <input type="text" id="id-number">

            <div class="radio-wrapper">
                <label for="travel-doc">Type of travel document</label>
                <div>
                    <label for="regular-passport">Regular passport</label>
                    <input type="radio" id="regular-passport" name="travel-doc" value="regular-passport">
                </div>
                <div>
                    <label for="diplomatic-passport">Diplomatic passport</label>
                    <input type="radio" id="diplomatic-passport" name="travel-doc" value="diplomatic-passport">
                </div>
                <div>
                    <label for="serice-passport">Service passport</label>
                <input type="radio" id="serice-passport" name="travel-doc" value="service-passport">
                </div>
                <div>
                    <label for="official-passport">Official passport</label>
                    <input type="radio" id="official-passport" name="travel-doc">
                </div>
                <div>                
                    <label for="special-passport">Special passport</label>
                    <input type="radio" id="special-passport" name="travel-doc" value="special-passport">
                </div>
                <div>
                    <label for="other-travel-doc">Other travel document (please specify)</label>
                    <input type="text" id="other-travel-doc" name="travel-doc">
                </div>
            </div>
             
            <button type="submit">Submit</button>  
            </div>
            <div>  
        </div>
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
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    
}

.input-wrapper {
    padding: 2rem 1rem;
    border-radius: 10px;
    margin-top: 1rem;
    border-color: #09033d8e;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 70ch;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 30px #6d6c6c;
}

input[type="text"] {
    margin-bottom: 1.2rem;
    border-radius: 3px;
    border: 1px solid #707070;
    width: 100%;
    padding: 5px 10px;
}

.radio-wrapper {
    display: flex;
    margin-bottom: 1.2rem;
    flex-direction: column;

}
.radio-wrapper > div {
    display: flex;
    gap: 5px;
}

.radio-wrapper > div > label {
    font-weight: normal;
}

label {
    font-weight: 600;
    margin-bottom: 0.2rem;
}

button {
    padding: 10px 20px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    border: 0;
    background-color: rgba(90, 142, 102, 0.379);
    transition: background-color 0.2s ease-in-out;
}
button:hover{
    background-color: rgba(90, 142, 102, 0.174);
}

</style>