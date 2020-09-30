<template>
    <div>
        {{ date | formaDate("yyyy-MM-dd hh:mm:ss") }} 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ "AFASFASDF" | changeCase(5) }} 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ "18349136874" | replaceStr([3, 5, 3],0, "*") }}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ "183491368741" | formatText(3, "*") }}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ 82019100.198 | upDigit }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class testF extends Vue {
    public date: Date = new Date();
    public interval: any = null;
    /* 
        @description  mounted
        @autor        cheng liang
        @create       2020-09-30 09:44"
        @params       
        @return       
    */
    public mounted() {
        this.date = new Date();
        this.interval = setInterval(() => {
            this.date = new Date();
        }, 1000);
    }
    public beforeDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}
</script>
<style>
</style>
