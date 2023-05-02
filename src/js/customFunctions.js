export const customFunctions = async () => {
    class ScrollUpButton {
        constructor(selector) {
          this.element = document.querySelector(selector);
          this.element.addEventListener("click", this.handleButtonClick.bind(this));
        }
        
        handleButtonClick() {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      }
      
      const scrollUpButton = new ScrollUpButton(".scroll-up");

}