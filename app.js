//This code is for the responsive headder
function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :(e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

// Dictionary data (example)
const dictionary = {
    hello: 'A greeting or expression of goodwill.',
    world: 'The earth, together with all of its countries, peoples, and natural features.',
    // Add more words and definitions as needed
  };

  const searchInput = document.getElementById('searchInput');
  const definitionText = document.getElementById('definitionText');
  const definitionContainer = document.getElementById('definition');
  const notFoundContainer = document.getElementById('notFound');
  const autocompleteContainer = document.getElementById('autocompleteContainer');

  searchInput.addEventListener('input', () => {
    const word = searchInput.value.toLowerCase();
    if (dictionary.hasOwnProperty(word)) {
      definitionText.textContent = dictionary[word];
      definitionContainer.classList.remove('hidden');
      notFoundContainer.classList.add('hidden');
    } else {
      definitionContainer.classList.add('hidden');
      notFoundContainer.classList.remove('hidden');
    }
    showAutocompleteResults(getAutocompleteSuggestions(word));
  });

  function getAutocompleteSuggestions(prefix) {
    const suggestions = [];
    for (const word in dictionary) {
      if (word.startsWith(prefix)) {
        suggestions.push(word);
      }
    }
    return suggestions;
  }

  function showAutocompleteResults(suggestions) {
    autocompleteContainer.innerHTML = '';
    suggestions.forEach((word) => {
      const suggestionElement = document.createElement('div');
      suggestionElement.textContent = word;
      suggestionElement.classList.add('cursor-pointer', 'hover:bg-gray-100', 'p-2', 'rounded');
      suggestionElement.addEventListener('click', () => {
        searchInput.value = word;
        searchInput.dispatchEvent(new Event('input'));
      });
      autocompleteContainer.appendChild(suggestionElement);
    });
  }