<template>
    <form>
      <div class="container-fluid col-md-12">
        <div class="row">
          <div class="col-md-6">
            <div class="form-container panel panel-default">
              <div class="panel-body">
                <div class="col-md-6 mt-1">
                  <div class="control-group">
                    <label class="control-label">Transfer</label>
                  </div>
                </div>
                <div class="mb-3" v-for="item in form" :key="item">
                  <OutcomeView />
                </div>
              </div>
              <div class="panel-footer">
                <div class="row ml-3 mt-3 mb-1">
                  <a class="btn btn-success" @click="addNewOutcome">Add Outcome</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
</template>

<script>
import { reactive } from 'vue'
import OutcomeView from './OutcomeView.vue';

export default({
  name: 'TransferView',
  components: {
    OutcomeView,
  },
  setup() {
    const form  = reactive ([{
    }])
    const addNewOutcome = () =>{
       form.push ({ })
    }
    return {
      form,
      addNewOutcome
    }
  }
})
</script>


<style scoped>
.control-label{
  margin-right:65%;
  font-size: 12.25px;
  color: black;
  font-style: normal;
  font-weight: bold;
}
input {
  margin-left: 6%;
}
.form-container {
  border: 1px solid #ccc; 
  padding: 1px; 
  border-radius: 5px; 
}
.control-group {
  margin-bottom: 10px;
}
.panel-footer{
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
}
</style>
