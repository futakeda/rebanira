document.addEventListener('DOMContentLoaded', function() {
    const foodList = document.getElementById('food-list');

    foodData.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';

        const img = document.createElement('img');
        img.src = food.image;
        img.alt = food.name;

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.textContent = food.name;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.innerHTML = `
            <p><strong>鉄分含有量 (100gあたり):</strong> ${food.iron}</p>
            <p><strong>おすすめ料理:</strong> ${food.recipe_summary}</p>
        `;

        const recipeLink = document.createElement('a');
        recipeLink.href = `recipe.html?id=${food.id}`;
        recipeLink.className = 'recipe-link';
        recipeLink.textContent = 'レシピを見る';
        cardBody.appendChild(recipeLink);

        card.appendChild(img);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        foodList.appendChild(card);
    });
});
