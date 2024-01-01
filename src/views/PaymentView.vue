<template>
  
    <div class="payment">
        
        <v-card class="pa-4 w-50 card-style">
            <v-row justify="center" class="mb-8 mt-2">
                <p>Here you can pay for your visa application.</p>
            </v-row>
            <v-row justify="center" class="mb-8">
                <p>After making the payment, you will receive your unique PDF document with confirmation of payment. The document will be needed to place an order for a visa. You can also find the document in the my documents tab.</p>
            </v-row>
            <v-row justify="around" class="px-8">
                <div justify="center" class="pb-4 d-flex flex-column ga-4">
                    <p class="cols-center text-h5">Visa C</p>
                <v-btn color="pink" :class="{hovered: !visaCPaid}" :disabled="visaCPaid || visaDPaid"  @click="payVisaC">{{!visaCPaid ? "Go to payment site":"Payment succesfull"}}</v-btn></div>
                <div justify="center" class="ml-auto pb-4 d-flex flex-column ga-4">
                    <p class="cols-center text-h5">Visa D</p>
                <v-btn color="pink" :class="{hovered: !visaDPaid}" :disabled="visaDPaid || visaCPaid" @click="payVisaD">{{!visaDPaid ? "Go to payment site":"Payment succesfull"}}</v-btn></div>
            </v-row>
            <v-row justify="center" class="mb-2">
                <a v-if="visaCPaid" :href="publicPath" download="invoiceTicket.pdf" class="invoice-link">Download Your Invoice Ticket</a>
                <a v-if="visaDPaid" :href="publicPath_2" download="invoiceTicket.pdf" class="invoice-link">Download Your Invoice Ticket</a> 
            </v-row>
        </v-card>
            
    </div>

</template>

<script>
   

    export default{
        
        data() {
            return {
                visaCPaid: false,
                visaDPaid: false,
                publicPath: process.env.BASE_URL + 'visa_type_c.pdf',
                publicPath_2: process.env.BASE_URL + 'visa_type_d.pdf'
            }
        },
        methods: {
            payVisaC() {
                this.visaCPaid = true;
            },
            payVisaD() {
                this.visaDPaid = true;
            }
        }
    }
</script>

<style scoped>

.card-style {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 30px #6d6c6c;
}
.payment {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 150px;
    align-items: stretch;
    margin-top: 100px;
    padding-left: 50px;
    padding-right: 50px;
}

.invoice-link {
    margin-top: 15px;
    padding: 10px 5px;
    color: black;
}

.invoice-link:hover {
    color: rgb(58, 55, 55);
}

p {
    font-weight: bold;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;
    
}


</style>