<template>

<div class="online-app-wrapper">
    <form @submit.prevent="">
        <div class="input-wrapper">

            <h4>Personal data</h4>
            <v-text-field v-model="surname" class="w-100" density="compact" label="Surname" type="text" id="lastname"></v-text-field>

            <v-text-field v-model="familyName" class="w-100" density="compact" label="Family name(s)" type="text" id="familyName"></v-text-field>

            <v-text-field v-model="name" class="w-100" density="compact" label="Names" type="text" id="firstname"></v-text-field>

            <v-text-field v-model="birthday" class="w-100" density="compact" label="Birthday (format dd/mm/yyyy ex. 31/01/2024)" type="text" id="birthday"></v-text-field>

            <v-text-field v-model="placeOfBirth" class="w-100" density="compact" label="Place of birth" type="text" id="place-of-birth"></v-text-field>

            <v-text-field v-model="countryOfBirth" class="w-100" density="compact" label="Country of birth" type="text" id="country-of-birth"></v-text-field>

            <v-text-field v-model="citizenshipHeld" class="w-100" density="compact" label="Citizenship Held" type="text" id="citizenship-held"></v-text-field>

            <div class="radio-wrapper">
                <label for="sex">Sex</label>
                <div>
                    <label for="male">Male</label>
                    <input v-model="sex" type="radio" id="male" name="sex">
                </div>
                <div>
                    <label for="female">Female</label>
                    <input v-model="sex" type="radio" id="female" name="sex">
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
  
            <v-text-field class="w-100" density="compact" label="National identification number (if applicable)" type="text" id="id-number"></v-text-field>

        </div>
        <div class="input-wrapper">

            <h4>Travel document information</h4>
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
            </div>

            <v-text-field class="w-100" density="compact" label="Other travel document (please specify)" type="text" id="other-travel-doc" name="travel-doc"></v-text-field>
            
            <v-text-field class="w-100" density="compact" label="Travel document number" type="text" id="travel-id"></v-text-field>

            <v-text-field class="w-100" density="compact" label="Release date (format dd/mm/yyyy ex. 31/01/2024)" type="text" id="release-date"></v-text-field>

            <v-text-field class="w-100" density="compact" label="Valid until" type="text" id="valid-date"></v-text-field>

            <v-text-field class="w-100" density="compact" label="Released by" type="text" id="released-by"></v-text-field>

            </div>
        
            <div class="input-wrapper">
                <h4>Guardian information</h4>
                <v-switch color="green" class="color-black" label="If applicable" id="guardian" v-model="showGuardianContent"></v-switch>

                <div v-if="showGuardianContent" class="w-100">

                    <v-text-field class="w-100" density="compact" label="Citizenship" type="text" id="citizenship"></v-text-field>

                    <v-text-field class="w-100" density="compact" label="Name" type="text" id="name"></v-text-field>

                    <v-text-field class="w-100" density="compact" label="Surname" type="text" id="surname"></v-text-field>
                    
                    <v-text-field class="w-100" density="compact" label="Country" type="text" id="country"></v-text-field>

                    <v-text-field class="w-100" density="compact" label="State/Province" type="text" id="state"></v-text-field>

                    <v-text-field class="w-100" density="compact" label="Town" type="text" name="" id="town"></v-text-field>

                    <v-text-field class="w-100" density="compact" label="Zip code" type="text" id="zip-code"></v-text-field>
      
                    <v-text-field class="w-100" density="compact" label="Address" type="text" id="address"></v-text-field>

                </div>

            </div>

            <div class="input-wrapper">
               <h4>Contact details - Home address and e-mail address of the via applicant</h4>
               
                <v-text-field class="w-100" density="compact" label="Country" type="text" id="country"></v-text-field>

                <v-text-field class="w-100" density="compact" label="State/Province" type="text" id="state"></v-text-field>

                <v-text-field class="w-100" density="compact" label="Town" type="text" name="" id="town"></v-text-field>

                <v-text-field class="w-100" density="compact" label="Zip code" type="text" id="zip-code"></v-text-field>
      
                <v-text-field class="w-100" density="compact" label="Address" type="text" id="address"></v-text-field>

                <v-text-field class="w-100" density="compact" label="E-mail" type="text" id="e-mail"></v-text-field>

                <v-text-field class="w-100" density="compact" label="Directional number" type="text" id="directional"></v-text-field>

                <v-text-field class="w-100" density="compact" label="Phone" type="text" id="phone"></v-text-field>

            </div>

            <div class="input-wrapper">
                <h4>Agreements</h4>
 
                <div class="consents-style">
                    <input type="checkbox" id="cons-1">
                    <label for="cons-1">I am aware that in the event of a visa refusal, the processing fee is non-refundable.<span class="red">*</span></label>
                </div>
                <div class="consents-style">
                    <input type="checkbox" id="cons-2">
                    <label for="cons-2">Applies to the application for a multiple-entry national visa: I am aware that for the first stay and subsequent visits to the territory of the Republic of Poland, it is necessary to have adequate health insurance within the meaning of the regulations on health care services financed from public funds or travel medical insurance.<span class="red">*</span></label>
                </div>
                <div class="consents-style">
                    <input type="checkbox" id="cons-3">
                    <label for="cons-3">I declare that, to the best of my knowledge, all the detailed information submitted by me is correct and complete. I am aware that the submission of an application and/or supporting documents containing false personal data or false information, a false statement or concealment of the truth, or, in order to pass it off as authentic, the forgery or alteration of a document or the use of such a document as authentic will result in the refusal of a national visa, or annulment of a national visa already issued; It may also result in criminal consequences for me under Polish law. I undertake to leave the territory of the Republic of Poland no later than on the last day of the period of stay to which the national visa issued to me entitles. I am aware that having a national visa is only one of the conditions for entering the territory of the Republic of Poland. Obtaining a national visa does not mean that I am entitled to compensation if I am denied the right to enter the territory of the Republic of Poland as a result of not meeting the entry conditions set out in the Act on Foreigners. The conditions to be met upon entry will be checked again at the time of entering the territory of the Republic of Poland. I am aware that a national visa that has already been issued may be revoked if I no longer meet the conditions for its issuance.<span class="red">*</span></label>
                </div>
                <div class="consents-style">
                    <input type="checkbox" id="cons-4">
                    <label for="cons-4">I consent to the processing of my personal data, included in the e-Consulate registration form, in accordance with Article 6(1)(a) of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (GDPR),  by the Ministry of Foreign Affairs, with its registered office in Warsaw, Al. J. Ch. Szucha 23. At the same time, I declare that I have read the information posted on the website.<span class="red">*</span></label>
                </div>
                <button @click="modifyPDF" type="submit">Submit</button> 
               
            </div>

            <v-snackbar v-model="snackbarAgreements" :timeout="timeout">
                Please select all necessary agreements!
            </v-snackbar>

            <v-snackbar v-model="snackbarData" :timeout="timeout">
                Please complete all required fields!
            </v-snackbar>

      <v-snackbar v-model="snackbarDate" :timeout="timeout">
        Date format incorrect!
      </v-snackbar>

            <div>  
        </div>
    </form>
