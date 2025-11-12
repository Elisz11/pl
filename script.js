window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(f => f.reset());


    document.querySelectorAll('.question').forEach(qDiv => {
        const inputs = qDiv.querySelectorAll('input[type="radio"]');
        const labels = qDiv.querySelectorAll('label[for]');
        inputs.forEach((input, i) => {
            const newId = `${qDiv.id}-opt-${i}`;
            input.id = newId;
            if (labels[i]) labels[i].htmlFor = newId;
        });
    });
});
window.addEventListener('pageshow', (e) => {
    if (e.persisted) document.querySelectorAll('form').forEach(f => f.reset());
});

document.querySelectorAll('.question').forEach(qDiv => {
    if (qDiv.id !== "1") qDiv.style.display = "none";

    qDiv.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            let isCorrect = this.value === "true";
            let nextId = String(Number(qDiv.id) + 1);
            let nextDiv = document.getElementById(nextId);

            if (isCorrect) {
                if (nextDiv) {
                    nextDiv.style.display = "block";
                } else {
                    alert("8");
                }
            } else {
                location.reload();
            }
        });
    });
});