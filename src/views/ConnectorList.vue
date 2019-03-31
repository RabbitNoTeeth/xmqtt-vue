<template>
    <div>
        <div id="toolbar">
            <el-button icon="el-icon-refresh" size="small" @click="loadClientList">刷新</el-button>
        </div>
        <div id="content">
            <el-table
                    :data="clientList"
                    highlight-current-row
                    style="width: 100%">
                <el-table-column
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="clientId"
                        label="clientId">
                </el-table-column>
                <el-table-column
                        prop="remoteAddress"
                        label="address">
                </el-table-column>
            </el-table>
        </div>
        <div id="pagebar">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageConfig.page"
                    :page-sizes="[10, 20, 30, 40, 50]"
                    :page-size="pageConfig.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageConfig.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConnectorList",
        data(){
            return {
                clientList: [],
                pageConfig: {
                    page: 1,
                    pageSize: 10,
                    total: 0
                }
            }
        },
        methods: {
            loadClientList(){
                const app = this;
                app.$ajax
                    .get('/api/clients', {
                        params: {
                            page: app.pageConfig.page,
                            pageSize: app.pageConfig.pageSize
                        }
                    })
                    .then(res => {
                        if(res.data.success){
                            app.clientList = res.data.data;
                            app.pageConfig.total = res.data.total;
                        }else{
                            app.$message.error(res.data.message);
                        }
                    })
                    .catch(e => {
                        console.log(e);
                        app.$message.error('客户端列表加载失败');
                    })
            },
            /**
             * 页面大小变化回调
             */
            handleSizeChange(val){
                this.pageConfig.pageSize = val;
                this.loadClientList();
            },
            /**
             * 当前页数变化回调
             * @param val
             */
            handleCurrentChange(val) {
                this.pageConfig.page = val;
                this.loadClientList();
            }
        },
        mounted() {
            this.loadClientList();
        }
    }
</script>

<style scoped>

    #toolbar{
        width: 100%;
        text-align: right;
    }

    #pagebar{
        width: 100%;
        text-align: right;
        margin-top: 20px;
    }

</style>