<template>
    <div class="login">
        <el-form ref="form" :model="formInfo" label-width="60px" class="form">
            <h3 class="text-center">登录</h3>
            <el-form-item label="登录名">
                <el-input v-model="formInfo.userName" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formInfo.passWord" size="small"></el-input>
            </el-form-item>
            <el-button type="primary" size="small" class="w-100">
                <router-link to="/about">登录</router-link>
            </el-button>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Login extends Vue {
    public formInfo = {
        userName: "",
        passWord: ""
    };
}
</script>

<style lang="scss">
.login {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
        background: white;
        min-width: 350px;
        box-shadow: 0px 0px 10px #eee;
        padding: 2rem;
        .el-form-item {
            margin-bottom: 22px !important;
        }
    }
}
</style>
