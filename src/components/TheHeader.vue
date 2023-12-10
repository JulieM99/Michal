<template>

    <header>

        <router-link to="/" class="header-title">VISA TO POLAND</router-link>
        <div class="menu-style">
            <router-link to="/" class="nav-link">VISA TYPES</router-link>   
            <router-link to="/documents" class="nav-link">REQUIRED DOCUMENTS</router-link>  
            <router-link to="/online-application">ONLINE VISA APPLICATION</router-link>
            <router-link to="/payment">PAYMENT</router-link>
            <router-link to="/help" class="nav-link">HELP</router-link> 
            
        </div>

        <div class="lang-style">
            <div class="selected-lang">
                  English
            </div>

              <ul>
                  <li>
                        <a href="#" class="de">German</a>
                  </li>
                  <li>
                        <a href="" class="en">English</a>
                  </li>
                  <li>
                        <a href="" class="fr">French</a>
                  </li>
                  <li>
                        <a href="" class="pl">Polish</a>
                  </li>
                  <li>
                        <a href="" class="ua">Ukrainian</a>
                  </li>
              </ul>

        </div>

    </header>
    
</template>


<script>
   
   
</script>


<style scoped>


.header-title {
    font-family: 'Dancing Script', cursive;
    font-family: 'Oswald', sans-serif;
    color: white;
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
}

header {
    background-color: black;
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    color: white;
    box-shadow: 0 0 45px #00000091;
}

/* FLAGI W MENU */
.lang-style {
    display: flex;
    flex-direction: column;
    gap: 10px;
    line-height: 2;
    width: 100px;
}

.lang-style .selected-lang {
  display: flex;
  justify-content: space-between;
  line-height: 2;
  cursor: pointer;
}

.lang-style .selected-lang:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background-image: url(https://flagsapi.com/GB/flat/32.png);
    background-size: contain;
    background-repeat: no-repeat;
}
.selected-lang:before {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    background-image: url(https://flagsapi.com/GB/flat/32.png);
}

.lang-style ul {
  margin: 0;
    padding: 0;
    display: none;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: 45px;
    right: 0px;
    width: 125px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
}

.lang-style ul li {
  list-style: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.lang-style ul li a{
  text-decoration: none;
  width: 125px;
  padding: 5px 10px;
  display: block;
}

.lang-style ul li:hover {
  background-color: #f2f2f2;
}

.lang-style ul li a:before {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-right: 10px;
  background-size: contain;
  background-repeat: no-repeat;
}

.de:before {
    background-image: url(https://flagsapi.com/DE/flat/32.png);
}

.en:before {
    background-image: url(https://flagsapi.com/GB/flat/32.png);
}
.fr:before {
    background-image: url(https://flagsapi.com/FR/flat/32.png);
}

.pl:before {
    background-image: url(https://flagsapi.com/PL/flat/32.png);
}

.ua:before {
    background-image: url(https://flagsapi.com/UA/flat/32.png);
}

.lang-style:hover ul {
    display: block;
}

/* PODKREŚLENIE MENU */
.menu-style {
    display: flex;
    align-items: center;
    gap: 20px;
}

.menu-style a {
  margin: 10px;
  position: relative;
  color: white;
  text-decoration: none;
}

.menu-style a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: white;
  transition: width 0.3s ease 0s;
  width: 0;
}

.menu-style a:hover:after {
  width: 100%;
  left: 0;
}


</style>