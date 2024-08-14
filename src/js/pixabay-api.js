export function getPhotos (userQuery) {
   const searchParams = new URLSearchParams({
    key:"45431575-a54d9a4f673da9f6ecaf0fabb", 
    q: userQuery, image_type:"photo", 
    orientation:"horizontal", 
    safesearch: true})

    return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
   
  
}


