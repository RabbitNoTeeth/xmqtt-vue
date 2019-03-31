<template>
    <div id="main">
        <el-tabs v-model="activeTagName">
            <el-tab-pane label="Topics" name="topic">
                <topic-list></topic-list>
            </el-tab-pane>
            <el-tab-pane label="Connectors" name="connector">
                <connector-list></connector-list>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import ConnectorList from "@/views/ConnectorList";
    import TopicList from "@/views/TopicList";
    export default {
        name: "Index",
        components: {TopicList, ConnectorList},
        data(){
            return {
                activeTagName: 'topic'
            }
        }
    }
</script>

<style scoped>

    #main{
        width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding: 30px;
    }

</style>