<template>
    
    <div class="documents">
        <div class="visa-type">
            <h2>Visa C (Schengen visa)</h2>
            <span>• The Uniform Schengen Visa is valid in the Schengen Area and permits its holder to remain in the territory of all of the Schengen Area Member Countries for a maximum of 90 days during a 180-day period.</span>
            <span>• Schengen Visa with limited territorial validity is valid in the territory of one or more Schengen Area Member States, but not in all the Schengen Area Member States and permits its holder to remain in their territories for a maximum of 90 days during a 180-day period. </span>
            <h3>Required documents</h3>
            <span>• Travel document (passport document), which:</span>
            <ul class="list-style">
                <li>Is valid for at least three months after the planned date of leaving the territory of the Schengen area in the case of several visits, after the planned date of last leaving the territory of the Schengen area</li>
                <li>Contains at least two blank pages</li>
                <li>Was released within the last ten years</li>
            </ul>    
            <div class="div-link">• Completed and signed <a :href="publicPath" download="visa.pdf">visa application</a> or complete <router-link to="/online-application">online application</router-link></div>
            <span>• Photography</span>
            <div class="div-link">• Confirmation of <router-link to="/payment" >visa payment</router-link></div>
            <span>• Travel medical insurance with an amount not lower than EUR 30,000, covering all expenses that may arise in connection with the need to return for medical reasons, the need for urgent medical assistance, emergency hospital treatment or death, or health insurance within the meaning of Polish regulations on care services health financed from public funds</span>
            <span>• Supplementary documents:</span>
            <ul class="list-style">
                <li>A document confirming the purpose of the trip</li>
                <li>A document confirming that you have adequate financial resources to cover the costs of living for the entire period of your planned stay and to cover the costs of returning to your country of origin or residence, or to cover the costs of transit to a third country that will certainly grant entry permit, or documents confirming that these funds may legally obtain</li>
                <li>A document regarding accommodation or having financial resources to cover the costs of accommodation</li>
                <li>A document enabling the assessment that the person applying for a visa will leave the territory of the Schengen area before the expiry of the visa</li>
            </ul>
        </div>
        <div class="visa-type">
            <h2>Visa D</h2>
            <span>• A D-type national visa permits to enter the territory of the Republic of Poland and to stay continuously or for several successive times in this territory for a total duration of more than 90 days during the period of validity of the visa, but not longer than one year.</span>
            <span>• A D-type national visa also permits to travel in the territory of other Schengen Area Member States for up to 90 days during a 180-day period, during the validity period of the visa.</span>
            <h3>Required documents</h3>
            <span>• Travel document (passport document)</span>
            <div class="div-link">• Completed and signed <a :href="publicPath" download="visa.pdf">visa application</a></div>
            <span>• Photography</span>
            <div class="div-link">• Confirmation of <router-link to="/payment" >visa payment</router-link></div>
            <span>• Travel medical insurance with an amount not lower than EUR 30,000, covering all expenses that may arise in connection with the need to return for medical reasons, the need for urgent medical assistance, emergency hospital treatment or death, or health insurance within the meaning of Polish regulations on care services health financed from public funds</span>
            <span>• Supplementary documents:</span>
            <ul class="list-style">
                <li>A document confirming the purpose of the trip and the conditions of stay</li>
                <li>A document confirming that you have adequate financial resources to cover the costs of living for the entire period of your planned stay and to cover the costs of returning to your country of origin or residence, or to cover the costs of transit to a third country that will certainly grant entry permit, or documents confirming that these funds may legally obtain</li>
                <li>A document enabling the assessment that the person applying for a visa will leave the territory of the Republic of Poland before the expiry of the visa</li>
                <li>Other documents confirming other circumstances included in the visa application</li>
            </ul>
        </div>
    </div> 

</template>
  
<script>

    // import {saveAs} from 'file-saver'

    export default {
        data () {
            return {
                publicPath: process.env.BASE_URL + 'visa.pdf'
            }
        }
    }
</script>

<style scoped>

.documents {
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

h3 {
    padding: 10px;
    color: black;
}

.visa-type {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 30px #6d6c6c;
    padding: 20px;
    min-width: 300px;
    max-width: 50%;
    gap: 10px;
    display: flex;
    flex-direction: column;
}
.list-style {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 35px;
    gap: 4px;
}

span {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.div-link {
    text-align: left;
}
</style>