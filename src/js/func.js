import { Collapse, Tooltip } from 'bootstrap';
export const func = async () => {
  const accordionElement = document.querySelector('#accordionExample');
  const collapseInstance = new Collapse(accordionElement);
  // Show the first accordion item
  collapseInstance.show(0);

  // Hide the second accordion item
  collapseInstance.hide(1);
  
  // Tooltip for copy code
  const copyCode = () => {
    const codeBlock = document.querySelector('.codex');
    const codeText = codeBlock.innerText;
    const clipboard = navigator.clipboard;
    clipboard
      .writeText(codeText)
      .then(() => {
        // Show tooltip with success message
        const tooltipTrigger = document.querySelector('.copy-container');
        const tooltip = new Tooltip(tooltipTrigger, {
          title: 'Code copied to clipboard!',
          trigger: 'manual',
          placement: 'bottom',
        });
        tooltip.show();
        // Hide tooltip after 2 seconds
        setTimeout(() => {
          tooltip.hide();
        }, 2000);
      })
      .catch((err) => console.error(err));
  };

  const copyIcon = document.querySelector('.copy-container');
  copyIcon.addEventListener('click', copyCode);

};
