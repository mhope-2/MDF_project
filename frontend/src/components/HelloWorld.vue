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
          <q-checkbox v-model="right" label="Label on Right" />
      </div>

        <!-- File Upload -->
       <q-file filled bottom-slots v-model="model" style="max-width: 400px;"  label="IMPORT NEW SKU(S)" counter>
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
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
        </tr>
      </tbody>
    </q-markup-table>


      </q-card-section>
    </q-card>

  </q-page>
</template>

<style>
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
export default {
  name: 'HelloWorld',

  data () {
    return {
      left: true,
      right: false,

       model: null,

       separator: 'cell'
    }
  }
}
</script>
