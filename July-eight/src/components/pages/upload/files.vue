<template>
    <div id="files">
        <ul>
            <li v-for="file in files" :key="file" class="file" @click="exportFile(file)">
                {{file}}
            </li>
        </ul>
    </div>
    
</template>

<script>
import uploadApi from '@/api/upload';

export default {
    mounted() {
        this.showFiles(); 
    },
    data() {
        return {
            file: '',
            files: []
        }
    },
    methods: {
        showFiles() {
            let data = {};
            uploadApi.files(data).then(res => {
                console.log(res)
                var result = res.data.result;
                this.files = result;
            })
            .catch(err => {
                console.log(err);
            })
        },
        exportFile(file) {
            let data = {
                params: {
                    fileName: file
                }
             };
            uploadApi.fileDown(data).then(res => {
                console.log(res)
                const element = document.createElement('a');
                const file = new Blob([res.data], {type: "application/octet-binary"});
                element.href = URL.createObjectURL(file);
                element.download = `${data.params.fileName}`;
                element.click();
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#files {
    width: 50%;
    margin:0 auto;
    .file {
        text-align: left;
    }
}
</style>


