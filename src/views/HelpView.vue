<template>

<div class="online-app-wrapper">
    <form @submit.prevent="">
        <div class="input-wrapper">
            <h4>In case you need any further information please contact us: </h4>
            <p>Phone number: +48 356 789 123</p>
            <p>E-mail adress: visaapplication@visa.com</p>
        </div>
      <div class="input-wrapper">
        <h4 class="mb-4">If you prefer to send the question directly, please fill out the form and we will contact you within one work day:</h4>
        <v-textarea label="Message..." class="w-75" :disabled="messageSent"></v-textarea>
        <v-text-field label="Email" class="w-75" :disabled="messageSent"></v-text-field>
        <v-text-field label="Phone" class="w-75" :disabled="messageSent"></v-text-field>
        <v-btn @click="sendMeesage">Send</v-btn>
        <span v-if="messageSent" class="mt-6">Thank you for sending the message!</span>
        <span v-if="messageSent">We will contact you as fast as we can</span>
      </div>
      </form>
</div>

</template>
  
<script>
  export default {
    data() {
      return {
        messageSent: false,
      }
    },
    methods: {
      sendMeesage() {
        this.messageSent = true;
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
    align-items: center;
}

p {
  margin-top: 5px;
}
</style>