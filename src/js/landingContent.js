export const landingContent = async () => {
  
    const headerContent = document.getElementById('header');
  
    try {
      const response = await fetch('./data/content.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const content = await response.json();
      const title = content.title;
      const subtitle = content.subtitle;
      const contentHtml = content.content;
      headerContent.innerHTML = `<h1>${title}</h1><h1>${subtitle}</h1><p>${contentHtml}</p>`;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  