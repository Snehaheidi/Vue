<template>
    <form>
      <div class="container-fluid col-md-12">
        <div class="row">
          <div class="col-md-12">
            <div class="form-container panel panel-default">
              <div class="panel-body">
                <div class="col-md-6 mt-3 mb-3">
                  <div class="control-group">
                    <label class="control-label">Outcome#</label>
                    <div class="controls">
                      <input type="text" class="form-control"/>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <PartyView />
                </div>
                <div class="mt-3">
                  <label class="control-label">Consolidation?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
</template>

<script>
// import { reactive } from 'vue'
import PartyView from './PartyView.vue'
export default {
  name: 'OutcomeView',
  components: {
    PartyView,
  }
}
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
