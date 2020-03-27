<template>
  <div>
    <fm-generate-form
            :data="jsonData"
            ref="generateForm"
    >
    </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">Submit</el-button>
  </div>
</template>


<script>
    export default {
        data () {
            return {
                jsonData: {"list":[{"type":"number","icon":"icon-number","options":{"width":"","required":false,"defaultValue":0,"min":0,"max":0,"step":1,"disabled":false,"controlsPosition":"","remoteFunc":"func_1585288273000_45085"},"name":"计数器","key":"1585288273000_45085","model":"number_1585288273000_45085","rules":[]},{"type":"checkbox","icon":"icon-check-box","options":{"inline":false,"defaultValue":[],"showLabel":false,"options":[{"value":"Option 1"},{"value":"Option 2"},{"value":"Option 3"}],"required":false,"width":"","remote":false,"remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1585288275000_69430","disabled":false},"name":"多选框组","key":"1585288275000_69430","model":"checkbox_1585288275000_69430","rules":[]}],"config":{"labelWidth":100,"labelPosition":"right","size":"small"}},
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.generateForm.getData().then(data => {
                    alert(JSON.stringify(data))
                }).catch(e => {
                })
            }
        }
    }

</script>


