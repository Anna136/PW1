<script>
export default {
  name: 'Calculator',
  data: () => {
    return {
      months: 0
    }
  }
}
</script>

<template>
  <div id="home">
    <div>
      <input v-model="sum" type="number" placeholder="Amount" />
    </div>
    <div>
      <select v-model="months" type="number">
        <option value="0">Choose period:</option>
        <option v-for="month in 12" :value="month" :key="month">
          {{ month }}
        </option>
      </select>
    </div>
    <div v-if="Number(sum) >= 1 && Number(sum) <= 4000">
      <table width="100%" cellpadding="12" border="1px">
        <tr>
          <th>Month</th>
          <th>Amount</th>
          <th>Rest</th>
        </tr>
        <tr :key="month" v-for="month in months-2">
          <td>{{ month }}</td>
          <td>{{ Math.floor(Number(sum) / months  ) }}</td>
          <td>{{ Math.floor(Number(sum) - (Number(sum) / months) * month) }}</td>
        </tr> 

        <tr :key="months">
          <td>{{ months-1 }}</td>
          <td>{{  Math.floor(Number(sum) / months) }}</td>
          <td v-if=" Math.floor(Number(sum) / months)*months === Number(sum)">{{  Math.floor(Number(sum) / months) }}</td>
          <td v-else>{{ Number( Math.floor(Number(sum) / months))+ Number(Number(sum)- Math.floor(Number(sum) / months)*months)  }}</td>
          
        </tr>

        <tr :key="months">
          <td>{{ months }}</td>
          <td v-if=" Math.floor(Number(sum) / months)*months === Number(sum)">{{  Math.floor(Number(sum) / months) }}</td>
          <td v-else>{{ Number( Math.floor(Number(sum) / months))+ Number(Number(sum)- Math.floor(Number(sum) / months)*months)  }}</td>
          <td>{{ 0 }}</td>
        </tr>
      </table>
    </div>
    <div v-else>Please enter an amount greater than 1 and less than 4000</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .calcContainer {
    align-items: center;
    max-height: 80vh;
    display: flex;
  }
}

</style>
