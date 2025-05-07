// Инициализация VK Mini App
VK.init(function() {
    console.log("VK Mini App инициализирован");
});

// Локальное хранилище (localStorage)
let totalCalories = localStorage.getItem('totalCalories') || 0;
updateTotal();

function addProduct() {
    const product = document.getElementById('product').value;
    const calories = parseFloat(document.getElementById('calories').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!product || !calories || !weight) {
        alert("Заполните все поля!");
        return;
    }

    // Расчет калорий
    const total = (calories * weight) / 100;
    totalCalories = parseFloat(totalCalories) + total;

    // Сохранение в localStorage
    localStorage.setItem('totalCalories', totalCalories);

    // Обновление интерфейса
    updateTotal();
    addToLog(`🍴 ${product}: ${total.toFixed(2)} ккал`);
}

function updateTotal() {
    document.getElementById('total').textContent = totalCalories.toFixed(2);
}

function addToLog(text) {
    const log = document.getElementById('log');
    log.innerHTML = `<div>${text}</div>` + log.innerHTML;
}