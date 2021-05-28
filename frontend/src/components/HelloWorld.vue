<template>
  <q-page class="">
      <q-item-section avatar id="top-section">
        <q-icon style="color: blue; display: inline-block" name="home" />  
        <p style="display: inline-block; font-size:13px">     /     Catalog</p>
      </q-item-section> 
    <p id="products"> Products</p>

    <q-card class="my-card">
      <q-card-section>
        
        <q-input v-model="search" style="max-width: 400px;" filled type="search" hint="SKU name" placeholder="Search">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="q-gutter-sm">
          <q-checkbox v-model="right" label="Include inactive" />
      </div>

        <!-- File Upload -->
       <q-file filled bottom-slots v-model="model" ref="inputFile" style="max-width: 400px;"  label="IMPORT NEW SKU(S)" counter>
        <template v-slot:prepend>
          <q-icon name="insert_drive_file" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          <!-- Field hint -->
          
        </template>
      </q-file><br>

    <!-- Table -->
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-left" style="background-color: black; color: white;">No</th>
          <th class="text-right" style="background-color: blue; color: white">Catalog</th>
          <th class="text-right" style="background-color: black; color: white;">Color</th>
          <th class="text-right" style="background-color: black; color: white;">Size</th>
          <th class="text-right" style="background-color: black; color: white;">Quantity</th>
        </tr>
      </thead>

      <tbody v-if="products" >
        <tr v-for="(product) in products" :key="product.id">

          <td class="text-left">{{product.id}}</td>
          <td class="text-right">{{product.catalog_name}}</td>
          <td class="text-right">{{product.color}}</td>
          <td class="text-right">{{product.size}}</td>
          <td class="text-right">{{product.quantity}}</td>
        </tr>
        
      </tbody>

    </q-markup-table>

      <q-btn  v-on:click="refresh" id="refreshBtn" round color="primary" icon="refresh" />

    </q-card-section>
      
    </q-card>

  </q-page>
</template>

<style>
#refreshBtn{
   float: right;
}


#products {
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
}

#top-section{
  display: inline-block;
}
</style>

<script>
const axios = require('axios').default
import readXlsxFile from 'read-excel-file'

export default {
  name: 'HelloWorld',

  data () {
    return {
      left: true,
      right: false,
      model: null,
      separator: 'cell',
      search: "",

      products: [],

    }
  },

  mounted(){
    // fetch data from db
    axios.get(`/api/products`)
    .then(response => {
            this.products = response.data
          })
    .catch(err => {
        console.log("ERROR reading data from API due to: ", err)
    })

  },

  methods: {
    // refresh data (fetch from db)
    refresh: () => {
      window.location.reload();
    },

  },
  

  watch: {
    // set watch on file field for change
    model() {
      console.log("FILE INPUT: CHANGED")

      const inputFileName = this.$refs['inputFile'].$refs.input.files[0].name
      const inputFileExtension = inputFileName.split('.')[1]
      const inputFile = this.$refs['inputFile'].$refs.input


      if ( inputFileExtension == 'xlsx' || inputFileExtension == 'xls' ){
            readXlsxFile(inputFile.files[0]).then((rows) => {
             
            // set product to empty array in order to load data from file with 
            this.products=[]

            // load file data into products array then to table (data should follw given format)
            for(let row of rows.slice(1,rows.length+1)){
                this.products.push({"id":row[0], "catalog_name":row[1], "color":row[2], "size": row[3], "quantity":row[4]})
            } 
        })
      } else{
            alert("only excel files are allowed")
      }
    },

    search(){
      this.products = this.products.filter((item)=>{
        return ( item.color.startsWith(this.search) || item.size.startsWith(this.search) || item.catalog_name.startsWith(this.search))
      })
    }
  }

}
</script>
