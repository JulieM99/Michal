<template>

<div class="online-app-wrapper">
    <form @submit.prevent="">
        <div class="input-wrapper">

            <h4>Here you can insert required documents (please select visa type):</h4>

            <div class="d-flex ga-4 justify-center w-100 mt-4">
                <v-btn color="pink" :class="{ enabled:visaC }" @click="showVisaC()">Visa C</v-btn>
                <v-btn color="pink" :class="{ enabled:visaD }" @click="showVisaD()">Visa D</v-btn>
            </div>
            
                   
                    <label for="travel-doc">Travel document</label>
                    <input type="file" id="travel-doc"/>
                    <label for="visa-app">Visa Application</label>
                    <input type="file" id="visa-app" />
                    <label for="photography">Photography</label>
                    <input type="file" id="photography"  @change="(e) => handleFileChange(e, 'photography')"/>
                    <label for="visa-payment">Confirmation od visa payment</label>
                    <input type="file" id="visa-payment" />
                    <label for="travel-insurance">Travel insurance</label>
                    <input type="file" id="travel-insurance" />
                    <label for="supporting-documents">Supporting documents</label>
                    <input type="file" multiple="multiple" id="supporting-documents"/>

                    <v-btn @click="applyForVisa()" color="pink" class="self-center">Apply for Visa</v-btn>
                    

        </div>

        <div v-if="applicationDone" class="input-wrapper">
            
            <span>Your application has been successfully submitted. Your application will be reviewed within the next month. You will receive feedback on the phone number.</span>
            <span>Application number: {{ generateRandomValue() }}</span>
                
        </div>

    </form>

    <v-snackbar v-model="snackbar" :timeout="timeout">
        Please include all required documents!
    </v-snackbar>
    <v-snackbar v-model="snackbarPhotography" :timeout="timeout">
        You provided file with wrong extension in field {{ currentWrongInput }}!
    </v-snackbar>
    <v-snackbar v-model="snackbarVisaApplication" :timeout="timeout">
        You provided wrong Visa Application document!
    </v-snackbar>
    <v-snackbar v-model="snackbarPaymentDocument" :timeout="timeout">
        You provided wrong Payment document!
    </v-snackbar>

</div>

    
    
  </template>
  
  <script>
    export default {
        data() {
            return {
                visaC: false,
                visaD: false,
                applicationDone: false,
                timeout: 3500,
                snackbar: false,
                snackbarPhotography: false,
                snackbarVisaApplication: false,
                randomValue: 0,
                visaApplicationDocument: '',
                photographyDocument: {
                    data:null,
                    inputName: '',
                },
                visaPaymentDocument: '',
                currentWrongInput: '',
            }
        },
        methods: {
            showVisaC(){
                this.visaC = !this.visaC;
                this.visaD = false;
            },
            showVisaD() {
                this.visaD = !this.visaD;
                this.visaC = false;
            },
            applyForVisa() {
                if (!this.validateDocuments()){ return;}
                this.applicationDone = true;
            },
            validateDocuments() {
                if (!this.checkAllFiles()) {
                    this.snackbarPhotography = true;
                    return false;
                }
                if(document.getElementById('travel-doc').files.length === 0 || document.getElementById('visa-app').files.length === 0 || document.getElementById('photography').files.length === 0 || document.getElementById('visa-payment').files.length === 0 || document.getElementById('travel-insurance').files.length === 0 || (this.visaC === false && this.visaD === false)) { 
                    this.snackbar = true;
                    return false;
                }
                return true;
            },
            generateRandomValue(){
                for (var i = 0; i < 12; i++) {
                    this.randomValue += Math.floor(Math.random() * 1000000);
                }
                return this.randomValue;
            },
            getFileExtension(filename) {
                return filename.split('.').pop();
            },
            checkAllFiles() {
                if (this.photographyDocument.data && this.getFileExtension(this.photographyDocument.data.name) !== "img" && this.getFileExtension(this.photographyDocument.data.name) !== "png") {
                    this.snackbarPhotography = true;
                    this.currentWrongInput = this.photographyDocument.inputName;
                    return false;
                }
                if(this.visaApplicationDocument !== "visaApplication.pdf") {
                    this.snackbarVisaApplication = true;
                    return false;
                }
                if(this.visaPaymentDocument !== "invoiceTicket.pdf") {
                    this.snackbarPaymentDocument = true;
                    return false;
                }
            
                return true;
            },
            handleFileChange(event, inputName) {
                const selectedFile = event.target.files[0];
                this.photographyDocument.data = selectedFile ? selectedFile : null;
                this.photographyDocument.inputName = inputName;
                this.checkAllFiles();
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

input {
    margin-bottom: 1.2rem;
    border-radius: 3px;
    border: 1px solid #707070;
    width: 100%;
    padding: 5px 10px;
}

label {
    font-weight: bold;
}

.enabled {
    background-color: #880E4F !important;
}

</style>