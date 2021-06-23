<template>
   <div> <h3>{{ title}}</h3>
    <div>
       <span v-if="text"> {{ text}}</span>
        <img v-if="imgSrc" :src="imgSrc">
    </div>
   </div>
</template>

<script>


export default {
    props: {
        title: String,
        text: String,
        imgSrc: String
    }
}
</script>