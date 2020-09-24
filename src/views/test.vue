<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <span>{{ message }}</span>
        <el-button type="danger" size="mini" @click="hanldeClick(1)">click</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld
    },
    data() {
        return {
            msg: "111"
        }
    }
})
export default class Home extends Vue {
    message: string = "hello";
    public hanldeClick(number: number) {
        console.log(number);
    }
    private destoryed() {
        console.log("destory");
    }
    created() {
    }
    mounted() {
        this.axios
            .get("http://sz.xrdev.cn/inspection/plans?pageNum=1&pageSize=20")
            .then((res: any) => {})
            .catch((err: any) => {
                console.error(err);
            });
    }
}
</script>
