<template>
  <TheHeader/>

      <div class="types">

        <div class="visa-type">
            <h2>Visa C (Schengen visa)</h2>
            <span>• The Uniform Schengen Visa is valid in the Schengen Area and permits its holder to remain in the territory of all of the Schengen Area Member Countries for a maximum of 90 days during a 180-day period.</span>
            <span>• Schengen Visa with limited territorial validity is valid in the territory of one or more Schengen Area Member States, but not in all the Schengen Area Member States and permits its holder to remain in their territories for a maximum of 90 days during a 180-day period. </span>
            <router-link to="/documents" class="nav-link"><p>• Find the documents you need</p></router-link>   
          </div>

          <div class="visa-type">
            <h2>Visa D</h2>
            <span>• A D-type national visa permits to enter the territory of the Republic of Poland and to stay continuously or for several successive times in this territory for a total duration of more than 90 days during the period of validity of the visa, but not longer than one year.</span>
            <span>• A D-type national visa also permits to travel in the territory of other Schengen Area Member States for up to 90 days during a 180-day period, during the validity period of the visa.</span>
            <router-link to="/documents" class="nav-link"><p>• Find the documents you need</p></router-link>   
          </div>

      </div>

  
</template>

<script>
  
</script>

<style scoped>
.types {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 150px;
    align-items: stretch;
    margin-top: 100px;
    padding-left: 50px;
    padding-right: 50px;
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

h2{
    padding: 10px;
    color: black;
}

span {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

p {
  text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}


</style>