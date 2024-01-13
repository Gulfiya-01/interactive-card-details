<script lang="ts">
    import Form from "./Form.svelte";
    import {formatCardNumber} from "./Validation";
  
  
    let formUsername = "";
    let formCardNumber = "";
    let formMonth = "";
    let formYear = "";
    let formCvv = "";
  
    $: username = formUsername || "JANE APPLESEED";
    $: cardNumber=formCardNumber || "0000000000000000" ;
    $: month=formMonth || "00";
    $: year=formYear||"00";
    $: cvv=formCvv||"000";
  
  </script>
  
  <header>
    <img class="bg-mobile" alt="bg-main-mobile img" src="./images/bg-main-mobile.png" />
      <section class="cards">
        <figure class="card-back">
          <img alt="card-back img" src="./images/bg-card-back.png" />
          <p class="cvc">{cvv}</p>
        </figure>
        <figure class="card-front">
          <img class="bg-card-front" alt="bg-card-front" src="./images/bg-card-front.png" />
          <img class="details" alt="card logo" src="./images/card-logo.svg">
          <p class="card-number-result">  {formatCardNumber(cardNumber)}</p>
          <span class="info">
          <p class="cardholder-name-result">{username}</p>
          <p class="date-result">{month}/{year}</p>
          </span>
        </figure>
      </section>
  </header>
  <Form bind:username={formUsername}
    bind:cardNumber={formCardNumber} 
    bind:month={formMonth} 
    bind:year={formYear} 
    bind:cvv={formCvv}/>
   
  
  
  <style>
   
  
   .bg-mobile{
      position: absolute;
    }
    .cards{
     padding: 2rem 1rem 0 1rem;
    }
   .card-number-result{
      margin: -3.5rem 1rem -2rem 1rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: var(--White, #FFF);
      font-size: 1.125rem;
      letter-spacing: 0.1375rem;
   }
  
   img{
      display: block;
   }
  
   .card-back{
      margin-left:3.5rem;
      position: relative;
   }
   .card-back .cvc{
      position: absolute;
      color: var(--White);
      top: 50%;
      left: 80%;
      transform: translate(-50%, -50%); /* Center the text */
      font-size: 0.5625rem;
      letter-spacing: 0.08038rem;/* Adjust padding to center the text */
      padding-right: 1rem;
      }
  
   .card-back img{
      width:100%;
   }
  
   .card-front{
     margin-top: -3.7rem;
     margin-right: 4rem;
     position:relative;
   }
  
   .card-front .bg-card-front{
      width:100%;
   }
   .card-front .details{
     margin-top: -7rem;
     margin-left: 1rem;
     width:20%;
     position: absolute;
     
   }
  .cardholder-name-result{
   color: var(--White);
    font-size: 0.5625rem;
    letter-spacing: 0.08038rem;
    text-transform: uppercase;
  }
  .info{
    display: flex;
    gap: 3rem;
    margin-top:-1.5rem;
    margin-left:1rem;
    position: absolute;
  }
    .date-result{
    color: var(--White);
    font-size: 0.5625rem;
    letter-spacing: 0.08038rem;
    align-items: flex-end;
    }
  </style>