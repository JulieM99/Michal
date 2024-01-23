<script src="../router/index.js"></script>
<template>
  <TheHeader/>


    <div class="background">
      <div class="qwer">
        <h2 class="pb-0 text-h3 dziwny-font">Hello!</h2>
        <h2>On this website you will find information necessary to obtain a visa to Poland, and you will also be able to place an order for such a visa.</h2>
        <span class="ml-2">We would like to inform you that citizens of European Union countries have the right to visa-free movement of persons within the European Union/European Economic Area (EU/EEA).</span>

        <h2>Are you interested in a visa to Poland?</h2>
        <span class="point">Place your order in 5 steps:</span>
        <div class="point">1. Decide which visa you need: Visa C or Visa D -> <router-link to="/documents" class="nav-link">visa types</router-link></div>
        <div class="point">2. Complete the visa application -> <router-link to="/online-application">visa application</router-link></div>
        <div class="point">3. Place visa payment -> <router-link to="/payment">visa payment</router-link></div>
        <div class="point">4. Prepare all necessary documents included in <router-link to="/documents" class="nav-link">visa types</router-link></div>
        <div class="point">5. Upload your documents and place your order -> <router-link to="/apply-doc" class="nav-link">visa documents</router-link></div>
      </div>
    </div>

<!--      <div class="types">-->

<!--        <div class="visa-type">-->
<!--            <h2>Visa C (Schengen visa)</h2>-->
<!--            <span>• The Uniform Schengen Visa is valid in the Schengen Area and permits its holder to remain in the territory of all of the Schengen Area Member Countries for a maximum of 90 days during a 180-day period.</span>-->
<!--            <span>• Schengen Visa with limited territorial validity is valid in the territory of one or more Schengen Area Member States, but not in all the Schengen Area Member States and permits its holder to remain in their territories for a maximum of 90 days during a 180-day period. </span>-->
<!--            <router-link to="/documents" class="nav-link"><p>• Find the documents you need</p></router-link>   -->
<!--          </div>-->

<!--          <div class="visa-type">-->
<!--            <h2>Visa D</h2>-->
<!--            <span>• A D-type national visa permits to enter the territory of the Republic of Poland and to stay continuously or for several successive times in this territory for a total duration of more than 90 days during the period of validity of the visa, but not longer than one year.</span>-->
<!--            <span>• A D-type national visa also permits to travel in the territory of other Schengen Area Member States for up to 90 days during a 180-day period, during the validity period of the visa.</span>-->
<!--            <router-link to="/documents" class="nav-link"><p>• Find the documents you need</p></router-link>   -->
<!--          </div>-->

<!--      </div>-->


</template>

<script>

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

.dziwny-font {
  font-family: 'Dancing Script', cursive !important;
}

.nav-link {
  display: inline !important;
  white-space: nowrap;
}

.point {
  margin-left: 3rem;
}
.qwer {
  background-color: rgb(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 30px #6d6c6c;
  padding: 30px;
  width: 60%;
  height: fit-content;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
}

.background {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  //align-items: center;
  background: url("../assets/flaga-polski.jpg") no-repeat center center fixed !important;
  background-size: cover !important;
}

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