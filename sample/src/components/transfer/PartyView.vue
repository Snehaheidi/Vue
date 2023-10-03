<template>
    <form>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="form-container panel panel-default">
              <div class="panel-body ml-1">
                <label class="party_info mb-2">Party Info</label>
                <hr class="s_t_mar">
                <div class="row" v-for="item,index in form" :key="item"> 
                  <div class="col-md-4">
                    <div class="control-group">
                      <label for="partyname">Party Name: </label>
                        <div class="controls">
                          <input type="text" class="form-control" id="partyname" v-model="item.partyname"/>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="partytype">Party Type: </label>
                    <div class="controls">
                      <select class="form-control" id="dropdown" v-model="item.partytype">
                        <option value="" disabled selected></option>
                        <option value="plaintiff">plaintiff</option>
                        <option value="defendant">Defendant</option>
                        <option value="cdefendant">Counter defendant</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <label for="filingparty">Filing Party: </label>
                    <div class="controls">
                      <input type="checkbox" id="filingparty" v-model="item.filingparty" />
                    </div>
                  </div>
                  <div class="col-md-0 mt-3">
                    <a class="btn btn-danger btn-sm" @click="removeParty(index)"> X </a>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <div class="row ml-3 mt-3 mb-1">
                  <a class="btn btn-success" @click="addNewParty">                
                    Add Party
                  </a>
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
  // import { GET_USERNAME } from "../store/storeconstants";
  export default {
    name: 'PartyView',
    setup(){
      const form  = reactive ([
        { partyname : '',
          partytype : '',
          filingparty : false  
        }
      ])
      const addNewParty = () => {
        form.push({ partyname : '',
          partytype : '',
          filingparty : false  
        })
      }
      const removeParty = (index) => {
        form.splice(index, 1)
      }
      return{
        form,
        addNewParty,
        removeParty
      }
    }
  }
</script>

<style scoped>
label{
  margin-right:33%;
  font-size: 12.25px;
  color: black;
  font-style: normal;
  font-weight: bold;
}
.party_info{
  margin-right:85%;
  margin-top: 10px;
  margin-bottom: 0px;
}
h3{
  text-align: left;
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
