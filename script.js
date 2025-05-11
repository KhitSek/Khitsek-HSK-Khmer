async function fetchVocabularyData(listId, jsonFile, category) {
    const wordListDiv = document.getElementById(listId);
    wordListDiv.innerHTML = '';
  
    try {
      const response = await fetch(jsonFile);
      const data = await response.json();
      const categoryData = data[category];
  
      if (categoryData && categoryData.length > 0) {
        const container = document.createElement('div');
        container.className = 'vocab-grid';  // Use grid container for flexible columns
  
        categoryData.forEach(item => {
          const card = document.createElement('div');
          card.className = 'vocab-card';
          card.innerHTML = `
            <strong class="vocab-word">${item.word.toUpperCase()}</strong>
            <div class="vocab-pinyin">${item.pinyin || ''}</div>
            <div class="vocab-meaning">${item.meaning || ''}</div>
          `;
          container.appendChild(card);
        });
  
        wordListDiv.appendChild(container);
        wordListDiv.style.display = 'block';
      } else {
        wordListDiv.innerHTML = '<p>No data found.</p>';
      }
  
    } catch (err) {
      wordListDiv.innerHTML = '<p style="color: red;">Error loading words.</p>';
    }
  }
  
  function setupVocabularyButton(buttonId, listId, jsonFile, category) {
    const button = document.getElementById(buttonId);
    const wordListDiv = document.getElementById(listId);
    let shown = false;
  
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (shown) {
        wordListDiv.style.display = 'none';
        shown = false;
      } else {
        fetchVocabularyData(listId, jsonFile, category);
        shown = true;
      }
    });
  }
  
  // Set up all three buttons for different categories
  setupVocabularyButton('vocabularyButton-words', 'wordList-words', '/words.json', '生词');
  setupVocabularyButton('vocabularyButton-sentences', 'wordList-sentences', '/words.json', '造句');
  setupVocabularyButton('vocabularyButton-grammar', 'wordList-grammar', '/words.json', '语法');
  