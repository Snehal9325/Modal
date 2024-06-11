document.addEventListener('DOMContentLoaded', () => 
  {
  let counterValue = 0;
  const openModal = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
  const closeModal = document.querySelector('.close');
  const counterDisplay = document.getElementById('counter');
  const increment = document.getElementById('increment');
  const decrement = document.getElementById('decrement');
  const reset = document.getElementById('reset');
    const oddeven= document.getElementById('demo');
  
  openModal.addEventListener('click', () => {
      modal.style.display = 'block';
  });

  
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });


  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });

 
  increment.addEventListener('click', () => {
      counterValue++;
      if(counterValue>=0){
        if(counterValue%2==0){
          oddeven.innerHTML = "Even!";
          counterDisplay.textContent= counterValue;
          }
        else{
          oddeven.innerHTML = "Odd!";
          counterDisplay.textContent=counterValue;
        }
        
      }	
      
  });

  
  decrement.addEventListener('click', () => {
      counterValue--;
      if(counterValue>=0){
        if(counterValue%2==0){
          oddeven.innerHTML = "Even!";
          counterDisplay.textContent= counterValue;
          }
        else{
          oddeven.innerHTML = "Odd!";
          counterDisplay.textContent=counterValue;
        }
        
      }	
  });

 
  reset.addEventListener('click', () => {
      counterValue = 0;
      counterDisplay.textContent = counterValue;
      oddeven.innerHTML = " ";
  });
});