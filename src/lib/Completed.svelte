<script>
// @ts-nocheck
import Header from "./Header.svelte"
let isFormSubmitted = false;

 
 function handleSubmit() {
     isFormSubmitted = true;
 }

</script>

{#if isFormSubmitted}

  <Header/>
  
{:else}
<form on:submit{handleSubmit}>
<img class="icon-complete" alt="icon-complete" src="/images/icon-complete.svg">
<p class="text">THANK YOU</p>
<p class="text-detail">We’ve added your card details</p>
<button class ="btn-continue" type="submit">Continue</button>

</form>
{/if}



<style>
.icon-complete{
    margin-top: 3rem;
    padding-left: 8.19rem;
}
.text{
    margin-top: 2rem;
    color: var(--Very-dark-violet);
    text-align: center;
    font-size: 1.75rem;
    letter-spacing: 0.21388rem;}
.text-detail{
    margin-top: 1rem;
    color: hsla(278, 6%, 55%, 1);
    text-align: center;
    font-size: 1.125rem;
}
.btn-continue{
    background-color: var(--Very-dark-violet);
    margin-top: 3rem;
    color: var(--White);
    padding: 0.94rem 8.12rem ;
    font-size: 1.125rem;
    border-radius: 0.5rem;
}

</style>