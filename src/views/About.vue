<template>
    <div class="about">
        <h1>This is an about page</h1>
        <s-card></s-card>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class About extends Vue {
    mounted() {
        console.log("iniin")
    }
}
</script>
