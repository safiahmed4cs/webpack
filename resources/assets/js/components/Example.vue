<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Exampless Component</div>
                    <div class="panel-body">
                        <button id="show-modal" @click="showModalPopup = true">Show More</button>
                    </div>
                    <div v-if="showModalPopup">
                        <div class="modal">
                            <div class="modal-content">
                                d
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showModalPopup: false
            }
        },
        method(){
            showModal: {
                alert(2);
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
