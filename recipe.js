document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const foodId = params.get('id');

    const recipeTitle = document.getElementById('recipe-title');
    const recipeContent = document.getElementById('recipe-content');

    const food = foodData.find(f => f.id === foodId);

    if (food) {
        // レシピが一つ以上存在するかチェック
        if (food.recipes && food.recipes.length > 0) {
            const recipe = food.recipes[0]; // 最初のレシピを表示

            recipeTitle.textContent = recipe.recipeName;

            let videoHtml = '';
            if (recipe.youtubeUrl) {
                videoHtml = `
                    <a href="${recipe.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link">
                        YouTubeでレシピ動画を見る
                    </a>
                `;
            }

            let ingredientsHtml = recipe.ingredients.map(ing => `<li>${ing.name} <span class="amount">${ing.amount}</span></li>`).join('');
            let instructionsHtml = recipe.instructions.map(step => `<li>${step}</li>`).join('');

            recipeContent.innerHTML = `
                ${videoHtml}
                <p class="recipe-description">${recipe.description}</p>
                
                <h3 class="section-title">材料 (${recipe.servings})</h3>
                <ul class="ingredients-list">
                    ${ingredientsHtml}
                </ul>

                <h3 class="section-title">作り方</h3>
                <ol class="instructions-list">
                    ${instructionsHtml}
                </ol>
            `;

        } else {
            recipeTitle.textContent = `${food.name} のレシピ`;
            recipeContent.innerHTML = `
                <p>現在、${food.name}のレシピを準備中です。</p>
                <p>もうしばらくお待ちください。</p>
            `;
        }
    } else {
        recipeTitle.textContent = 'レシピが見つかりません';
        recipeContent.innerHTML = '<p>指定された食品のレシピは見つかりませんでした。トップページから再度お試しください。</p>';
    }
});