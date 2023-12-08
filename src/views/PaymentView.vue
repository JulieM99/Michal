<template>

    <h1>placenie</h1>

    <div class="payment">

        <visa-box>
            <h2>Visa C</h2>
            <button :class="{hovered: !visaCPaid}" :disabled="visaCPaid" @click="payVisaC">{{!visaCPaid ? "Go to payment site":"Payment succesfull"}}</button>
            <a v-if="visaCPaid" :href="publicPath" download="invoiceTicket.pdf" class="invoice-link">Download Your Invoice Ticket</a>
        </visa-box>
            
        <visa-box>
            <h2>Visa D</h2>
            <button :class="{hovered: !visaDPaid}" :disabled="visaDPaid" @click="payVisaD">{{!visaDPaid ? "Go to payment site":"Payment succesfull"}}</button>
            <a v-if="visaDPaid" :href="publicPath_2" download="invoiceTicket.pdf" class="invoice-link">Download Your Invoice Ticket</a>
        </visa-box>

    </div>

</template>

<script>
    import VisaBox from "../components/VisaBox.vue"

    export default{
        components: {
            VisaBox
        },
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

h2{
    padding: 10px;
    color: black;
}

button {
    border: none;
    border-radius: 20px;
    padding: 20px 0px;
    cursor: pointer;
    background-color:rgba(80, 79, 70, 0.404);    
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 0 5px black;
}

.hovered:hover {
    background-color: rgb(138, 22, 22); 
}

.invoice-link {
    margin-top: 15px;
    padding: 10px 5px;
    color: black;
}

.invoice-link:hover {
    color: rgb(58, 55, 55);
}


</style>