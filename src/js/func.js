import { Collapse} from 'bootstrap';
export const func = async () => {
  const accordionElement = document.querySelector('#accordionExample');
  const collapseInstance = new Collapse(accordionElement);
  // Show the first accordion item
  collapseInstance.show(0);

  // Hide the second accordion item
  collapseInstance.hide(1);
  
  

};
