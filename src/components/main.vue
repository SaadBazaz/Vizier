<template>
<body>
<head>
    
    <!-- Index Stylesheet -->
    <link rel="stylesheet" href="index.css">

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">

</head>

    <div class="app-header">
            <i class="material-icons">menu</i>
            <div class="title">DEVICE 1</div>
            <i class="material-icons">settings</i>
    </div>    

    <div class="app-body">
        <div class="device-pins">

            <div class="pin-column">
                <div class="pin-circle active on">
                </div>
                <div class="pin-circle inactive">
                </div>
                <div class="pin-circle inactive">
                </div>
            </div>
    
            <div class="pin-column">
                <div class="pin-circle active">
                </div>
                <div class="pin-circle active">
                </div>
                <div class="pin-circle active">
                </div>
            </div>
    
        </div>

    </div>

</body>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {

    display:flex;
    flex: 1 1 auto;
flex-direction:column;
height:100%;
width:100%;
    background-color: #F2F2F2;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.app-header .material-icons {
    font-size: 50px;
    padding: 40px;
    opacity: 0.45;
}

.app-header .title {
    font-size: 25px;
    padding: 40px;
    letter-spacing: 10;
    font-weight: bold;
    color: #707070;
}

.app-body {
    display: flex;
    flex:1 1 auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.device-pins {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* margin: 10px 600px; */
}


.pin-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
}

.pin-circle {
    background-color: #515151;
    height:45px;
    width: 45px;
    border-radius: 50%;
    margin: 60px;
    cursor: pointer;
    transition: 0.8s ease-out;
}

.active:hover {
    transform: scale(0.75, 0.75);
    transition: 0.2s ease-out;
}

.pin-circle:active {
    opacity: 0.5;
    transition: 0.1s ease-out;
}


.active{
    opacity: 1;
}

.on{
    opacity: 1;
    background-color: #08CF30;
}

.inactive {
    opacity: 0.25;
}
</style>
