document.addEventListener('DOMContentLoaded', function() {
    const foodData = [
        {
            name: '豚レバー',
            iron: '13.0mg',
            recipe: 'レバニラ炒め、レバーの甘辛煮'
        },
        {
            name: '鶏レバー',
            iron: '9.0mg',
            recipe: 'レバーパテ、焼き鳥'
        },
        {
            name: 'あさり (水煮缶)',
            iron: '29.7mg',
            recipe: 'あさりの味噌汁、ボンゴレビアンコ、クラムチャウダー'
        },
        {
            name: 'ひじき (乾燥)',
            iron: '6.2mg',
            recipe: 'ひじきの煮物、ひじきご飯'
        },
        {
            name: '小松菜',
            iron: '2.8mg',
            recipe: 'おひたし、スムージー、炒め物'
        },
        {
            name: 'ほうれん草',
            iron: '2.0mg',
            recipe: 'ほうれん草のソテー、ごま和え、キッシュ'
        },
        {
            name: '高野豆腐',
            iron: '6.8mg',
            recipe: '煮物、卵とじ'
        }
    ];

    const foodList = document.getElementById('food-list');

    foodData.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.textContent = food.name;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.innerHTML = `
            <p><strong>鉄分含有量 (100gあたり):</strong> ${food.iron}</p>
            <p><strong>おすすめ料理:</strong> ${food.recipe}</p>
        `;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        foodList.appendChild(card);
    });
});
