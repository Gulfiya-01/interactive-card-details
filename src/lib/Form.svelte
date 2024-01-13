<script lang="ts" >
   import Completed from "./Completed.svelte";
   import {validateEmpty} from "./Validation"
   import {isNumeric} from "./Validation"
   import {isLetter} from "./Validation"
   export let cardNumber:string;
   export let username:string;
   export let month:string;
   export let year:string;
   export let cvv:string;
  
   let isFormSubmitted = false;
  
  let usernameError=false; 
  let cardNumberError = false;
  let monthError = false;
  let yearError = false;
  let cvvError = false;

  let isMonthEmpty=false;
  let isCardNumberEmpty=false;
  let isCvvEmpty=false;
  let isNameEmpty=false;
  let isYearEmpty=false;

 
  function handleSubmit() {
    isNameEmpty = !validateEmpty(username);
    isCardNumberEmpty = !validateEmpty(cardNumber);
    isMonthEmpty = !validateEmpty(month);
    isYearEmpty = !validateEmpty(year);
    isCvvEmpty = !validateEmpty(cvv);

    cardNumberError = !isNumeric(cardNumber);
    monthError = !isNumeric(month);
    yearError = !isNumeric(year);
    cvvError = !isNumeric(cvv);
    
    usernameError = !isLetter(username);

    const anyNumeric=cardNumberError || monthError || yearError || cvvError;
    const anyEmpty= isNameEmpty|| isCardNumberEmpty  ||isMonthEmpty || isYearEmpty || isCvvEmpty;

    if (!anyNumeric&&!anyEmpty&&!usernameError) {
      isFormSubmitted = true;
    }
  }

  

</script>

{#if isFormSubmitted}
    <Completed/>
{:else}

<form on:submit|preventDefault={handleSubmit}>
    <div class ="input-form" >
      <label for="name" class ="card" >Cardholder Name </label>
        <input bind:value={username} type="text" name="username" placeholder="e.g. Jane Appleseed" />
        {#if isNameEmpty}
            <p class="error"> can`t be blank</p>
        {:else if usernameError}
            <p class="error">Wrong format, letters only</p>
        {/if}
        
    </div>
 
    <div class ="input-form" >
      <label for="name" class ="card">Card Number </label>
        <input bind:value={cardNumber} type="text" name="card-number" placeholder="e.g. 1234 5678 9123 0000" minlength="16" maxlength="16"/>
        {#if isCardNumberEmpty}
            <p class="error"> can`t be blank</p>
        {:else if cardNumberError}
            <p class="error">Wrong format, numbers only</p>
        {/if}
    </div>
    
   
    <div class ="input-form">
      <label for="date" class ="date">Exp. Date (MM/YY)</label>
      <div class="date-inputs">
        
        <input bind:value={month}  name="month"placeholder="MM" maxlength="2" type="text" minlength="2"  />
          {#if isMonthEmpty}
          <p class="error"> can`t be blank</p>
          {:else if monthError}
          <p class="error">Month wrong format, numbers only</p>
        {/if} 

        <input bind:value={year}  name="year" placeholder="YY"  type = "text"minlength="2"maxlength="2">    
          {#if isYearEmpty}
          <p class="error"> can`t be blank</p>
          {:else if yearError}
          <p class="error">Year wrong format, numbers only</p>
          {/if}
          </div>
      
      <label for="cvc" >cvc</label>
  
        <input bind:value={cvv}  type="text" name="user-search" placeholder="e.g. 123" minlength="3" maxlength="3">
        
        {#if isCvvEmpty}
           <div class="error">can`t be blank</div>
         {:else if cvvError}
           <div class="error">CVV wrong format, numbers only</div>
         {/if}

    </div>    
  <button type ="submit">Confirm</button>
</form>
{/if}

  <style>
    .error {
        color: red;
        font-size: 0.6rem;
      margin-top: 0.5rem;}
    button{
    background-color: var(--Very-dark-violet);
    margin-top: 1.25rem;
    color: var(--White);
    padding: 0.94rem 8.12rem ;
    font-size: 1.125rem;
    border-radius: 0.5rem;
  }
   form{
      width: 100%;
      display: flex; 
      flex-direction: column;
      padding:0 1.5rem;
      text-transform: uppercase;
    }

  .input-form {
    margin-top: 1.25rem;
    display: flex;
    align-items:flex-start;
    gap: 0.5rem;
    justify-content: space-between;
    flex-direction: column;
   }
   
    .date-inputs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        grid-template-columns: 20% 20%; 
       
    }
     input{
      border-radius: 0.5rem;
      border: 1px solid var(--Light-Grey, #DFDEE0);
      background: var(--White, #FFF);
      padding: 0.6rem;
     }

 



   
  </style>