</div>

</template>

<script>
    import { PDFDocument } from 'pdf-lib'

    export default {
        data() {
            return {
                name: '',
                surname: '',
                familyName: '',
                birthday: '',
                placeOfBirth: '',
                countryOfBirth: '',
                citizenshipHeld: '',
                citizenshipAtBirth: '',
                sex: '',
                showGuardianContent: false,
                pdfFile: null,
                snackbarAgreements: false,
                timeout: 3500,
                snackbarData: false,
              snackbarDate: false,
                rules: {
                  required: value => !!value || 'Field is required',
                },
            }
        },
        methods: {
            async modifyPDF() {

                if(this.validateForm() === false) return;
                
                const path = '/wniosekedited.pdf';
                const existingPDF = await fetch(path).then(res => res.arrayBuffer());
                const pdfDoc = await PDFDocument.load(existingPDF);
                const form = pdfDoc.getForm();

                // set pdf with data

                const surnameField = form.getTextField('1');
                surnameField.setText(this.surname);

                const familyNameField = form.getTextField('2');
                familyNameField.setText(this.familyName);

                const nameField = form.getTextField('3');
                nameField.setText(this.name);

                const birthdayField = form.getTextField('4');
                birthdayField.setText(this.birthday);

                const placeOfBirthField = form.getTextField('5');
                placeOfBirthField.setText(this.placeOfBirth);

                const countryOfBirthField = form.getTextField('6');
                countryOfBirthField.setText(this.countryOfBirth);

                const citizenshipHeldField = form.getTextField('7');
                citizenshipHeldField.setText(this.citizenshipHeld);

                // if (this.sex === 'Female') {
                //     const sexField = form.getRadioGroup('8')
                //     sexField.setText(this.sex)
                // } else {
                //     const sexField = form.getRadioGroup('8')
                //     sexField.setText(this.sex);
                // }

                pdfDoc.setTitle('visaApplication');
                const bytes = await pdfDoc.save();
                const blob = new Blob([bytes], { type: 'application/pdf' });
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = 'visaApplication.pdf';
                downloadLink.click();
            },
            validateForm() {
              const dataReg = RegExp("^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$");

              if (!dataReg.test(this.birthday)) {
                this.snackbarDate = true;
                return false;
              }
                if(this.name === '' || this.surname === '' || this.familyName === '' || this.birthday === '' || this.placeOfBirth === '' || this.countryOfBirth === '' || this.citizenshipHeld === '' || this.sex === '') {
                    this.snackbarData = true;
                    return false;
                }

                if (document.getElementById("cons-1").checked === false || document.getElementById("cons-2").checked === false || document.getElementById("cons-3").checked === false || document.getElementById("cons-4").checked === false ) {
                    this.snackbarAgreements = true;
                    return false;
                }
                return true;
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

h4 {
    padding-bottom: 10px;
}

.consents-style{
    display: flex;
    align-items:first baseline;
    gap: 10px;
    color: #6d6c6cc2;
    padding-bottom: 10px;
}
.consents-style > label {
    font-weight: 300;
}

.red {
    color: red;
}
</style>