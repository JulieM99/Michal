<template>

    <header>

        <h1>VISA TO POLAND</h1>
        <div class="menu-style">
            <router-link to="/" class="nav-link">VISA TYPE</router-link>   
            <router-link to="/documents" class="nav-link">DOCUMENTS</router-link>  
            <router-link to="/help" class="nav-link">HELP</router-link> 
        </div>

        <div class="lang-style">
            <label for="language">Language</label>
            <div class="language-dropdown">
                <select name="language" id="language" class="language-select">
                    <option value="polish" data-flag="🇵🇱">Polish</option>
                    <option value="english" data-flag="🇬🇧">English</option>
                    <option value="ukrainian" data-flag="🇺🇦">Ukrainian</option>
                </select>
                <span class="selected-flag">🇵🇱</span>
            </div>
        </div>

    </header>

    
</template>


<script>
</script>


<style scoped>


h1 {
    font-family: 'Dancing Script', cursive;
    font-family: 'Oswald', sans-serif;
    color: white;
    display: flex;
    justify-content: flex-start;
}

header {
    background-color: black;
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    color: white;
    box-shadow: 0 0 15px #000000;
}
.lang-style {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.language-dropdown {
  position: relative;
  display: inline-block;
}

.language-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}

.selected-flag {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

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